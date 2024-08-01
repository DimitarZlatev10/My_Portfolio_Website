import { useState } from '#app';

export const useFormSubmitted = () => useState('formSubmitted', () => false);
