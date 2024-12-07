import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
    ]),
]);