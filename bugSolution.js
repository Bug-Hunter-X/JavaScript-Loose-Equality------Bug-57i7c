function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // ... rest of your function
  return a === b; // Use strict equality
}