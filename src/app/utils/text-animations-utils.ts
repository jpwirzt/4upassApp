import { ElementRef } from "@angular/core";

export class TextAnimationsUtils {

    /**
     * @summary Crea una animación de scroll e injecta los estilos en el head del documento
     * 
     * @param elementRef Referencia al elemento del DOM que se va a animar
     * @param index Si se desea crear más de una animación en la misma página, se debe pasar un índice único para cada una
     * @param containerClass Si el elemento se encuentra dentro de un contenedor, se puede pasar la clase del contenedor para que la animación se active al hacer hover sobre el contenedor
     */
    public static crearAnimacionScrollInfinito(elementRef: ElementRef, index: number = -1, containerClass: string = undefined, isMobile: boolean = false) {
        const speed = 45;
        const element = elementRef.nativeElement;
        const containerWidth = element.clientWidth;
        const textWidth = element.scrollWidth;

        // Calculate the total distances
        const distanceLeft = textWidth ;  // Left movement (disappearing left)
        const distanceRight = containerWidth ; // Right movement (appearing from right)

        // Calculate the durations for each movement
        const durationLeft = distanceLeft / speed;
        const durationRight = distanceRight / speed;

        const medio = (durationLeft / (durationLeft + durationRight)) * 100
        const animationDuration = durationLeft + durationRight;

        const i = index == -1 ? '' : index;

        const elStyles = `
            .efecto${i}{
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-duration: ${animationDuration}s;
                    animation-name: scrollText${i};
                    animation-delay: 0.3s;
            }
        `;

        // const efecto = containerClass ? `.${containerClass}:hover {${elStyles}}` : elStyles;
        
        const efecto = !isMobile && containerClass
            ? `.${containerClass}:hover {${elStyles}}`
            : elStyles;
        

        // Create unique keyframes for each text
        const keyframes = `
            @keyframes scrollText${i} {
                0% {
                    transform: translateX(0); /* Start at the left */
                }
                ${medio.toFixed(2)}% {
                    opacity: 1;
                    transform: translateX(-${textWidth}px); /* Move left until out of view */
                }
                ${(medio + 0.01).toFixed(2)}% {
                    opacity: 0;
                    transform: translateX(-${textWidth}px); /* Move left until out of view */
                }
                ${(medio + 0.02).toFixed(2)}% {
                    opacity: 0;
                    transform: translateX(${containerWidth}px); /* Instantly jump to the right, outside container */
                }
                ${(medio + 0.03).toFixed(2)}% {
                    opacity: 1;
                    transform: translateX(${containerWidth}px); /* Instantly jump to the right, outside container */
                }
                100% {
                    transform: translateX(0); /* Return to the start position */
                }
            }
        `;

        // Inject keyframes into the document
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = efecto + keyframes;
        document.head.appendChild(styleSheet);

        if (isMobile) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            
                            // Restart animation by re-adding the class
                            // element.classList.remove(`efecto${i}`);

                            // Trigger reflow to reset animation
                            // void element.offsetWidth;
                            
                            setTimeout(() => {
                                element.classList.add(`efecto${i}`);
                            }, 300);
                        }
                    });
                },
                { threshold: 0.1 } // Trigger when 10% of the element is visible
            );

            observer.observe(element);
        }
    }
}