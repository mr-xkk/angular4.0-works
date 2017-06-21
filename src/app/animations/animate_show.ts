import { trigger, style, transition, animate,keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition("void => *", [
    style({ opacity: 0 }),
    animate(1000, keyframes([
        style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(25px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
      ]))
  ])
]);