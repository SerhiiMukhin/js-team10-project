import { getGenres } from './get-genres';
import { createPopularPagination } from './pagination-popular';

document.addEventListener('DOMContentLoaded', getGenres());
document.addEventListener('DOMContentLoaded', createPopularPagination());
