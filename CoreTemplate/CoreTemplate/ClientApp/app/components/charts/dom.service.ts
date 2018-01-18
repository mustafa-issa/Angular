import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ElementRef,
    ViewContainerRef,
    ComponentFactory,
    ComponentRef
} from '@angular/core';

@Injectable()
export class DomService {
  componentRef: ComponentRef<any>;
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector,
  ) { }
  
  appendComponentToElement(component: any, elementRef: ElementRef) {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    
    // 4. Append DOM element to the body
    elementRef.nativeElement.appendChild(domElem);
    //document.body.appendChild(domElem);
    
    // 5. Wait some time and remove it from the component tree and from the DOM
    // setTimeout(() => {
    //     this.appRef.detachView(componentRef.hostView);
    //     componentRef.destroy();
    // }, 3000);
  }

  createComponent(type: any, container: ViewContainerRef, component: any) {

    const factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = container.createComponent(factory);    
    this.componentRef.instance.pageTitle = type;
    this.componentRef.instance.data = [
      ['Group 1', 45.0],
      ['Group 2', 26.8],
      ['Group 3', 12.8],
      ['Group 4', 8.5],
      ['Group 5', 6.2],
      ['Group 6', 0.7]
  ];
  this.componentRef.instance.type = type;
  }
}
