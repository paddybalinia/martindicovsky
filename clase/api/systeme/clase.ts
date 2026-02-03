/**
 * Vercel Serverless Function que actúa como proxy para evitar CORS
 * Esta función se ejecuta en el servidor de Vercel
 * Compatible con Edge Runtime y Node.js Runtime
 */
export const config = {
  runtime: 'edge', // Usa Edge Runtime para mejor rendimiento
};

export default async function handler(req: Request): Promise<Response> {
  // Manejar preflight CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    );
  }

  try {
    // Obtener el body de la petición
    const body = await req.json();

    // Hacer la petición a systeme.io
    const systemeResponse = await fetch('https://1c1b-coach.systeme.io/clase', {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/json',
        'origin': 'https://1c1b-coach.systeme.io',
        'referer': 'https://1c1b-coach.systeme.io/clase',
      },
      body: JSON.stringify(body),
    });

    // Obtener el texto de la respuesta
    const responseText = await systemeResponse.text();

    // Headers CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Crear la respuesta con el mismo status code
    // Intentar parsear como JSON, si falla devolver como texto
    try {
      const jsonData = JSON.parse(responseText);
      return new Response(JSON.stringify(jsonData), {
        status: systemeResponse.status,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    } catch {
      return new Response(responseText, {
        status: systemeResponse.status,
        headers: {
          'Content-Type': 'text/plain',
          ...corsHeaders,
        },
      });
    }
  } catch (error) {
    console.error('Error en proxy:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error al procesar la petición',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
