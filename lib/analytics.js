/**
 * Google Analytics 4 (GA4) Conversion & Event Tracking Helper
 * Measurement ID: G-QT1CZE5BJK
 */

export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams)
    } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      })
    }
  } catch (err) {
    console.warn('[Analytics] Failed to send event:', eventName, err)
  }
}

/**
 * Standard GA4 Lead Generation Conversion Event
 * Triggers: 'generate_lead' (Official GA4 Key Event) and 'contact_submit'
 */
export function trackLead({ formName = 'contact_form', service = 'all', city = 'all', method = 'website_form', value = 150 } = {}) {
  trackEvent('generate_lead', {
    form_name: formName,
    service_type: service,
    city_target: city,
    lead_method: method,
    currency: 'EUR',
    value: value,
  })

  trackEvent('contact_submit', {
    form_name: formName,
    service_type: service,
  })
}

/**
 * WhatsApp Chat Lead Trigger
 */
export function trackWhatsAppClick({ location = 'unknown', label = 'WhatsApp Chat' } = {}) {
  trackEvent('click_whatsapp', {
    event_category: 'Contact',
    event_label: label,
    click_location: location,
  })
  
  trackEvent('generate_lead', {
    form_name: 'whatsapp_button',
    lead_method: 'whatsapp',
    click_location: location,
    currency: 'EUR',
    value: 100,
  })
}

/**
 * Direct Call Trigger
 */
export function trackPhoneClick({ location = 'unknown', phone = '+491724106463' } = {}) {
  trackEvent('click_call', {
    event_category: 'Contact',
    phone_number: phone,
    click_location: location,
  })
  
  trackEvent('generate_lead', {
    form_name: 'phone_call',
    lead_method: 'phone',
    currency: 'EUR',
    value: 100,
  })
}
