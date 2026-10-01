// Accessibility preferences (text size, contrast), stored per browser.
export const A11Y_STORAGE_KEY = 'glial-a11y'

export function readA11yPrefs() {
  try {
    return JSON.parse(localStorage.getItem(A11Y_STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

/** Applies saved preferences before the app first renders. */
export function applySavedA11yPrefs() {
  const prefs = readA11yPrefs()
  if (prefs.textSize) document.documentElement.dataset.textSize = prefs.textSize
  if (prefs.contrast) document.documentElement.dataset.contrast = prefs.contrast
}
