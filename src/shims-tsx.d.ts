import Vue, { VNode, VueConstructor as VConstructor } from "vue";
import * as dec from "vue-property-decorator";

declare global {
  namespace JSX {
    interface Element extends VNode { }
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  const Vue = typeof dec.Vue;
  type VueConstructor = VConstructor;
  const Component: typeof dec.Component;
  const Prop: typeof dec.Prop;
  const Ref: typeof dec.Ref;
  const Watch: typeof dec.Watch;
  const Emit: typeof dec.Emit;
  const Inject: typeof dec.Inject;
  const InjectReactive: typeof dec.InjectReactive;
  const Model: typeof dec.Model;
  const PropSync: typeof dec.PropSync;
  const Provide: typeof dec.Provide;
  const ProvideReactive: typeof dec.ProvideReactive;
}
