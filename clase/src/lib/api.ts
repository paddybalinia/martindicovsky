/**
 * Envía los datos del formulario al endpoint de systeme.io
 */
export async function submitOptinForm(firstName: string, email: string): Promise<void> {
  // Detectar zona horaria del usuario
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Detectar si es desktop (ancho >= 768px)
  const isDesktop = window.innerWidth >= 768;
  
  // Usar siempre el proxy (funciona en desarrollo con Vite y en producción con Vercel)
  const url = '/api/systeme/clase';
  
  // Datos según el formato del curl
  const payload = {
    optin: {
      fields: {
        first_name: firstName,
        email: email,
      },
      timeZone: timeZone,
      popupId: null,
      isDesktop: isDesktop,
      entityId: "3fe6991d-bba3-43d4-9e91-7d8c5783f2d1",
      checkBoxIds: [],
    },
  };
  
  // Headers - no incluimos origin y referer ya que el navegador los maneja automáticamente
  // y pueden causar problemas de CORS si se establecen manualmente
  const headers: HeadersInit = {
    'accept': 'application/json, text/plain, */*',
    'content-type': 'application/json',
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload),
    // No incluimos credentials ya que puede causar problemas de CORS
    // mode: 'cors' es el predeterminado
  });
  
  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(`Error al enviar el formulario: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ''}`);
  }
  
  return;
}
