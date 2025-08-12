import { LocalizationService } from '@abp/ng.core';
import { LinkService } from '@proxy/tickets/links';
import { CustomModalService } from '../services/custom-modal.service';
import { catchError, firstValueFrom, map, of } from 'rxjs';

export class LinkUtils {
    static copyLink(
        linkService: LinkService,
        localizationService: LocalizationService,
        customModalService: CustomModalService,
        textToCopy: string
    ) {
        // Arreglo para safari, gracias senior de https://wolfgangrittner.dev/how-to-use-clipboard-api-in-firefox/
        if (typeof ClipboardItem && navigator.clipboard.write) {
            // NOTE: Safari locks down the clipboard API to only work when triggered
            //   by a direct user interaction. You can't use it async in a promise.
            //   But! You can wrap the promise in a ClipboardItem, and give that to
            //   the clipboard API.
            //   Found this on https://developer.apple.com/forums/thread/691873
            const text = new ClipboardItem({
                "text/plain": firstValueFrom(linkService.createShortLink(textToCopy)
                    .pipe(map((text) => new Blob([text], { type: "text/plain" })),
                        catchError((error) => {
                            console.error('Error al generar el link corto:', error);
                            return of(new Blob([textToCopy], { type: "text/plain"}))
                        })))
            });
            navigator.clipboard.write([text]).then(() => {
                let mensaje = localizationService.instant('::LinkCopiado');
                customModalService.showCustomModal(mensaje, 'confirm');
            }).catch(error => {
                console.error('Error copia chrome safari', error)
                let mensaje = localizationService.instant('::ErrorLinkCopiado' + '\n' + error);
                customModalService.showCustomModal(mensaje, 'warning');
            });
        } else {
            // NOTE: Firefox has support for ClipboardItem and navigator.clipboard.write,
            //   but those are behind `dom.events.asyncClipboard.clipboardItem` preference.
            //   Good news is that other than Safari, Firefox does not care about
            //   Clipboard API being used async in a Promise.
            linkService.createShortLink(textToCopy)
                .pipe(catchError((error) => {
                    console.error('Error al generar el link corto:', error);
                    return of(textToCopy);
                })).subscribe({
                next: link => {
                    navigator.clipboard.writeText(link).then(() => {
                        let mensaje = localizationService.instant('::LinkCopiado');
                        customModalService.showCustomModal(mensaje, 'confirm');
                    }).catch(error => {
                        console.error('Error copia firefox', error)
                        let mensaje = localizationService.instant('::ErrorLinkCopiado' + '\n' + error);
                        customModalService.showCustomModal(mensaje, 'warning');
                    });
                },
                error: error => {
                    console.error('Error al generar el link corto:', error);
                }
            });
        }
    }
}
