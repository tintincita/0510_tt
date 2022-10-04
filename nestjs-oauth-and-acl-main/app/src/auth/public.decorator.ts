import { SetMetadata } from '@nestjs/common';

// where is the right place for this file? it can be anywhere and still work... so where?
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
