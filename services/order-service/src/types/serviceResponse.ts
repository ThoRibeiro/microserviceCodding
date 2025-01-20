export interface IServiceResponse<T> {
    status: number; // Code HTTP
    message?: string; // Message optionnel
    data?: T; // Les données renvoyées (facultatif)
    error?: any; // L'erreur (si applicable)
  }
  