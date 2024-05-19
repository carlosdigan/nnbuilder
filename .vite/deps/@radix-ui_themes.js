import {
  __assign,
  __rest,
  __spreadArray,
  _extends
} from "./chunk-P6LRUPDI.js";
import {
  require_react_dom
} from "./chunk-KB4VQC4Z.js";
import {
  require_react
} from "./chunk-PMYDY72F.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i22 = 0; i22 < arguments.length; i22++) {
          var arg = arguments[i22];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/@radix-ui/react-accessible-icon/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/@radix-ui/react-slot/dist/index.mjs
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react2.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react2.Children.count(newElement) > 1)
          return import_react2.Children.only(null);
        return (0, import_react2.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return (0, import_react2.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), (0, import_react2.isValidElement)(newElement) ? (0, import_react2.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return (0, import_react2.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if ((0, import_react2.isValidElement)(children))
    return (0, import_react2.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
  return import_react2.Children.count(children) > 1 ? import_react2.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return (0, import_react2.createElement)(import_react2.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return (0, import_react2.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue)
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      else if (slotPropValue)
        overrideProps[propName] = slotPropValue;
    } else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node2 = (0, import_react3.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react3.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return (0, import_react3.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node2.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node2
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var $ea1ef594cf570d83$var$NAME = "VisuallyHidden";
var $ea1ef594cf570d83$export$439d29a4e110a164 = (0, import_react4.forwardRef)((props, forwardedRef) => {
  return (0, import_react4.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
Object.assign($ea1ef594cf570d83$export$439d29a4e110a164, {
  displayName: $ea1ef594cf570d83$var$NAME
});
var $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;

// node_modules/@radix-ui/react-accessible-icon/dist/index.mjs
var $08b6689415b2f49a$var$NAME = "AccessibleIcon";
var $08b6689415b2f49a$export$5aec92af04ace2d2 = ({ children, label }) => {
  const child = import_react5.Children.only(children);
  return (0, import_react5.createElement)(import_react5.Fragment, null, (0, import_react5.cloneElement)(child, {
    // accessibility
    "aria-hidden": "true",
    focusable: "false"
    // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
  }), (0, import_react5.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, null, label));
};
Object.assign($08b6689415b2f49a$export$5aec92af04ace2d2, {
  displayName: $08b6689415b2f49a$var$NAME
});

// node_modules/@radix-ui/themes/dist/esm/components/alert-dialog.js
var alert_dialog_exports = {};
__export(alert_dialog_exports, {
  Action: () => D,
  Cancel: () => A2,
  Content: () => p3,
  Description: () => m4,
  Root: () => n4,
  Title: () => g2,
  Trigger: () => s4
});
var e13 = __toESM(require_react(), 1);
var import_classnames5 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-context/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = (0, import_react6.createContext)(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = (0, import_react6.useMemo)(
      () => context,
      Object.values(context)
    );
    return (0, import_react6.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext6(consumerName) {
    const context = (0, import_react6.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext6
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = (0, import_react6.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react6.useMemo)(
        () => context,
        Object.values(context)
      );
      return (0, import_react6.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext6(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react6.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext6
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return (0, import_react6.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react6.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react6.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var $2AODx$react = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react7.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react8 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react8.useRef)(callback);
  (0, import_react8.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react8.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react9.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react9.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react9.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react9.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react10 = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react10.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME = "DismissableLayer";
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = (0, import_react11.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = (0, import_react11.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react11.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react11.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react11.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react11.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react11.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react11.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return (0, import_react11.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
Object.assign($5cb92bef7577960e$export$177fb62ff3ec1f22, {
  displayName: $5cb92bef7577960e$var$DISMISSABLE_LAYER_NAME
});
var $5cb92bef7577960e$var$BRANCH_NAME = "DismissableLayerBranch";
var $5cb92bef7577960e$export$4d5eb2109db14228 = (0, import_react11.forwardRef)((props, forwardedRef) => {
  const context = (0, import_react11.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const ref = (0, import_react11.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react11.useEffect)(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [
    context.branches
  ]);
  return (0, import_react11.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, props, {
    ref: composedRefs
  }));
});
Object.assign($5cb92bef7577960e$export$4d5eb2109db14228, {
  displayName: $5cb92bef7577960e$var$BRANCH_NAME
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react11.useRef)(false);
  const handleClickRef = (0, import_react11.useRef)(() => {
  });
  (0, import_react11.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react11.useRef)(false);
  (0, import_react11.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var import_react12 = __toESM(require_react(), 1);
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$var$FOCUS_SCOPE_NAME = "FocusScope";
var $d3863c46a17e8a28$export$20e40289641fbbb6 = (0, import_react12.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react12.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react12.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react12.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react12.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react12.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react12.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return (0, import_react12.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
Object.assign($d3863c46a17e8a28$export$20e40289641fbbb6, {
  displayName: $d3863c46a17e8a28$var$FOCUS_SCOPE_NAME
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react13 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var $f1701beae083dbae$var$PORTAL_NAME = "Portal";
var $f1701beae083dbae$export$602eac185826482c = (0, import_react13.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? import_react_dom2.default.createPortal((0, import_react13.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});
Object.assign($f1701beae083dbae$export$602eac185826482c, {
  displayName: $f1701beae083dbae$var$PORTAL_NAME
});

// node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react14 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react14.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react14.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? (0, import_react14.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react14.useState)();
  const stylesRef = (0, import_react14.useRef)({});
  const prevPresentRef = (0, import_react14.useRef)(present);
  const prevAnimationNameRef = (0, import_react14.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react14.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom3.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react14.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react15.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React9 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React5 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react16 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react16.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react17 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a39) {
  return a39;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x5) {
          return x5 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x5) {
          return cb(x5);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x5) {
          pendingQueue.push(x5);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React3 = __toESM(require_react());
var import_react18 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React4 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React4.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React5.forwardRef(function(props, parentRef) {
  var ref = React5.useRef(null);
  var _a = React5.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React5.createElement(
    React5.Fragment,
    null,
    enabled && React5.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React5.cloneElement(React5.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React5.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React8 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React7 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React6 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React6.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x5) {
  return parseInt(x5 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var RemoveScrollBar = function(props) {
  var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
  var gap = React7.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React7.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s23 = _a[1], d10 = _a[2];
      if (s23 > d10) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x5, y7) {
  return x5[0] === y7[0] && x5[1] === y7[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React8.useRef([]);
  var touchStartRef = React8.useRef([0, 0]);
  var activeAxis = React8.useRef();
  var id = React8.useState(idCounter++)[0];
  var Style2 = React8.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React8.useRef(props);
  React8.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React8.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React8.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React8.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e42) {
      return e42.name === event.type && e42.target === event.target && deltaCompare(e42.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React8.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e42) {
        return e42 !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React8.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React8.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React8.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React8.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React8.createElement(
    React8.Fragment,
    null,
    inert ? React8.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React8.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React9.forwardRef(function(props, ref) {
  return React9.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x5) {
    return Boolean(x5);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e42) {
          console.error("aria-hidden: cannot operate on ", node, e42);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react19.useRef)(null);
  const contentRef = (0, import_react19.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react19.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
Object.assign($5d3850c4d0b4e6c7$export$3ddf2d174ce01153, {
  displayName: $5d3850c4d0b4e6c7$var$DIALOG_NAME
});
var $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
var $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
Object.assign($5d3850c4d0b4e6c7$export$2e1e1122cf0cba88, {
  displayName: $5d3850c4d0b4e6c7$var$TRIGGER_NAME
});
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react19.Children.map(
    children,
    (child) => (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, (0, import_react19.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
Object.assign($5d3850c4d0b4e6c7$export$dad7c95542bacce0, {
  displayName: $5d3850c4d0b4e6c7$var$PORTAL_NAME
});
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
Object.assign($5d3850c4d0b4e6c7$export$bd1d06c79be19e17, {
  displayName: $5d3850c4d0b4e6c7$var$OVERLAY_NAME
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    (0, import_react19.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return (0, import_react19.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
Object.assign($5d3850c4d0b4e6c7$export$b6d9565de1e068cf, {
  displayName: $5d3850c4d0b4e6c7$var$CONTENT_NAME
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react19.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react19.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react19.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react19.useRef)(false);
  return (0, import_react19.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react19.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return (0, import_react19.createElement)(import_react19.Fragment, null, (0, import_react19.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, (0, import_react19.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
Object.assign($5d3850c4d0b4e6c7$export$16f7638e4a34b909, {
  displayName: $5d3850c4d0b4e6c7$var$TITLE_NAME
});
var $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
var $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
Object.assign($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5, {
  displayName: $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME
});
var $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
var $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
Object.assign($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac, {
  displayName: $5d3850c4d0b4e6c7$var$CLOSE_NAME
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
var $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
var $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
var $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var $905f4ae918aab1aa$var$ROOT_NAME = "AlertDialog";
var [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
  $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
var $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
var $905f4ae918aab1aa$export$de466dd8317b0b75 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends({}, dialogScope, alertDialogProps, {
    modal: true
  }));
};
Object.assign($905f4ae918aab1aa$export$de466dd8317b0b75, {
  displayName: $905f4ae918aab1aa$var$ROOT_NAME
});
var $905f4ae918aab1aa$var$TRIGGER_NAME = "AlertDialogTrigger";
var $905f4ae918aab1aa$export$6edd7a623ef0f40b = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...triggerProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, _extends({}, dialogScope, triggerProps, {
    ref: forwardedRef
  }));
});
Object.assign($905f4ae918aab1aa$export$6edd7a623ef0f40b, {
  displayName: $905f4ae918aab1aa$var$TRIGGER_NAME
});
var $905f4ae918aab1aa$var$PORTAL_NAME = "AlertDialogPortal";
var $905f4ae918aab1aa$export$660f2bfdb986706c = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$602eac185826482c, _extends({}, dialogScope, portalProps));
};
Object.assign($905f4ae918aab1aa$export$660f2bfdb986706c, {
  displayName: $905f4ae918aab1aa$var$PORTAL_NAME
});
var $905f4ae918aab1aa$var$OVERLAY_NAME = "AlertDialogOverlay";
var $905f4ae918aab1aa$export$a707a4895ce23256 = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...overlayProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends({}, dialogScope, overlayProps, {
    ref: forwardedRef
  }));
});
Object.assign($905f4ae918aab1aa$export$a707a4895ce23256, {
  displayName: $905f4ae918aab1aa$var$OVERLAY_NAME
});
var $905f4ae918aab1aa$var$CONTENT_NAME = "AlertDialogContent";
var [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
var $905f4ae918aab1aa$export$94e6af45f0af4efd = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, children, ...contentProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const contentRef = (0, import_react20.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const cancelRef = (0, import_react20.useRef)(null);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
    contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
    titleName: $905f4ae918aab1aa$var$TITLE_NAME,
    docsSlug: "alert-dialog"
  }, (0, import_react20.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider, {
    scope: __scopeAlertDialog,
    cancelRef
  }, (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends({
    role: "alertdialog"
  }, dialogScope, contentProps, {
    ref: composedRefs,
    onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event) => {
      var _cancelRef$current;
      event.preventDefault();
      (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
        preventScroll: true
      });
    }),
    onPointerDownOutside: (event) => event.preventDefault(),
    onInteractOutside: (event) => event.preventDefault()
  }), (0, import_react20.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
Object.assign($905f4ae918aab1aa$export$94e6af45f0af4efd, {
  displayName: $905f4ae918aab1aa$var$CONTENT_NAME
});
var $905f4ae918aab1aa$var$TITLE_NAME = "AlertDialogTitle";
var $905f4ae918aab1aa$export$225e0da62d314b7 = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...titleProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends({}, dialogScope, titleProps, {
    ref: forwardedRef
  }));
});
Object.assign($905f4ae918aab1aa$export$225e0da62d314b7, {
  displayName: $905f4ae918aab1aa$var$TITLE_NAME
});
var $905f4ae918aab1aa$var$DESCRIPTION_NAME = "AlertDialogDescription";
var $905f4ae918aab1aa$export$a23b55cde55ad9a5 = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends({}, dialogScope, descriptionProps, {
    ref: forwardedRef
  }));
});
Object.assign($905f4ae918aab1aa$export$a23b55cde55ad9a5, {
  displayName: $905f4ae918aab1aa$var$DESCRIPTION_NAME
});
var $905f4ae918aab1aa$var$ACTION_NAME = "AlertDialogAction";
var $905f4ae918aab1aa$export$b454f818c58ee85d = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...actionProps } = props;
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, actionProps, {
    ref: forwardedRef
  }));
});
Object.assign($905f4ae918aab1aa$export$b454f818c58ee85d, {
  displayName: $905f4ae918aab1aa$var$ACTION_NAME
});
var $905f4ae918aab1aa$var$CANCEL_NAME = "AlertDialogCancel";
var $905f4ae918aab1aa$export$2f67a923571aaea0 = (0, import_react20.forwardRef)((props, forwardedRef) => {
  const { __scopeAlertDialog, ...cancelProps } = props;
  const { cancelRef } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
  const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
  return (0, import_react20.createElement)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends({}, dialogScope, cancelProps, {
    ref
  }));
});
Object.assign($905f4ae918aab1aa$export$2f67a923571aaea0, {
  displayName: $905f4ae918aab1aa$var$CANCEL_NAME
});
var $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
var $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
var $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
var $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
var $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
var $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
var $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
var $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
var $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

// node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js
var o = { asChild: { type: "boolean" } };

// node_modules/@radix-ui/themes/dist/esm/props/width.props.js
var t = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: true }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: true }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/height.props.js
var e = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: true }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: true }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/dialog.props.js
var r = ["1", "2", "3", "4"];
var s = { ...o, align: { type: "enum", className: "rt-r-align", values: ["start", "center"], default: "center" }, size: { type: "enum", className: "rt-r-size", values: r, default: "3", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "600px" }, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/heading.js
var o5 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/props/color.prop.js
var o2 = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"];
var e2 = ["auto", "gray", "mauve", "slate", "sage", "olive", "sand"];
var r2 = { color: { type: "enum", values: o2, default: void 0 } };
var s2 = { color: { type: "enum", values: o2, default: "" } };

// node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js
var o3 = { highContrast: { type: "boolean", className: "rt-high-contrast", default: void 0 } };

// node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js
var e3 = ["normal", "start", "end", "both"];
var r3 = { trim: { type: "enum", className: "rt-r-lt", values: e3, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js
var e4 = ["left", "center", "right"];
var t2 = { align: { type: "enum", className: "rt-r-ta", values: e4, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js
var e5 = ["wrap", "nowrap", "pretty", "balance"];
var r4 = { wrap: { type: "enum", className: "rt-r-tw", values: e5, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js
var e6 = { truncate: { type: "boolean", className: "rt-truncate" } };

// node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js
var e7 = ["light", "regular", "medium", "bold"];
var t3 = { weight: { type: "enum", className: "rt-r-weight", values: e7, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/heading.props.js
var m = ["h1", "h2", "h3", "h4", "h5", "h6"];
var a = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var n = { as: { type: "enum", values: m, default: "h1" }, ...o, size: { type: "enum", className: "rt-r-size", values: a, default: "6", responsive: true }, ...t3, ...t2, ...r3, ...e6, ...r4, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js
var import_classnames = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/props/prop-def.js
var e8 = ["initial", "xs", "sm", "md", "lg", "xl"];

// node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js
function e9(n24, r43) {
  return Object.prototype.hasOwnProperty.call(n24, r43);
}

// node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js
function i(e42) {
  return typeof e42 == "object" && Object.keys(e42).some((s23) => e8.includes(s23));
}

// node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js
function R({ className: r43, customProperties: n24, ...t36 }) {
  const p39 = g({ allowArbitraryValues: true, className: r43, ...t36 }), e42 = m2({ customProperties: n24, ...t36 });
  return [p39, e42];
}
function g({ allowArbitraryValues: r43, value: n24, className: t36, propValues: p39, parseValue: e42 = (s23) => s23 }) {
  const s23 = [];
  if (n24) {
    if (typeof n24 == "string" && p39.includes(n24))
      return l(t36, n24, e42);
    if (i(n24)) {
      const i22 = n24;
      for (const o60 in i22) {
        if (!e9(i22, o60) || !e8.includes(o60))
          continue;
        const u10 = i22[o60];
        if (u10 !== void 0) {
          if (p39.includes(u10)) {
            const f21 = l(t36, u10, e42), v8 = o60 === "initial" ? f21 : `${o60}:${f21}`;
            s23.push(v8);
          } else if (r43) {
            const f21 = o60 === "initial" ? t36 : `${o60}:${t36}`;
            s23.push(f21);
          }
        }
      }
      return s23.join(" ");
    }
    if (r43)
      return t36;
  }
}
function l(r43, n24, t36) {
  const p39 = r43 ? "-" : "", e42 = t36(n24), s23 = e42 == null ? void 0 : e42.startsWith("-"), i22 = s23 ? "-" : "", o60 = s23 ? e42 == null ? void 0 : e42.substring(1) : e42;
  return `${i22}${r43}${p39}${o60}`;
}
function m2({ customProperties: r43, value: n24, propValues: t36, parseValue: p39 = (e42) => e42 }) {
  let e42 = {};
  if (!(!n24 || typeof n24 == "string" && t36.includes(n24))) {
    if (typeof n24 == "string" && (e42 = Object.fromEntries(r43.map((s23) => [s23, n24]))), i(n24)) {
      const s23 = n24;
      for (const i22 in s23) {
        if (!e9(s23, i22) || !e8.includes(i22))
          continue;
        const o60 = s23[i22];
        if (!t36.includes(o60))
          for (const u10 of r43)
            e42 = { [i22 === "initial" ? u10 : `${u10}-${i22}`]: o60, ...e42 };
      }
    }
    for (const s23 in e42) {
      const i22 = e42[s23];
      i22 !== void 0 && (e42[s23] = p39(i22));
    }
    return e42;
  }
}

// node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js
function l2(...t36) {
  let e42 = {};
  for (const n24 of t36)
    n24 && (e42 = { ...e42, ...n24 });
  return Object.keys(e42).length ? e42 : void 0;
}

// node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js
function N(...r43) {
  return Object.assign({}, ...r43);
}
function v(r43, ...m20) {
  let t36, l11;
  const a39 = { ...r43 }, f21 = N(...m20);
  for (const n24 in f21) {
    let s23 = a39[n24];
    const e42 = f21[n24];
    if (e42.default !== void 0 && s23 === void 0 && (s23 = e42.default), e42.type === "enum" && ![e42.default, ...e42.values].includes(s23) && !i(s23) && (s23 = e42.default), a39[n24] = s23, "className" in e42 && e42.className) {
      delete a39[n24];
      const u10 = "responsive" in e42;
      if (!s23 || i(s23) && !u10)
        continue;
      if (i(s23) && (e42.default !== void 0 && s23.initial === void 0 && (s23.initial = e42.default), e42.type === "enum" && ([e42.default, ...e42.values].includes(s23.initial) || (s23.initial = e42.default))), e42.type === "enum") {
        const i22 = g({ allowArbitraryValues: false, value: s23, className: e42.className, propValues: e42.values, parseValue: e42.parseValue });
        t36 = (0, import_classnames.default)(t36, i22);
        continue;
      }
      if (e42.type === "string" || e42.type === "enum | string") {
        const i22 = e42.type === "string" ? [] : e42.values, [d10, y7] = R({ className: e42.className, customProperties: e42.customProperties, propValues: i22, parseValue: e42.parseValue, value: s23 });
        l11 = l2(l11, y7), t36 = (0, import_classnames.default)(t36, d10);
        continue;
      }
      if (e42.type === "boolean" && s23) {
        t36 = (0, import_classnames.default)(t36, e42.className);
        continue;
      }
    }
  }
  return a39.className = (0, import_classnames.default)(t36, r43.className), a39.style = l2(l11, r43.style), a39;
}

// node_modules/@radix-ui/themes/dist/esm/props/margin.props.js
var e10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
var r5 = { m: { type: "enum | string", values: e10, responsive: true, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: e10, responsive: true, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: e10, responsive: true, className: "rt-r-ml", customProperties: ["--ml"] } };

// node_modules/@radix-ui/themes/dist/esm/components/heading.js
var r6 = o5.forwardRef((p39, t36) => {
  const { children: e42, className: s23, asChild: a39, as: n24 = "h1", color: i22, ...m20 } = v(p39, n, r5);
  return o5.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, { "data-accent-color": i22, ...m20, ref: t36, className: (0, import_classnames2.default)("rt-Heading", s23) }, a39 ? e42 : o5.createElement(n24, null, e42));
});
r6.displayName = "Heading";

// node_modules/@radix-ui/themes/dist/esm/components/text.js
var o6 = __toESM(require_react(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/text.props.js
var m3 = ["span", "div", "label", "p"];
var a2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var n2 = { as: { type: "enum", values: m3, default: "span" }, ...o, size: { type: "enum", className: "rt-r-size", values: a2, responsive: true }, ...t3, ...t2, ...r3, ...e6, ...r4, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/text.js
var p = o6.forwardRef((t36, r43) => {
  const { children: e42, className: s23, asChild: m20, as: a39 = "span", color: n24, ...P6 } = v(t36, n2, r5);
  return o6.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, { "data-accent-color": n24, ...P6, ref: r43, className: (0, import_classnames3.default)("rt-Text", s23) }, m20 ? e42 : o6.createElement(a39, null, e42));
});
p.displayName = "Text";

// node_modules/@radix-ui/themes/dist/esm/components/theme.js
var e12 = __toESM(require_react(), 1);
var import_classnames4 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_react24 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v8) => ({
  x: v8,
  y: v8
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x5,
    y: y7,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y7,
    left: x5,
    right: x5 + width,
    bottom: y7 + height,
    x: x5,
    y: y7
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x5,
    y: y7
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i22 = 0; i22 < validMiddleware.length; i22++) {
    const {
      name,
      fn
    } = validMiddleware[i22];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x5,
      y: y7,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x5 = nextX != null ? nextX : x5;
    y7 = nextY != null ? nextY : y7;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x5,
          y: y7
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i22 = -1;
    }
  }
  return {
    x: x5,
    y: y7,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x5,
    y: y7,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x5,
    y: y7,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x5,
      y: y7,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x5,
      y: y7
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset3 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d10) => d10.overflows[0] <= 0).sort((a39, b8) => a39.overflows[1] - b8.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d10) => [d10.placement, d10.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a39, b8) => a39[1] - b8[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x5,
        y: y7,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x5 + diffCoords.x,
        y: y7 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x5,
        y: y7,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x6,
              y: y8
            } = _ref;
            return {
              x: x6,
              y: y8
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x5,
        y: y7
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x5,
          y: limitedCoords.y - y7
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x5,
        y: y7,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset3 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x5,
        y: y7
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset3, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode2(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode2(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode2(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x5 = ($ ? round(rect.width) : rect.width) / width;
  let y7 = ($ ? round(rect.height) : rect.height) / height;
  if (!x5 || !Number.isFinite(x5)) {
    x5 = 1;
  }
  if (!y7 || !Number.isFinite(y7)) {
    y7 = 1;
  }
  return {
    x: x5,
    y: y7
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x5 = (clientRect.left + visualOffsets.x) / scale.x;
  let y7 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x5 *= iframeScale.x;
      y7 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x5 += left;
      y7 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x5,
    y: y7
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e42) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x5 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y7 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x5 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x5,
    y: y7
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x5 = 0;
  let y7 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x5 = visualViewport.offsetLeft;
      y7 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x5,
    y: y7
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x5 = left * scale.x;
  const y7 = top * scale.y;
  return {
    width,
    height,
    x: x5,
    y: y7
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x5 = rect.left + scroll.scrollLeft - offsets.x;
  const y7 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x5,
    y: y7,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e42) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React10 = __toESM(require_react(), 1);
var import_react21 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var arrow3 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react21.useLayoutEffect : import_react21.useEffect;
function deepEqual(a39, b8) {
  if (a39 === b8) {
    return true;
  }
  if (typeof a39 !== typeof b8) {
    return false;
  }
  if (typeof a39 === "function" && a39.toString() === b8.toString()) {
    return true;
  }
  let length;
  let i22;
  let keys;
  if (a39 && b8 && typeof a39 === "object") {
    if (Array.isArray(a39)) {
      length = a39.length;
      if (length !== b8.length)
        return false;
      for (i22 = length; i22-- !== 0; ) {
        if (!deepEqual(a39[i22], b8[i22])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a39);
    length = keys.length;
    if (length !== Object.keys(b8).length) {
      return false;
    }
    for (i22 = length; i22-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b8, keys[i22])) {
        return false;
      }
    }
    for (i22 = length; i22-- !== 0; ) {
      const key = keys[i22];
      if (key === "_owner" && a39.$$typeof) {
        continue;
      }
      if (!deepEqual(a39[key], b8[key])) {
        return false;
      }
    }
    return true;
  }
  return a39 !== a39 && b8 !== b8;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React10.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React10.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React10.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React10.useState(null);
  const [_floating, _setFloating] = React10.useState(null);
  const setReference = React10.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React10.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React10.useRef(null);
  const floatingRef = React10.useRef(null);
  const dataRef = React10.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React10.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React10.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React10.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React10.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React10.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x5 = roundByDPR(elements.floating, data.x);
    const y7 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x5 + "px, " + y7 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x5,
      top: y7
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React10.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var import_react22 = __toESM(require_react(), 1);
var $7e8f5cd07187803e$var$NAME = "Arrow";
var $7e8f5cd07187803e$export$21b07c8f274aebd5 = (0, import_react22.forwardRef)((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return (0, import_react22.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends({}, arrowProps, {
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), props.asChild ? children : (0, import_react22.createElement)("polygon", {
    points: "0,0 30,0 15,10"
  }));
});
Object.assign($7e8f5cd07187803e$export$21b07c8f274aebd5, {
  displayName: $7e8f5cd07187803e$var$NAME
});
var $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react23 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size3, setSize] = (0, import_react23.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size3;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react24.useState)(null);
  return (0, import_react24.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
Object.assign($cf1ac5d9fe0e8206$export$badac9ada3a0bdf9, {
  displayName: $cf1ac5d9fe0e8206$var$POPPER_NAME
});
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = (0, import_react24.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react24.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react24.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : (0, import_react24.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
Object.assign($cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d, {
  displayName: $cf1ac5d9fe0e8206$var$ANCHOR_NAME
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = (0, import_react24.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react24.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow4, setArrow] = (0, import_react24.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow4);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset2({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift2({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift2() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip2({
        ...detectOverflowOptions
      }),
      size2({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow4 && arrow3({
        element: arrow4,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide2({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react24.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return (0, import_react24.createElement)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, (0, import_react24.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, (0, import_react24.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
Object.assign($cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc, {
  displayName: $cf1ac5d9fe0e8206$var$CONTENT_NAME
});
var $cf1ac5d9fe0e8206$var$ARROW_NAME = "PopperArrow";
var $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = (0, import_react24.forwardRef)(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd02(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
  const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_react24.createElement)("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      }
    }, (0, import_react24.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends({}, arrowProps, {
      ref: forwardedRef,
      style: {
        ...arrowProps.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
  displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x5 = "";
    let y7 = "";
    if (placedSide === "bottom") {
      x5 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y7 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x5 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y7 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x5 = `${-arrowHeight}px`;
      y7 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x5 = `${rects.floating.width + arrowHeight}px`;
      y7 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x: x5,
        y: y7
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
var $cf1ac5d9fe0e8206$export$21b07c8f274aebd5 = $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var [$a093c7e1ec25a057$var$createTooltipContext, $a093c7e1ec25a057$export$1c540a2224f0d865] = $c512c27ab02ef895$export$50c7b4e9d9f19c1("Tooltip", [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $a093c7e1ec25a057$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $a093c7e1ec25a057$var$PROVIDER_NAME = "TooltipProvider";
var $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION = 700;
var $a093c7e1ec25a057$var$TOOLTIP_OPEN = "tooltip.open";
var [$a093c7e1ec25a057$var$TooltipProviderContextProvider, $a093c7e1ec25a057$var$useTooltipProviderContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PROVIDER_NAME);
var $a093c7e1ec25a057$export$f78649fb9ca566b8 = (props) => {
  const { __scopeTooltip, delayDuration = $a093c7e1ec25a057$var$DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react25.useState)(true);
  const isPointerInTransitRef = (0, import_react25.useRef)(false);
  const skipDelayTimerRef = (0, import_react25.useRef)(0);
  (0, import_react25.useEffect)(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_react25.createElement)($a093c7e1ec25a057$var$TooltipProviderContextProvider, {
    scope: __scopeTooltip,
    isOpenDelayed,
    delayDuration,
    onOpen: (0, import_react25.useCallback)(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      setIsOpenDelayed(false);
    }, []),
    onClose: (0, import_react25.useCallback)(() => {
      window.clearTimeout(skipDelayTimerRef.current);
      skipDelayTimerRef.current = window.setTimeout(
        () => setIsOpenDelayed(true),
        skipDelayDuration
      );
    }, [
      skipDelayDuration
    ]),
    isPointerInTransitRef,
    onPointerInTransitChange: (0, import_react25.useCallback)((inTransit) => {
      isPointerInTransitRef.current = inTransit;
    }, []),
    disableHoverableContent
  }, children);
};
Object.assign($a093c7e1ec25a057$export$f78649fb9ca566b8, {
  displayName: $a093c7e1ec25a057$var$PROVIDER_NAME
});
var $a093c7e1ec25a057$var$TOOLTIP_NAME = "Tooltip";
var [$a093c7e1ec25a057$var$TooltipContextProvider, $a093c7e1ec25a057$var$useTooltipContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME);
var $a093c7e1ec25a057$export$28c660c63b792dea = (props) => {
  const { __scopeTooltip, children, open: openProp, defaultOpen = false, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = (0, import_react25.useState)(null);
  const contentId = $1746a345f3d73bb7$export$f680877a34711e37();
  const openTimerRef = (0, import_react25.useRef)(0);
  const disableHoverableContent = disableHoverableContentProp !== null && disableHoverableContentProp !== void 0 ? disableHoverableContentProp : providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp !== null && delayDurationProp !== void 0 ? delayDurationProp : providerContext.delayDuration;
  const wasOpenDelayedRef = (0, import_react25.useRef)(false);
  const [open1 = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open) => {
      if (open) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent($a093c7e1ec25a057$var$TOOLTIP_OPEN));
      } else
        providerContext.onClose();
      onOpenChange === null || onOpenChange === void 0 || onOpenChange(open);
    }
  });
  const stateAttribute = (0, import_react25.useMemo)(() => {
    return open1 ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [
    open1
  ]);
  const handleOpen = (0, import_react25.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [
    setOpen
  ]);
  const handleClose = (0, import_react25.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [
    setOpen
  ]);
  const handleDelayedOpen = (0, import_react25.useCallback)(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [
    delayDuration,
    setOpen
  ]);
  (0, import_react25.useEffect)(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return (0, import_react25.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react25.createElement)($a093c7e1ec25a057$var$TooltipContextProvider, {
    scope: __scopeTooltip,
    contentId,
    open: open1,
    stateAttribute,
    trigger,
    onTriggerChange: setTrigger,
    onTriggerEnter: (0, import_react25.useCallback)(() => {
      if (providerContext.isOpenDelayed)
        handleDelayedOpen();
      else
        handleOpen();
    }, [
      providerContext.isOpenDelayed,
      handleDelayedOpen,
      handleOpen
    ]),
    onTriggerLeave: (0, import_react25.useCallback)(() => {
      if (disableHoverableContent)
        handleClose();
      else
        window.clearTimeout(openTimerRef.current);
    }, [
      handleClose,
      disableHoverableContent
    ]),
    onOpen: handleOpen,
    onClose: handleClose,
    disableHoverableContent
  }, children));
};
Object.assign($a093c7e1ec25a057$export$28c660c63b792dea, {
  displayName: $a093c7e1ec25a057$var$TOOLTIP_NAME
});
var $a093c7e1ec25a057$var$TRIGGER_NAME = "TooltipTrigger";
var $a093c7e1ec25a057$export$8c610744efcf8a1d = (0, import_react25.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, ...triggerProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$TRIGGER_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const ref = (0, import_react25.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onTriggerChange);
  const isPointerDownRef = (0, import_react25.useRef)(false);
  const hasPointerMoveOpenedRef = (0, import_react25.useRef)(false);
  const handlePointerUp = (0, import_react25.useCallback)(
    () => isPointerDownRef.current = false,
    []
  );
  (0, import_react25.useEffect)(() => {
    return () => document.removeEventListener("pointerup", handlePointerUp);
  }, [
    handlePointerUp
  ]);
  return (0, import_react25.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), (0, import_react25.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": context.open ? context.contentId : void 0,
    "data-state": context.stateAttribute
  }, triggerProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      if (event.pointerType === "touch")
        return;
      if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
        context.onTriggerEnter();
        hasPointerMoveOpenedRef.current = true;
      }
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, () => {
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, () => {
      isPointerDownRef.current = true;
      document.addEventListener("pointerup", handlePointerUp, {
        once: true
      });
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      if (!isPointerDownRef.current)
        context.onOpen();
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onClose)
  })));
});
Object.assign($a093c7e1ec25a057$export$8c610744efcf8a1d, {
  displayName: $a093c7e1ec25a057$var$TRIGGER_NAME
});
var $a093c7e1ec25a057$var$PORTAL_NAME = "TooltipPortal";
var [$a093c7e1ec25a057$var$PortalProvider, $a093c7e1ec25a057$var$usePortalContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, {
  forceMount: void 0
});
var $a093c7e1ec25a057$export$7b36b8f925ab7497 = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$PORTAL_NAME, __scopeTooltip);
  return (0, import_react25.createElement)($a093c7e1ec25a057$var$PortalProvider, {
    scope: __scopeTooltip,
    forceMount
  }, (0, import_react25.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react25.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($a093c7e1ec25a057$export$7b36b8f925ab7497, {
  displayName: $a093c7e1ec25a057$var$PORTAL_NAME
});
var $a093c7e1ec25a057$var$CONTENT_NAME = "TooltipContent";
var $a093c7e1ec25a057$export$e9003e2be37ec060 = (0, import_react25.forwardRef)((props, forwardedRef) => {
  const portalContext = $a093c7e1ec25a057$var$usePortalContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  return (0, import_react25.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.disableHoverableContent ? (0, import_react25.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })) : (0, import_react25.createElement)($a093c7e1ec25a057$var$TooltipContentHoverable, _extends({
    side
  }, contentProps, {
    ref: forwardedRef
  })));
});
var $a093c7e1ec25a057$var$TooltipContentHoverable = (0, import_react25.forwardRef)((props, forwardedRef) => {
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const providerContext = $a093c7e1ec25a057$var$useTooltipProviderContext($a093c7e1ec25a057$var$CONTENT_NAME, props.__scopeTooltip);
  const ref = (0, import_react25.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = (0, import_react25.useState)(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = (0, import_react25.useCallback)(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [
    onPointerInTransitChange
  ]);
  const handleCreateGraceArea = (0, import_react25.useCallback)((event, hoverTarget) => {
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = $a093c7e1ec25a057$var$getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = $a093c7e1ec25a057$var$getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = $a093c7e1ec25a057$var$getHull([
      ...paddedExitPoints,
      ...hoverTargetPoints
    ]);
    setPointerGraceArea(graceArea);
    onPointerInTransitChange(true);
  }, [
    onPointerInTransitChange
  ]);
  (0, import_react25.useEffect)(() => {
    return () => handleRemoveGraceArea();
  }, [
    handleRemoveGraceArea
  ]);
  (0, import_react25.useEffect)(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [
    trigger,
    content,
    handleCreateGraceArea,
    handleRemoveGraceArea
  ]);
  (0, import_react25.useEffect)(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = (trigger === null || trigger === void 0 ? void 0 : trigger.contains(target)) || (content === null || content === void 0 ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !$a093c7e1ec25a057$var$isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget)
          handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [
    trigger,
    content,
    pointerGraceArea,
    onClose,
    handleRemoveGraceArea
  ]);
  return (0, import_react25.createElement)($a093c7e1ec25a057$var$TooltipContentImpl, _extends({}, props, {
    ref: composedRefs
  }));
});
var [$a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, $a093c7e1ec25a057$var$useVisuallyHiddenContentContext] = $a093c7e1ec25a057$var$createTooltipContext($a093c7e1ec25a057$var$TOOLTIP_NAME, {
  isInside: false
});
var $a093c7e1ec25a057$var$TooltipContentImpl = (0, import_react25.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
  const context = $a093c7e1ec25a057$var$useTooltipContext($a093c7e1ec25a057$var$CONTENT_NAME, __scopeTooltip);
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const { onClose } = context;
  (0, import_react25.useEffect)(() => {
    document.addEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
    return () => document.removeEventListener($a093c7e1ec25a057$var$TOOLTIP_OPEN, onClose);
  }, [
    onClose
  ]);
  (0, import_react25.useEffect)(() => {
    if (context.trigger) {
      const handleScroll2 = (event) => {
        const target = event.target;
        if (target !== null && target !== void 0 && target.contains(context.trigger))
          onClose();
      };
      window.addEventListener("scroll", handleScroll2, {
        capture: true
      });
      return () => window.removeEventListener("scroll", handleScroll2, {
        capture: true
      });
    }
  }, [
    context.trigger,
    onClose
  ]);
  return (0, import_react25.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: onClose
  }, (0, import_react25.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": context.stateAttribute
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), (0, import_react25.createElement)($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), (0, import_react25.createElement)($a093c7e1ec25a057$var$VisuallyHiddenContentContextProvider, {
    scope: __scopeTooltip,
    isInside: true
  }, (0, import_react25.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    id: context.contentId,
    role: "tooltip"
  }, ariaLabel || children))));
});
Object.assign($a093c7e1ec25a057$export$e9003e2be37ec060, {
  displayName: $a093c7e1ec25a057$var$CONTENT_NAME
});
var $a093c7e1ec25a057$var$ARROW_NAME = "TooltipArrow";
var $a093c7e1ec25a057$export$c27ee0ad710f7559 = (0, import_react25.forwardRef)((props, forwardedRef) => {
  const { __scopeTooltip, ...arrowProps } = props;
  const popperScope = $a093c7e1ec25a057$var$usePopperScope(__scopeTooltip);
  const visuallyHiddenContentContext = $a093c7e1ec25a057$var$useVisuallyHiddenContentContext($a093c7e1ec25a057$var$ARROW_NAME, __scopeTooltip);
  return visuallyHiddenContentContext.isInside ? null : (0, import_react25.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($a093c7e1ec25a057$export$c27ee0ad710f7559, {
  displayName: $a093c7e1ec25a057$var$ARROW_NAME
});
function $a093c7e1ec25a057$var$getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function $a093c7e1ec25a057$var$getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function $a093c7e1ec25a057$var$getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function $a093c7e1ec25a057$var$isPointInPolygon(point, polygon) {
  const { x: x5, y: y7 } = point;
  let inside = false;
  for (let i22 = 0, j2 = polygon.length - 1; i22 < polygon.length; j2 = i22++) {
    const xi = polygon[i22].x;
    const yi = polygon[i22].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y7 !== yj > y7 && x5 < (xj - xi) * (y7 - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $a093c7e1ec25a057$var$getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a39, b8) => {
    if (a39.x < b8.x)
      return -1;
    else if (a39.x > b8.x)
      return 1;
    else if (a39.y < b8.y)
      return -1;
    else if (a39.y > b8.y)
      return 1;
    else
      return 0;
  });
  return $a093c7e1ec25a057$var$getHullPresorted(newPoints);
}
function $a093c7e1ec25a057$var$getHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i22 = 0; i22 < points.length; i22++) {
    const p39 = points[i22];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r43 = upperHull[upperHull.length - 2];
      if ((q.x - r43.x) * (p39.y - r43.y) >= (q.y - r43.y) * (p39.x - r43.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p39);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i1 = points.length - 1; i1 >= 0; i1--) {
    const p39 = points[i1];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r43 = lowerHull[lowerHull.length - 2];
      if ((q.x - r43.x) * (p39.y - r43.y) >= (q.y - r43.y) * (p39.x - r43.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p39);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y)
    return upperHull;
  else
    return upperHull.concat(lowerHull);
}
var $a093c7e1ec25a057$export$2881499e37b75b9a = $a093c7e1ec25a057$export$f78649fb9ca566b8;
var $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = $a093c7e1ec25a057$export$28c660c63b792dea;
var $a093c7e1ec25a057$export$41fb9f06171c75f4 = $a093c7e1ec25a057$export$8c610744efcf8a1d;
var $a093c7e1ec25a057$export$602eac185826482c = $a093c7e1ec25a057$export$7b36b8f925ab7497;
var $a093c7e1ec25a057$export$7c6e2c02157bb7d2 = $a093c7e1ec25a057$export$e9003e2be37ec060;
var $a093c7e1ec25a057$export$21b07c8f274aebd5 = $a093c7e1ec25a057$export$c27ee0ad710f7559;

// node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react26 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = (0, import_react26.createContext)(void 0);
var $f631663db3294ace$export$c760c09fdd558351 = (props) => {
  const { dir, children } = props;
  return (0, import_react26.createElement)($f631663db3294ace$var$DirectionContext.Provider, {
    value: dir
  }, children);
};
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react26.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/themes/dist/esm/helpers/get-matching-gray-color.js
function a3(e42) {
  switch (e42) {
    case "tomato":
    case "red":
    case "ruby":
    case "crimson":
    case "pink":
    case "plum":
    case "purple":
    case "violet":
      return "mauve";
    case "iris":
    case "indigo":
    case "blue":
    case "sky":
    case "cyan":
      return "slate";
    case "teal":
    case "jade":
    case "mint":
    case "green":
      return "sage";
    case "grass":
    case "lime":
      return "olive";
    case "yellow":
    case "amber":
    case "orange":
    case "brown":
    case "gold":
    case "bronze":
      return "sand";
    case "gray":
      return "gray";
  }
}

// node_modules/@radix-ui/themes/dist/esm/props/radius.prop.js
var e11 = ["none", "small", "medium", "large", "full"];
var r7 = { radius: { type: "enum", values: e11, default: void 0 } };

// node_modules/@radix-ui/themes/dist/esm/components/theme.props.js
var p2 = ["inherit", "light", "dark"];
var t4 = ["solid", "translucent"];
var n3 = ["90%", "95%", "100%", "105%", "110%"];
var s3 = { ...o, hasBackground: { type: "boolean", default: true }, appearance: { type: "enum", values: p2, default: "inherit" }, accentColor: { type: "enum", values: o2, default: "indigo" }, grayColor: { type: "enum", values: e2, default: "auto" }, panelBackground: { type: "enum", values: t4, default: "translucent" }, radius: { type: "enum", values: e11, default: "medium" }, scaling: { type: "enum", values: n3, default: "100%" } };

// node_modules/@radix-ui/themes/dist/esm/components/theme.js
var d2 = () => {
};
var b = e12.createContext(void 0);
function H() {
  const a39 = e12.useContext(b);
  if (a39 === void 0)
    throw new Error("`useThemeContext` must be used within a `Theme`");
  return a39;
}
var I = e12.forwardRef((a39, s23) => e12.useContext(b) === void 0 ? e12.createElement($a093c7e1ec25a057$export$2881499e37b75b9a, { delayDuration: 200 }, e12.createElement($f631663db3294ace$export$c760c09fdd558351, { dir: "ltr" }, e12.createElement(R2, { ...a39, ref: s23 }))) : e12.createElement(A, { ...a39, ref: s23 }));
I.displayName = "Theme";
var R2 = e12.forwardRef((a39, s23) => {
  const { appearance: r43 = s3.appearance.default, accentColor: c5 = s3.accentColor.default, grayColor: l11 = s3.grayColor.default, panelBackground: p39 = s3.panelBackground.default, radius: n24 = s3.radius.default, scaling: t36 = s3.scaling.default, hasBackground: m20 = s3.hasBackground.default, ...u10 } = a39, [h4, i22] = e12.useState(r43);
  e12.useEffect(() => i22(r43), [r43]);
  const [T6, g7] = e12.useState(c5);
  e12.useEffect(() => g7(c5), [c5]);
  const [y7, C6] = e12.useState(l11);
  e12.useEffect(() => C6(l11), [l11]);
  const [v8, f21] = e12.useState(p39);
  e12.useEffect(() => f21(p39), [p39]);
  const [k4, B4] = e12.useState(n24);
  e12.useEffect(() => B4(n24), [n24]);
  const [P6, x5] = e12.useState(t36);
  return e12.useEffect(() => x5(t36), [t36]), e12.createElement(A, { ...u10, ref: s23, isRoot: true, hasBackground: m20, appearance: h4, accentColor: T6, grayColor: y7, panelBackground: v8, radius: k4, scaling: P6, onAppearanceChange: i22, onAccentColorChange: g7, onGrayColorChange: C6, onPanelBackgroundChange: f21, onRadiusChange: B4, onScalingChange: x5 });
});
R2.displayName = "ThemeRoot";
var A = e12.forwardRef((a39, s23) => {
  const r43 = e12.useContext(b), { asChild: c5, isRoot: l11, hasBackground: p39, appearance: n24 = (r43 == null ? void 0 : r43.appearance) ?? s3.appearance.default, accentColor: t36 = (r43 == null ? void 0 : r43.accentColor) ?? s3.accentColor.default, grayColor: m20 = (r43 == null ? void 0 : r43.resolvedGrayColor) ?? s3.grayColor.default, panelBackground: u10 = (r43 == null ? void 0 : r43.panelBackground) ?? s3.panelBackground.default, radius: h4 = (r43 == null ? void 0 : r43.radius) ?? s3.radius.default, scaling: i22 = (r43 == null ? void 0 : r43.scaling) ?? s3.scaling.default, onAppearanceChange: T6 = d2, onAccentColorChange: g7 = d2, onGrayColorChange: y7 = d2, onPanelBackgroundChange: C6 = d2, onRadiusChange: v8 = d2, onScalingChange: f21 = d2, ...k4 } = a39, B4 = c5 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "div", P6 = m20 === "auto" ? a3(t36) : m20, x5 = a39.appearance === "light" || a39.appearance === "dark", S6 = p39 === void 0 ? l11 || x5 : p39;
  return e12.createElement(b.Provider, { value: e12.useMemo(() => ({ appearance: n24, accentColor: t36, grayColor: m20, resolvedGrayColor: P6, panelBackground: u10, radius: h4, scaling: i22, onAppearanceChange: T6, onAccentColorChange: g7, onGrayColorChange: y7, onPanelBackgroundChange: C6, onRadiusChange: v8, onScalingChange: f21 }), [n24, t36, m20, P6, u10, h4, i22, T6, g7, y7, C6, v8, f21]) }, e12.createElement(B4, { "data-is-root-theme": l11 ? "true" : "false", "data-accent-color": t36, "data-gray-color": P6, "data-has-background": S6 ? "true" : "false", "data-panel-background": u10, "data-radius": h4, "data-scaling": i22, ref: s23, ...k4, className: (0, import_classnames4.default)("radix-themes", { light: n24 === "light", dark: n24 === "dark" }, k4.className) }));
});
A.displayName = "ThemeImpl";

// node_modules/@radix-ui/themes/dist/esm/helpers/require-react-element.js
var o7 = __toESM(require_react(), 1);
var a4 = (t36) => {
  if (!o7.isValidElement(t36))
    throw Error(`Expected a single React Element child, but got: ${o7.Children.toArray(t36).map((e42) => typeof e42 == "object" && "type" in e42 && typeof e42.type == "string" ? e42.type : typeof e42).join(", ")}`);
  return t36;
};

// node_modules/@radix-ui/themes/dist/esm/components/alert-dialog.js
var n4 = (t36) => e13.createElement($905f4ae918aab1aa$export$be92b6f5f03c0fe9, { ...t36 });
n4.displayName = "AlertDialog.Root";
var s4 = e13.forwardRef(({ children: t36, ...o60 }, i22) => e13.createElement($905f4ae918aab1aa$export$41fb9f06171c75f4, { ...o60, ref: i22, asChild: true }, a4(t36)));
s4.displayName = "AlertDialog.Trigger";
var p3 = e13.forwardRef(({ align: t36, ...o60 }, i22) => {
  const { align: P6, ...c5 } = s, { className: f21 } = v({ align: t36 }, { align: P6 }), { className: C6, forceMount: d10, container: y7, ...v8 } = v(o60, c5);
  return e13.createElement($905f4ae918aab1aa$export$602eac185826482c, { container: y7, forceMount: d10 }, e13.createElement(I, { asChild: true }, e13.createElement($905f4ae918aab1aa$export$c6fdb837b070b4ff, { className: "rt-BaseDialogOverlay rt-AlertDialogOverlay" }, e13.createElement("div", { className: "rt-BaseDialogScroll rt-AlertDialogScroll" }, e13.createElement("div", { className: `rt-BaseDialogScrollPadding rt-AlertDialogScrollPadding ${f21}` }, e13.createElement($905f4ae918aab1aa$export$7c6e2c02157bb7d2, { ...v8, ref: i22, className: (0, import_classnames5.default)("rt-BaseDialogContent", "rt-AlertDialogContent", C6) }))))));
});
p3.displayName = "AlertDialog.Content";
var g2 = e13.forwardRef((t36, o60) => e13.createElement($905f4ae918aab1aa$export$f99233281efd08a0, { asChild: true }, e13.createElement(r6, { size: "5", mb: "3", trim: "start", ...t36, asChild: false, ref: o60 })));
g2.displayName = "AlertDialog.Title";
var m4 = e13.forwardRef((t36, o60) => e13.createElement($905f4ae918aab1aa$export$393edc798c47379d, { asChild: true }, e13.createElement(p, { as: "p", size: "3", ...t36, asChild: false, ref: o60 })));
m4.displayName = "AlertDialog.Description";
var D = e13.forwardRef(({ children: t36, ...o60 }, i22) => e13.createElement($905f4ae918aab1aa$export$e19cd5f9376f8cee, { ...o60, ref: i22, asChild: true }, a4(t36)));
D.displayName = "AlertDialog.Action";
var A2 = e13.forwardRef(({ children: t36, ...o60 }, i22) => e13.createElement($905f4ae918aab1aa$export$848c9b7ead0df967, { ...o60, ref: i22, asChild: true }, a4(t36)));
A2.displayName = "AlertDialog.Cancel";

// node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs
var import_react27 = __toESM(require_react(), 1);
var $c1b5f66aac50e106$var$NAME = "AspectRatio";
var $c1b5f66aac50e106$export$e840e8869344ca38 = (0, import_react27.forwardRef)((props, forwardedRef) => {
  const { ratio = 1, style, ...aspectRatioProps } = props;
  return (0, import_react27.createElement)("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / ratio}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, (0, import_react27.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, aspectRatioProps, {
    ref: forwardedRef,
    style: {
      ...style,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
});
Object.assign($c1b5f66aac50e106$export$e840e8869344ca38, {
  displayName: $c1b5f66aac50e106$var$NAME
});

// node_modules/@radix-ui/themes/dist/esm/components/avatar.js
var r8 = __toESM(require_react(), 1);
var import_classnames6 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_react28 = __toESM(require_react(), 1);
var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = (0, import_react28.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, import_react28.useState)("idle");
  return (0, import_react28.createElement)($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, (0, import_react28.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
Object.assign($cddcb0b647441e34$export$e2255cf6045e8d47, {
  displayName: $cddcb0b647441e34$var$AVATAR_NAME
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = (0, import_react28.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? (0, import_react28.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
Object.assign($cddcb0b647441e34$export$2cd8ae1985206fe8, {
  displayName: $cddcb0b647441e34$var$IMAGE_NAME
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = (0, import_react28.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = (0, import_react28.useState)(delayMs === void 0);
  (0, import_react28.useEffect)(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? (0, import_react28.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
Object.assign($cddcb0b647441e34$export$69fffb6a9571fbfe, {
  displayName: $cddcb0b647441e34$var$FALLBACK_NAME
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = (0, import_react28.useState)("idle");
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

// node_modules/@radix-ui/themes/dist/esm/components/avatar.props.js
var s5 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var a5 = ["solid", "soft"];
var p4 = { ...o, size: { type: "enum", className: "rt-r-size", values: s5, default: "3", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a5, default: "soft" }, ...s2, ...o3, ...r7, fallback: { type: "ReactNode", required: true } };

// node_modules/@radix-ui/themes/dist/esm/helpers/get-subtree.js
var a6 = __toESM(require_react(), 1);
function d3(i22, e42) {
  const { asChild: r43, children: c5 } = i22;
  if (!r43)
    return typeof e42 == "function" ? e42(c5) : e42;
  const t36 = a6.Children.only(c5);
  return a6.cloneElement(t36, { children: typeof e42 == "function" ? e42(t36.props.children) : e42 });
}

// node_modules/@radix-ui/themes/dist/esm/components/avatar.js
var i2 = r8.forwardRef((t36, e42) => {
  const { asChild: o60, children: a39, className: s23, style: p39, color: v8, radius: f21, ...d10 } = v(t36, p4, r5);
  return r8.createElement($cddcb0b647441e34$export$be92b6f5f03c0fe9, { "data-accent-color": v8, "data-radius": f21, className: (0, import_classnames6.default)("rt-reset", "rt-AvatarRoot", s23), style: p39, asChild: o60 }, d3({ asChild: o60, children: a39 }, r8.createElement(n5, { ref: e42, ...d10 })));
});
i2.displayName = "Avatar";
var n5 = r8.forwardRef(({ fallback: t36, ...e42 }, o60) => {
  const [a39, s23] = r8.useState("idle");
  return r8.createElement(r8.Fragment, null, a39 === "idle" || a39 === "loading" ? r8.createElement("span", { className: "rt-AvatarFallback" }) : null, a39 === "error" ? r8.createElement($cddcb0b647441e34$export$fb8d7f40caaeea67, { className: (0, import_classnames6.default)("rt-AvatarFallback", { "rt-one-letter": typeof t36 == "string" && t36.length === 1, "rt-two-letters": typeof t36 == "string" && t36.length === 2 }), delayMs: 0 }, t36) : null, r8.createElement($cddcb0b647441e34$export$3e431a229df88919, { ref: o60, className: "rt-AvatarImage", ...e42, onLoadingStatusChange: (p39) => {
    var _a;
    (_a = e42.onLoadingStatusChange) == null ? void 0 : _a.call(e42, p39), s23(p39);
  } }));
});
n5.displayName = "AvatarImpl";

// node_modules/@radix-ui/themes/dist/esm/components/badge.js
var o8 = __toESM(require_react(), 1);
var import_classnames7 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/badge.props.js
var t5 = ["1", "2", "3"];
var a7 = ["solid", "soft", "surface", "outline"];
var p5 = { ...o, size: { type: "enum", className: "rt-r-size", values: t5, default: "1", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a7, default: "soft" }, ...s2, ...o3, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/badge.js
var e14 = o8.forwardRef((r43, p39) => {
  const { asChild: s23, className: t36, color: a39, radius: m20, ...n24 } = v(r43, p5, r5);
  return o8.createElement(s23 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "span", { "data-accent-color": a39, "data-radius": m20, ...n24, ref: p39, className: (0, import_classnames7.default)("rt-reset", "rt-Badge", t36) });
});
e14.displayName = "Badge";

// node_modules/@radix-ui/themes/dist/esm/components/blockquote.js
var o9 = __toESM(require_react(), 1);
var import_classnames8 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/blockquote.props.js
var f = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var i3 = { ...o, size: { type: "enum", className: "rt-r-size", values: f, responsive: true }, ...t3, ...r2, ...o3, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/blockquote.js
var e15 = o9.forwardRef((t36, p39) => {
  const { asChild: r43, children: s23, className: m20, ...l11 } = t36, c5 = r43 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "blockquote";
  return o9.createElement(p, { asChild: true, ...l11, ref: p39, className: (0, import_classnames8.default)("rt-Blockquote", m20) }, o9.createElement(c5, null, s23));
});
e15.displayName = "Blockquote";

// node_modules/@radix-ui/themes/dist/esm/components/box.js
var o11 = __toESM(require_react(), 1);
var import_classnames9 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/box.props.js
var s6 = ["div", "span"];
var p6 = ["none", "inline", "inline-block", "block"];
var o10 = { as: { type: "enum", values: s6, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: p6, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/padding.props.js
var e16 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var p7 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: e16, responsive: true }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: e16, responsive: true }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: e16, responsive: true }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: e16, responsive: true }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: e16, responsive: true }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: e16, responsive: true }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: e16, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/layout.props.js
var r9 = ["visible", "hidden", "clip", "scroll", "auto"];
var i4 = ["static", "relative", "absolute", "fixed", "sticky"];
var e17 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
var p8 = ["0", "1"];
var n7 = ["0", "1"];
var u = { ...p7, ...t, ...e, position: { type: "enum", className: "rt-r-position", values: i4, responsive: true }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: e17, responsive: true }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: e17, responsive: true }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: e17, responsive: true }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: e17, responsive: true }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: e17, responsive: true }, overflow: { type: "enum", className: "rt-r-overflow", values: r9, responsive: true }, overflowX: { type: "enum", className: "rt-r-ox", values: r9, responsive: true }, overflowY: { type: "enum", className: "rt-r-oy", values: r9, responsive: true }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: true }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: p8, responsive: true }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: n7, responsive: true }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: true }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: true }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: true }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: true }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: true }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/box.js
var p9 = o11.forwardRef((r43, s23) => {
  const { className: t36, asChild: e42, as: m20 = "div", ...a39 } = v(r43, o10, u, r5);
  return o11.createElement(e42 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : m20, { ...a39, ref: s23, className: (0, import_classnames9.default)("rt-Box", t36) });
});
p9.displayName = "Box";

// node_modules/@radix-ui/themes/dist/esm/components/button.js
var t9 = __toESM(require_react(), 1);
var import_classnames13 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/base-button.js
var o15 = __toESM(require_react(), 1);
var import_classnames12 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/base-button.props.js
var t6 = ["1", "2", "3", "4"];
var a8 = ["classic", "solid", "soft", "surface", "outline", "ghost"];
var i5 = { ...o, size: { type: "enum", className: "rt-r-size", values: t6, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a8, default: "solid" }, ...s2, ...o3, ...r7, loading: { type: "boolean", className: "rt-loading", default: false } };

// node_modules/@radix-ui/themes/dist/esm/components/flex.js
var o13 = __toESM(require_react(), 1);
var import_classnames10 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/props/gap.props.js
var e18 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var p10 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: e18, responsive: true }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: e18, responsive: true }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: e18, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/flex.props.js
var t7 = ["div", "span"];
var p11 = ["none", "inline-flex", "flex"];
var a9 = ["row", "column", "row-reverse", "column-reverse"];
var o12 = ["start", "center", "end", "baseline", "stretch"];
var n9 = ["start", "center", "end", "between"];
var l4 = ["nowrap", "wrap", "wrap-reverse"];
var u2 = { as: { type: "enum", values: t7, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: p11, responsive: true }, direction: { type: "enum", className: "rt-r-fd", values: a9, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: o12, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: n9, parseValue: f2, responsive: true }, wrap: { type: "enum", className: "rt-r-fw", values: l4, responsive: true }, ...p10 };
function f2(e42) {
  return e42 === "between" ? "space-between" : e42;
}

// node_modules/@radix-ui/themes/dist/esm/components/flex.js
var p12 = o13.forwardRef((r43, e42) => {
  const { className: s23, asChild: t36, as: m20 = "div", ...l11 } = v(r43, u2, u, r5);
  return o13.createElement(t36 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : m20, { ...l11, ref: e42, className: (0, import_classnames10.default)("rt-Flex", s23) });
});
p12.displayName = "Flex";

// node_modules/@radix-ui/themes/dist/esm/components/spinner.js
var n10 = __toESM(require_react(), 1);
var import_classnames11 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/spinner.props.js
var e19 = ["1", "2", "3"];
var s7 = { size: { type: "enum", className: "rt-r-size", values: e19, default: "2", responsive: true }, loading: { type: "boolean", default: true } };

// node_modules/@radix-ui/themes/dist/esm/components/spinner.js
var s8 = n10.forwardRef((o60, i22) => {
  const { className: t36, children: e42, loading: a39, ...m20 } = v(o60, s7, r5);
  if (!a39)
    return e42;
  const r43 = n10.createElement("span", { ...m20, ref: i22, className: (0, import_classnames11.default)("rt-Spinner", t36) }, n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }));
  return e42 === void 0 ? r43 : n10.createElement(p12, { asChild: true, position: "relative", align: "center", justify: "center" }, n10.createElement("span", null, n10.createElement("span", { "aria-hidden": true, style: { display: "contents", visibility: "hidden" }, inert: "" }, e42), n10.createElement(p12, { asChild: true, align: "center", justify: "center", position: "absolute", inset: "0" }, n10.createElement("span", null, r43))));
});
s8.displayName = "Spinner";

// node_modules/@radix-ui/themes/dist/esm/components/callout.props.js
var t8 = ["1", "2", "3"];
var r10 = ["soft", "surface", "outline"];
var a11 = { ...o, size: { type: "enum", className: "rt-r-size", values: t8, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r10, default: "soft" }, ...s2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/helpers/map-prop-values.js
function o14(e42, t36) {
  if (e42 !== void 0)
    return typeof e42 == "string" ? t36(e42) : Object.fromEntries(Object.entries(e42).map(([n24, r43]) => [n24, t36(r43)]));
}
function s9(e42) {
  return e42 === "3" ? "3" : "2";
}
function p13(e42) {
  switch (e42) {
    case "1":
      return "1";
    case "2":
    case "3":
      return "2";
    case "4":
      return "3";
  }
}

// node_modules/@radix-ui/themes/dist/esm/components/base-button.js
var n11 = o15.forwardRef((t36, p39) => {
  const { size: i22 = i5.size.default } = t36, { className: a39, children: e42, asChild: m20, color: d10, radius: l11, disabled: s23 = t36.loading, ...u10 } = v(t36, i5, r5);
  return o15.createElement(m20 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button", { "data-disabled": s23 || void 0, "data-accent-color": d10, "data-radius": l11, ...u10, ref: p39, className: (0, import_classnames12.default)("rt-reset", "rt-BaseButton", a39), disabled: s23 }, t36.loading ? o15.createElement(o15.Fragment, null, o15.createElement("span", { style: { display: "contents", visibility: "hidden" }, "aria-hidden": true }, e42), o15.createElement($ea1ef594cf570d83$export$439d29a4e110a164, null, e42), o15.createElement(p12, { asChild: true, align: "center", justify: "center", position: "absolute", inset: "0" }, o15.createElement("span", null, o15.createElement(s8, { size: o14(i22, p13) })))) : e42);
});
n11.displayName = "BaseButton";

// node_modules/@radix-ui/themes/dist/esm/components/button.js
var o16 = t9.forwardRef(({ className: e42, ...n24 }, r43) => t9.createElement(n11, { ...n24, ref: r43, className: (0, import_classnames13.default)("rt-Button", e42) }));
o16.displayName = "Button";

// node_modules/@radix-ui/themes/dist/esm/components/callout.js
var callout_exports = {};
__export(callout_exports, {
  Icon: () => m5,
  Root: () => n12,
  Text: () => C
});
var o17 = __toESM(require_react(), 1);
var import_classnames14 = __toESM(require_classnames(), 1);
var a12 = o17.createContext({});
var n12 = o17.forwardRef((t36, l11) => {
  const { size: e42 = a11.size.default } = t36, { asChild: r43, children: u10, className: i22, color: c5, ...f21 } = v(t36, a11, r5);
  return o17.createElement(r43 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "div", { "data-accent-color": c5, ...f21, className: (0, import_classnames14.default)("rt-CalloutRoot", i22), ref: l11 }, o17.createElement(a12.Provider, { value: o17.useMemo(() => ({ size: e42 }), [e42]) }, u10));
});
n12.displayName = "Callout.Root";
var m5 = o17.forwardRef(({ className: t36, ...l11 }, e42) => o17.createElement("div", { ...l11, className: (0, import_classnames14.default)("rt-CalloutIcon", t36), ref: e42 }));
m5.displayName = "Callout.Icon";
var C = o17.forwardRef(({ className: t36, ...l11 }, e42) => {
  const { size: r43 } = o17.useContext(a12);
  return o17.createElement(p, { as: "p", size: o14(r43, s9), ...l11, asChild: false, ref: e42, className: (0, import_classnames14.default)("rt-CalloutText", t36) });
});
C.displayName = "Callout.Text";

// node_modules/@radix-ui/themes/dist/esm/components/card.js
var r12 = __toESM(require_react(), 1);
var import_classnames15 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/card.props.js
var e20 = ["1", "2", "3", "4", "5"];
var r11 = ["surface", "classic", "ghost"];
var a13 = { ...o, size: { type: "enum", className: "rt-r-size", values: e20, default: "1", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r11, default: "surface" } };

// node_modules/@radix-ui/themes/dist/esm/components/card.js
var o18 = r12.forwardRef((p39, e42) => {
  const { asChild: t36, className: s23, ...m20 } = v(p39, a13, r5);
  return r12.createElement(t36 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "div", { ref: e42, ...m20, className: (0, import_classnames15.default)("rt-reset", "rt-BaseCard", "rt-Card", s23) });
});
o18.displayName = "Card";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-cards.js
var checkbox_cards_exports = {};
__export(checkbox_cards_exports, {
  Item: () => k2,
  Root: () => b3
});
var o23 = __toESM(require_react(), 1);
var import_classnames17 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.primitive.js
var o19 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react29 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react29.useRef)({
    value,
    previous: value
  });
  return (0, import_react29.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var $e698a72e93240346$var$CHECKBOX_NAME = "Checkbox";
var [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
var [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
var $e698a72e93240346$export$48513f6b9f8ce62d = (0, import_react30.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...checkboxProps } = props;
  const [button, setButton] = (0, import_react30.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react30.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  const initialCheckedStateRef = (0, import_react30.useRef)(checked);
  (0, import_react30.useEffect)(() => {
    const form = button === null || button === void 0 ? void 0 : button.form;
    if (form) {
      const reset = () => setChecked(initialCheckedStateRef.current);
      form.addEventListener("reset", reset);
      return () => form.removeEventListener("reset", reset);
    }
  }, [
    button,
    setChecked
  ]);
  return (0, import_react30.createElement)($e698a72e93240346$var$CheckboxProvider, {
    scope: __scopeCheckbox,
    state: checked,
    disabled
  }, (0, import_react30.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? "mixed" : checked,
    "aria-required": required,
    "data-state": $e698a72e93240346$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, checkboxProps, {
    ref: composedRefs,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => $e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && (0, import_react30.createElement)($e698a72e93240346$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
Object.assign($e698a72e93240346$export$48513f6b9f8ce62d, {
  displayName: $e698a72e93240346$var$CHECKBOX_NAME
});
var $e698a72e93240346$var$INDICATOR_NAME = "CheckboxIndicator";
var $e698a72e93240346$export$59aad738f51d1c05 = (0, import_react30.forwardRef)((props, forwardedRef) => {
  const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
  const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
  return (0, import_react30.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
  }, (0, import_react30.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $e698a72e93240346$var$getState(context.state),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      pointerEvents: "none",
      ...props.style
    }
  })));
});
Object.assign($e698a72e93240346$export$59aad738f51d1c05, {
  displayName: $e698a72e93240346$var$INDICATOR_NAME
});
var $e698a72e93240346$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react30.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react30.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
      setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return (0, import_react30.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $e698a72e93240346$var$getState(checked) {
  return $e698a72e93240346$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
var $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_react32 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react31 = __toESM(require_react(), 1);
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react31.default.useRef(null);
    const itemMap = import_react31.default.useRef(/* @__PURE__ */ new Map()).current;
    return import_react31.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = import_react31.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return import_react31.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = import_react31.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react31.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react31.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return import_react31.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react31.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a39, b8) => orderedNodes.indexOf(a39.ref.current) - orderedNodes.indexOf(b8.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d7bdfb9eb0fdf311$var$GROUP_NAME = "RovingFocusGroup";
var [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($d7bdfb9eb0fdf311$var$GROUP_NAME);
var [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d7bdfb9eb0fdf311$var$GROUP_NAME, [
  $d7bdfb9eb0fdf311$var$createCollectionScope
]);
var [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
var $d7bdfb9eb0fdf311$export$8699f7c8af148338 = (0, import_react32.forwardRef)((props, forwardedRef) => {
  return (0, import_react32.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
    scope: props.__scopeRovingFocusGroup
  }, (0, import_react32.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
    scope: props.__scopeRovingFocusGroup
  }, (0, import_react32.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, _extends({}, props, {
    ref: forwardedRef
  }))));
});
Object.assign($d7bdfb9eb0fdf311$export$8699f7c8af148338, {
  displayName: $d7bdfb9eb0fdf311$var$GROUP_NAME
});
var $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = (0, import_react32.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, ...groupProps } = props;
  const ref = (0, import_react32.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = (0, import_react32.useState)(false);
  const handleEntryFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEntryFocus);
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = (0, import_react32.useRef)(false);
  const [focusableItemsCount, setFocusableItemsCount] = (0, import_react32.useState)(0);
  (0, import_react32.useEffect)(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
    }
  }, [
    handleEntryFocus
  ]);
  return (0, import_react32.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
    scope: __scopeRovingFocusGroup,
    orientation,
    dir: direction,
    loop,
    currentTabStopId,
    onItemFocus: (0, import_react32.useCallback)(
      (tabStopId) => setCurrentTabStopId(tabStopId),
      [
        setCurrentTabStopId
      ]
    ),
    onItemShiftTab: (0, import_react32.useCallback)(
      () => setIsTabbingBackOut(true),
      []
    ),
    onFocusableItemAdd: (0, import_react32.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount + 1
      ),
      []
    ),
    onFocusableItemRemove: (0, import_react32.useCallback)(
      () => setFocusableItemsCount(
        (prevCount) => prevCount - 1
      ),
      []
    )
  }, (0, import_react32.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
    "data-orientation": orientation
  }, groupProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...props.style
    },
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, () => {
      isClickFocusRef.current = true;
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, (event) => {
      const isKeyboardFocus = !isClickFocusRef.current;
      if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
        const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
        event.currentTarget.dispatchEvent(entryFocusEvent);
        if (!entryFocusEvent.defaultPrevented) {
          const items = getItems().filter(
            (item) => item.focusable
          );
          const activeItem = items.find(
            (item) => item.active
          );
          const currentItem = items.find(
            (item) => item.id === currentTabStopId
          );
          const candidateItems = [
            activeItem,
            currentItem,
            ...items
          ].filter(Boolean);
          const candidateNodes = candidateItems.map(
            (item) => item.ref.current
          );
          $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
        }
      }
      isClickFocusRef.current = false;
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsTabbingBackOut(false)
    )
  })));
});
var $d7bdfb9eb0fdf311$var$ITEM_NAME = "RovingFocusGroupItem";
var $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = (0, import_react32.forwardRef)((props, forwardedRef) => {
  const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
  const autoId = $1746a345f3d73bb7$export$f680877a34711e37();
  const id = tabStopId || autoId;
  const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
  const isCurrentTabStop = context.currentTabStopId === id;
  const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
  const { onFocusableItemAdd, onFocusableItemRemove } = context;
  (0, import_react32.useEffect)(() => {
    if (focusable) {
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }
  }, [
    focusable,
    onFocusableItemAdd,
    onFocusableItemRemove
  ]);
  return (0, import_react32.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
    scope: __scopeRovingFocusGroup,
    id,
    focusable,
    active
  }, (0, import_react32.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    tabIndex: isCurrentTabStop ? 0 : -1,
    "data-orientation": context.orientation
  }, itemProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!focusable)
        event.preventDefault();
      else
        context.onItemFocus(id);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => context.onItemFocus(id)
    ),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget)
        return;
      const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
      if (focusIntent !== void 0) {
        event.preventDefault();
        const items = getItems().filter(
          (item) => item.focusable
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if (focusIntent === "last")
          candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev")
            candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
        );
      }
    })
  })));
});
Object.assign($d7bdfb9eb0fdf311$export$ab9df7c53fe8454, {
  displayName: $d7bdfb9eb0fdf311$var$ITEM_NAME
});
var $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
  if (dir !== "rtl")
    return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
  const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(key))
    return void 0;
  if (orientation === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(key))
    return void 0;
  return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
var $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
var $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.primitive.js
var b2 = "CheckboxGroup";
var [O, w] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(b2, [$d7bdfb9eb0fdf311$export$c7109489551a4f4, $e698a72e93240346$export$b566c4ff5488ea01]);
var y = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var S = $e698a72e93240346$export$b566c4ff5488ea01();
var [T2, B] = O(b2);
var k = o19.forwardRef((r43, i22) => {
  const { __scopeCheckboxGroup: e42, name: p39, defaultValue: c5, value: t36, required: n24 = false, disabled: s23 = false, orientation: d10, dir: m20, loop: C6 = true, onValueChange: u10, ...h4 } = r43, F = y(e42), v8 = $f631663db3294ace$export$b39126d51d94e6f3(m20), [_ = [], a39] = $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: t36, defaultProp: c5, onChange: u10 }), V = o19.useCallback((l11) => a39((x5 = []) => [...x5, l11]), [a39]), q = o19.useCallback((l11) => a39((x5 = []) => x5.filter((N8) => N8 !== l11)), [a39]);
  return o19.createElement(T2, { scope: e42, name: p39, required: n24, disabled: s23, value: _, onItemCheck: V, onItemUncheck: q }, o19.createElement($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, { asChild: true, ...F, orientation: d10, dir: v8, loop: C6 }, o19.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { role: "group", "data-disabled": s23 ? "" : void 0, dir: v8, ...h4, ref: i22 })));
});
k.displayName = b2;
var E2 = "CheckboxGroupItem";
var f5 = o19.forwardRef((r43, i22) => {
  var _a;
  const { __scopeCheckboxGroup: e42, disabled: p39, ...c5 } = r43, t36 = B(E2, e42), n24 = t36.disabled || p39, s23 = y(e42), d10 = S(e42), m20 = o19.useRef(null), C6 = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(i22, m20), u10 = (_a = t36.value) == null ? void 0 : _a.includes(c5.value);
  return o19.createElement($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, { asChild: true, ...s23, focusable: !n24, active: u10 }, o19.createElement($e698a72e93240346$export$be92b6f5f03c0fe9, { name: t36.name, disabled: n24, required: t36.required, checked: u10, ...d10, ...c5, ref: C6, onCheckedChange: (h4) => {
    h4 ? t36.onItemCheck(r43.value) : t36.onItemUncheck(r43.value);
  } }));
});
f5.displayName = E2;
var H2 = "CheckboxGroupIndicator";
var P = o19.forwardRef((r43, i22) => {
  const { __scopeCheckboxGroup: e42, ...p39 } = r43, c5 = S(e42);
  return o19.createElement($e698a72e93240346$export$adb584737d712b70, { ...c5, ...p39, ref: i22 });
});
P.displayName = H2;
var K = k;
var X = f5;
var j = P;

// node_modules/@radix-ui/themes/dist/esm/components/grid.props.js
var n13 = ["div", "span"];
var a15 = ["none", "inline-grid", "grid"];
var p15 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var u3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var l5 = ["row", "column", "dense", "row-dense", "column-dense"];
var i6 = ["start", "center", "end", "baseline", "stretch"];
var f6 = ["start", "center", "end", "between"];
var s11 = { as: { type: "enum", values: n13, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: a15, responsive: true }, columns: { type: "enum | string", className: "rt-r-gtc", customProperties: ["--grid-template-columns"], values: p15, parseValue: r13, responsive: true }, rows: { type: "enum | string", className: "rt-r-gtr", customProperties: ["--grid-template-rows"], values: u3, parseValue: r13, responsive: true }, flow: { type: "enum", className: "rt-r-gaf", values: l5, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: i6, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: f6, parseValue: c, responsive: true }, ...p10 };
function r13(e42) {
  return s11.columns.values.includes(e42) ? e42 : (e42 == null ? void 0 : e42.match(/^\d+$/)) ? `repeat(${e42}, minmax(0, 1fr))` : e42;
}
function c(e42) {
  return e42 === "between" ? "space-between" : e42;
}

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-cards.props.js
var a16 = ["1", "2", "3"];
var t10 = ["surface", "classic"];
var p16 = { ...o, size: { type: "enum", className: "rt-r-size", values: a16, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t10, default: "surface" }, ...r2, ...o3, columns: { ...s11.columns, default: "repeat(auto-fit, minmax(200px, 1fr))" }, gap: { ...s11.gap, default: "4" } };

// node_modules/@radix-ui/themes/dist/esm/components/base-checkbox.props.js
var r14 = ["1", "2", "3"];
var o20 = ["classic", "surface", "soft"];
var t11 = { size: { type: "enum", className: "rt-r-size", values: r14, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: o20, default: "surface" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/grid.js
var r15 = __toESM(require_react(), 1);
var import_classnames16 = __toESM(require_classnames(), 1);
var o21 = r15.forwardRef((p39, s23) => {
  const { className: t36, asChild: e42, as: i22 = "div", ...m20 } = v(p39, s11, u, r5);
  return r15.createElement(e42 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : i22, { ...m20, ref: s23, className: (0, import_classnames16.default)("rt-Grid", t36) });
});
o21.displayName = "Grid";

// node_modules/@radix-ui/themes/dist/esm/components/icons.js
var import_react33 = __toESM(require_react(), 1);
var r16 = import_react33.default.forwardRef((e42, n24) => import_react33.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e42, ref: n24 }, import_react33.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z" })));
r16.displayName = "ThickCheckIcon";
var t12 = import_react33.default.forwardRef((e42, n24) => import_react33.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e42, ref: n24 }, import_react33.default.createElement("path", { d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z" })));
t12.displayName = "ChevronDownIcon";
var p17 = import_react33.default.forwardRef((e42, n24) => import_react33.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e42, ref: n24 }, import_react33.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z" })));
p17.displayName = "ThickChevronRightIcon";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-cards.js
var x2 = "CheckboxCards";
var [G] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(x2, [w]);
var d5 = w();
var [v2, N2] = G(x2);
var b3 = o23.forwardRef((e42, s23) => {
  const { __scopeCheckboxCards: r43, className: c5, color: p39, ...a39 } = v(e42, p16, r5), t36 = d5(r43);
  return o23.createElement(v2, { scope: r43, size: e42.size, highContrast: e42.highContrast }, o23.createElement(o21, { asChild: true }, o23.createElement(K, { ...t36, "data-accent-color": p39, ...a39, ref: s23, className: (0, import_classnames17.default)("rt-CheckboxCardsRoot", c5) })));
});
b3.displayName = "CheckboxCards.Root";
var k2 = o23.forwardRef(({ __scopeCheckboxCards: e42, children: s23, className: r43, style: c5, ...p39 }, a39) => {
  const t36 = N2("CheckboxCardsItem", e42), i22 = d5(e42), { className: P6 } = v({ size: t36 == null ? void 0 : t36.size, variant: "surface", highContrast: t36 == null ? void 0 : t36.highContrast }, t11);
  return o23.createElement("label", { className: (0, import_classnames17.default)("rt-BaseCard", "rt-CheckboxCardsItem", r43), style: c5 }, s23, o23.createElement(X, { ...i22, ...p39, ref: a39, className: (0, import_classnames17.default)("rt-reset", "rt-BaseCheckboxRoot", "rt-CheckboxCardCheckbox", P6) }, o23.createElement(j, { ...i22, asChild: true, className: "rt-BaseCheckboxIndicator" }, o23.createElement(r16, null))));
});
k2.displayName = "CheckboxCards.Item";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.js
var checkbox_group_exports = {};
__export(checkbox_group_exports, {
  Item: () => l6,
  Root: () => f7
});
var o24 = __toESM(require_react(), 1);
var import_classnames18 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.props.js
var e21 = { ...o, ...t11 };

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.js
var b4 = "CheckboxGroup";
var [N3] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(b4, [w]);
var G2 = w();
var [E3, P2] = N3(b4);
var f7 = o24.forwardRef(({ color: s23 = e21.color.default, highContrast: e42 = e21.highContrast.default, size: r43 = e21.size.default, variant: t36 = e21.variant.default, ...p39 }, m20) => {
  const { __scopeCheckboxGroup: c5, className: h4, ...I5 } = v(p39, r5), d10 = G2(c5);
  return o24.createElement(E3, { scope: c5, color: s23, size: r43, highContrast: e42, variant: t36 }, o24.createElement(K, { ...d10, ...I5, ref: m20, className: (0, import_classnames18.default)("rt-CheckboxGroupRoot", h4) }));
});
f7.displayName = "CheckboxGroup.Root";
var l6 = o24.forwardRef((s23, e42) => {
  const { __scopeCheckboxGroup: r43, children: t36, className: p39, style: m20, ...c5 } = s23, { size: h4 } = P2("CheckboxGroupItem", r43);
  return t36 ? o24.createElement(p, { as: "label", size: h4, className: (0, import_classnames18.default)("rt-CheckboxGroupItem", p39), style: m20 }, o24.createElement(u4, { __scopeCheckboxGroup: r43, ...c5, ref: e42 }), t36 && o24.createElement("span", { className: "rt-CheckboxGroupItemInner" }, t36)) : o24.createElement(u4, { __scopeCheckboxGroup: r43, ...c5, ref: e42, className: p39, style: m20 });
});
l6.displayName = "CheckboxGroup.Item";
var u4 = o24.forwardRef(({ __scopeCheckboxGroup: s23, ...e42 }, r43) => {
  const t36 = P2("CheckboxGroupItemCheckbox", s23), p39 = G2(s23), { color: m20, className: c5 } = v({ ...e42, ...t36 }, e21, r5);
  return o24.createElement(X, { ...p39, "data-accent-color": m20, ...e42, ref: r43, className: (0, import_classnames18.default)("rt-reset", "rt-BaseCheckboxRoot", "rt-CheckboxGroupItemCheckbox", c5) }, o24.createElement(j, { ...p39, asChild: true, className: "rt-BaseCheckboxIndicator" }, o24.createElement(r16, null)));
});
u4.displayName = "CheckboxGroup.ItemCheckbox";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox.js
var o25 = __toESM(require_react(), 1);
var import_classnames19 = __toESM(require_classnames(), 1);
var r17 = o25.forwardRef((t36, p39) => {
  const { className: s23, color: c5, ...i22 } = v(t36, t11, r5);
  return o25.createElement($e698a72e93240346$export$be92b6f5f03c0fe9, { "data-accent-color": c5, ...i22, asChild: false, ref: p39, className: (0, import_classnames19.default)("rt-reset", "rt-BaseCheckboxRoot", "rt-CheckboxRoot", s23) }, o25.createElement($e698a72e93240346$export$adb584737d712b70, { asChild: true, className: "rt-BaseCheckboxIndicator rt-CheckboxIndicator" }, o25.createElement(r16, null)));
});
r17.displayName = "Checkbox";

// node_modules/@radix-ui/themes/dist/esm/components/code.js
var r18 = __toESM(require_react(), 1);
var import_classnames20 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/code.props.js
var a18 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var i7 = ["solid", "soft", "outline", "ghost"];
var f8 = { ...o, size: { type: "enum", className: "rt-r-size", values: a18, responsive: true }, variant: { type: "enum", className: "rt-variant", values: i7, default: "soft" }, ...t3, ...s2, ...o3, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/code.js
var p18 = r18.forwardRef((o60, t36) => {
  const { asChild: s23, className: m20, color: e42, ...d10 } = v(o60, f8, r5), n24 = o60.variant === "ghost" ? e42 || void 0 : e42;
  return r18.createElement(s23 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "code", { "data-accent-color": n24, ...d10, ref: t36, className: (0, import_classnames20.default)("rt-reset", "rt-Code", m20) });
});
p18.displayName = "Code";

// node_modules/@radix-ui/themes/dist/esm/components/container.js
var o26 = __toESM(require_react(), 1);
var import_classnames21 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/container.props.js
var r19 = ["1", "2", "3", "4"];
var t13 = ["none", "initial"];
var p19 = ["left", "center", "right"];
var n14 = { ...o, size: { type: "enum", className: "rt-r-size", values: r19, default: "4", responsive: true }, display: { type: "enum", className: "rt-r-display", values: t13, parseValue: a20, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: p19, parseValue: i8, responsive: true } };
function a20(e42) {
  return e42 === "initial" ? "flex" : e42;
}
function i8(e42) {
  return e42 === "left" ? "start" : e42 === "right" ? "end" : e42;
}

// node_modules/@radix-ui/themes/dist/esm/components/container.js
var p20 = o26.forwardRef(({ width: n24, minWidth: s23, maxWidth: m20, height: i22, minHeight: a39, maxHeight: f21, ...P6 }, l11) => {
  const { asChild: r43, children: C6, className: c5, ...y7 } = v(P6, n14, u, r5), { className: d10, style: h4 } = v({ width: n24, minWidth: s23, maxWidth: m20, height: i22, minHeight: a39, maxHeight: f21 }, t, e);
  return o26.createElement(r43 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "div", { ...y7, ref: l11, className: (0, import_classnames21.default)("rt-Container", c5) }, d3({ asChild: r43, children: C6 }, (u10) => o26.createElement("div", { className: (0, import_classnames21.default)("rt-ContainerInner", d10), style: h4 }, u10)));
});
p20.displayName = "Container";

// node_modules/@radix-ui/themes/dist/esm/components/context-menu.js
var context_menu_exports = {};
__export(context_menu_exports, {
  CheckboxItem: () => G3,
  Content: () => y2,
  Group: () => N4,
  Item: () => R3,
  Label: () => S3,
  RadioGroup: () => T3,
  RadioItem: () => E4,
  Root: () => h,
  Separator: () => W,
  Sub: () => w2,
  SubContent: () => k3,
  SubTrigger: () => B2,
  Trigger: () => g3
});
var e23 = __toESM(require_react(), 1);
var import_classnames24 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-context-menu/dist/index.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menu/dist/index.mjs
var import_react34 = __toESM(require_react(), 1);
var $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
var $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
var $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
var $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
var $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
var $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
var $6cc32821e9371a1c$var$MENU_NAME = "Menu";
var [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [content, setContent] = (0, import_react34.useState)(null);
  const isUsingKeyboardRef = (0, import_react34.useRef)(false);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  (0, import_react34.useEffect)(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, {
        capture: true,
        once: true
      });
      document.addEventListener("pointermove", handlePointer, {
        capture: true,
        once: true
      });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, {
        capture: true
      });
      document.removeEventListener("pointerdown", handlePointer, {
        capture: true
      });
      document.removeEventListener("pointermove", handlePointer, {
        capture: true
      });
    };
  }, []);
  return (0, import_react34.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuRootProvider, {
    scope: __scopeMenu,
    onClose: (0, import_react34.useCallback)(
      () => handleOpenChange(false),
      [
        handleOpenChange
      ]
    ),
    isUsingKeyboardRef,
    dir: direction,
    modal
  }, children)));
};
Object.assign($6cc32821e9371a1c$export$d9b273488cd8ce6f, {
  displayName: $6cc32821e9371a1c$var$MENU_NAME
});
var $6cc32821e9371a1c$var$ANCHOR_NAME = "MenuAnchor";
var $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return (0, import_react34.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$9fa5ebd18bee4d43, {
  displayName: $6cc32821e9371a1c$var$ANCHOR_NAME
});
var $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
var [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
var $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, (0, import_react34.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react34.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($6cc32821e9371a1c$export$793392f970497feb, {
  displayName: $6cc32821e9371a1c$var$PORTAL_NAME
});
var $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
var [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
var $6cc32821e9371a1c$export$479f0f2f71193efe = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, (0, import_react34.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react34.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })))));
});
var $6cc32821e9371a1c$var$MenuRootContentModal = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react34.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react34.useEffect)(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuRootContentNonModal = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuContentImpl = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = (0, import_react34.useState)(null);
  const contentRef = (0, import_react34.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = (0, import_react34.useRef)(0);
  const searchRef = (0, import_react34.useRef)("");
  const pointerGraceTimerRef = (0, import_react34.useRef)(0);
  const pointerGraceIntentRef = (0, import_react34.useRef)(null);
  const pointerDirRef = (0, import_react34.useRef)("right");
  const lastPointerXRef = (0, import_react34.useRef)(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : import_react34.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  (0, import_react34.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = (0, import_react34.useCallback)((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: (0, import_react34.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: (0, import_react34.useCallback)((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: (0, import_react34.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: (0, import_react34.useCallback)((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, (0, import_react34.createElement)(ScrollLockWrapper, scrollLockWrapperProps, (0, import_react34.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, (0, import_react34.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, (0, import_react34.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), (0, import_react34.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
Object.assign($6cc32821e9371a1c$export$479f0f2f71193efe, {
  displayName: $6cc32821e9371a1c$var$CONTENT_NAME
});
var $6cc32821e9371a1c$var$GROUP_NAME = "MenuGroup";
var $6cc32821e9371a1c$export$22a631d1f72787bb = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...groupProps } = props;
  return (0, import_react34.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "group"
  }, groupProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$22a631d1f72787bb, {
  displayName: $6cc32821e9371a1c$var$GROUP_NAME
});
var $6cc32821e9371a1c$var$LABEL_NAME = "MenuLabel";
var $6cc32821e9371a1c$export$dd37bec0e8a99143 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return (0, import_react34.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$dd37bec0e8a99143, {
  displayName: $6cc32821e9371a1c$var$LABEL_NAME
});
var $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
var $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
var $6cc32821e9371a1c$export$2ce376c2cc3355c8 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = (0, import_react34.useRef)(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = (0, import_react34.useRef)(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
Object.assign($6cc32821e9371a1c$export$2ce376c2cc3355c8, {
  displayName: $6cc32821e9371a1c$var$ITEM_NAME
});
var $6cc32821e9371a1c$var$MenuItemImpl = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = (0, import_react34.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = (0, import_react34.useState)(false);
  const [textContent, setTextContent] = (0, import_react34.useState)("");
  (0, import_react34.useEffect)(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, (0, import_react34.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), (0, import_react34.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
var $6cc32821e9371a1c$var$CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var $6cc32821e9371a1c$export$f6f243521332502d = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, (0, import_react34.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
Object.assign($6cc32821e9371a1c$export$f6f243521332502d, {
  displayName: $6cc32821e9371a1c$var$CHECKBOX_ITEM_NAME
});
var $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
var [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
var $6cc32821e9371a1c$export$ea2200c9eee416b3 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { value, onValueChange, ...groupProps } = props;
  const handleValueChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onValueChange);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$RadioGroupProvider, {
    scope: props.__scopeMenu,
    value,
    onValueChange: handleValueChange
  }, (0, import_react34.createElement)($6cc32821e9371a1c$export$22a631d1f72787bb, _extends({}, groupProps, {
    ref: forwardedRef
  })));
});
Object.assign($6cc32821e9371a1c$export$ea2200c9eee416b3, {
  displayName: $6cc32821e9371a1c$var$RADIO_GROUP_NAME
});
var $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
var $6cc32821e9371a1c$export$69bd225e9817f6d0 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, (0, import_react34.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
Object.assign($6cc32821e9371a1c$export$69bd225e9817f6d0, {
  displayName: $6cc32821e9371a1c$var$RADIO_ITEM_NAME
});
var $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
var $6cc32821e9371a1c$export$a2593e23056970a3 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return (0, import_react34.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, (0, import_react34.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
Object.assign($6cc32821e9371a1c$export$a2593e23056970a3, {
  displayName: $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME
});
var $6cc32821e9371a1c$var$SEPARATOR_NAME = "MenuSeparator";
var $6cc32821e9371a1c$export$1cec7dcdd713e220 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return (0, import_react34.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$1cec7dcdd713e220, {
  displayName: $6cc32821e9371a1c$var$SEPARATOR_NAME
});
var $6cc32821e9371a1c$var$ARROW_NAME = "MenuArrow";
var $6cc32821e9371a1c$export$bcdda4773debf5fa = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...arrowProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return (0, import_react34.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($6cc32821e9371a1c$export$bcdda4773debf5fa, {
  displayName: $6cc32821e9371a1c$var$ARROW_NAME
});
var $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
var [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
var $6cc32821e9371a1c$export$71bdb9d1e2909932 = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [trigger, setTrigger] = (0, import_react34.useState)(null);
  const [content, setContent] = (0, import_react34.useState)(null);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  (0, import_react34.useEffect)(() => {
    if (parentMenuContext.open === false)
      handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [
    parentMenuContext.open,
    handleOpenChange
  ]);
  return (0, import_react34.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuSubProvider, {
    scope: __scopeMenu,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    trigger,
    onTriggerChange: setTrigger
  }, children)));
};
Object.assign($6cc32821e9371a1c$export$71bdb9d1e2909932, {
  displayName: $6cc32821e9371a1c$var$SUB_NAME
});
var $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
var $6cc32821e9371a1c$export$5fbbb3ba7297405f = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = (0, import_react34.useRef)(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = (0, import_react34.useCallback)(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  (0, import_react34.useEffect)(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  (0, import_react34.useEffect)(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return (0, import_react34.createElement)($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
    asChild: true
  }, scope), (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
Object.assign($6cc32821e9371a1c$export$5fbbb3ba7297405f, {
  displayName: $6cc32821e9371a1c$var$SUB_TRIGGER_NAME
});
var $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
var $6cc32821e9371a1c$export$e7142ab31822bde6 = (0, import_react34.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react34.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return (0, import_react34.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, (0, import_react34.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react34.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, (0, import_react34.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
Object.assign($6cc32821e9371a1c$export$e7142ab31822bde6, {
  displayName: $6cc32821e9371a1c$var$SUB_CONTENT_NAME
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v8) => v8 !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x: x5, y: y7 } = point;
  let inside = false;
  for (let i22 = 0, j2 = polygon.length - 1; i22 < polygon.length; j2 = i22++) {
    const xi = polygon[i22].x;
    const yi = polygon[i22].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y7 !== yj > y7 && x5 < (xj - xi) * (y7 - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
var $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
var $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
var $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
var $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4 = $6cc32821e9371a1c$export$22a631d1f72787bb;
var $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
var $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
var $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
var $6cc32821e9371a1c$export$a98f0dcb43a68a25 = $6cc32821e9371a1c$export$ea2200c9eee416b3;
var $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
var $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
var $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
var $6cc32821e9371a1c$export$21b07c8f274aebd5 = $6cc32821e9371a1c$export$bcdda4773debf5fa;
var $6cc32821e9371a1c$export$d7a01e11500dfb6f = $6cc32821e9371a1c$export$71bdb9d1e2909932;
var $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
var $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;

// node_modules/@radix-ui/react-context-menu/dist/index.mjs
var $1b0217ee4a91d156$var$CONTEXT_MENU_NAME = "ContextMenu";
var [$1b0217ee4a91d156$var$createContextMenuContext, $1b0217ee4a91d156$export$1059331f43ddcc82] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($1b0217ee4a91d156$var$CONTEXT_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $1b0217ee4a91d156$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$1b0217ee4a91d156$var$ContextMenuProvider, $1b0217ee4a91d156$var$useContextMenuContext] = $1b0217ee4a91d156$var$createContextMenuContext($1b0217ee4a91d156$var$CONTEXT_MENU_NAME);
var $1b0217ee4a91d156$export$8dc6765e8be191c7 = (props) => {
  const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
  const [open1, setOpen] = (0, import_react35.useState)(false);
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  const handleOpenChangeProp = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  const handleOpenChange = (0, import_react35.useCallback)((open) => {
    setOpen(open);
    handleOpenChangeProp(open);
  }, [
    handleOpenChangeProp
  ]);
  return (0, import_react35.createElement)($1b0217ee4a91d156$var$ContextMenuProvider, {
    scope: __scopeContextMenu,
    open: open1,
    onOpenChange: handleOpenChange,
    modal
  }, (0, import_react35.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends({}, menuScope, {
    dir,
    open: open1,
    onOpenChange: handleOpenChange,
    modal
  }), children));
};
Object.assign($1b0217ee4a91d156$export$8dc6765e8be191c7, {
  displayName: $1b0217ee4a91d156$var$CONTEXT_MENU_NAME
});
var $1b0217ee4a91d156$var$TRIGGER_NAME = "ContextMenuTrigger";
var $1b0217ee4a91d156$export$be6fc7b1d5b0beb9 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
  const context = $1b0217ee4a91d156$var$useContextMenuContext($1b0217ee4a91d156$var$TRIGGER_NAME, __scopeContextMenu);
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  const pointRef = (0, import_react35.useRef)({
    x: 0,
    y: 0
  });
  const virtualRef = (0, import_react35.useRef)({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...pointRef.current
    })
  });
  const longPressTimerRef = (0, import_react35.useRef)(0);
  const clearLongPress = (0, import_react35.useCallback)(
    () => window.clearTimeout(longPressTimerRef.current),
    []
  );
  const handleOpen = (event) => {
    pointRef.current = {
      x: event.clientX,
      y: event.clientY
    };
    context.onOpenChange(true);
  };
  (0, import_react35.useEffect)(
    () => clearLongPress,
    [
      clearLongPress
    ]
  );
  (0, import_react35.useEffect)(
    () => void (disabled && clearLongPress()),
    [
      disabled,
      clearLongPress
    ]
  );
  return (0, import_react35.createElement)(import_react35.Fragment, null, (0, import_react35.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, _extends({}, menuScope, {
    virtualRef
  })), (0, import_react35.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : void 0
  }, triggerProps, {
    ref: forwardedRef,
    style: {
      WebkitTouchCallout: "none",
      ...props.style
    },
    onContextMenu: disabled ? props.onContextMenu : $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onContextMenu, (event) => {
      clearLongPress();
      handleOpen(event);
      event.preventDefault();
    }),
    onPointerDown: disabled ? props.onPointerDown : $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, $1b0217ee4a91d156$var$whenTouchOrPen((event) => {
      clearLongPress();
      longPressTimerRef.current = window.setTimeout(
        () => handleOpen(event),
        700
      );
    })),
    onPointerMove: disabled ? props.onPointerMove : $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)),
    onPointerCancel: disabled ? props.onPointerCancel : $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerCancel, $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)),
    onPointerUp: disabled ? props.onPointerUp : $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, $1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress))
  })));
});
Object.assign($1b0217ee4a91d156$export$be6fc7b1d5b0beb9, {
  displayName: $1b0217ee4a91d156$var$TRIGGER_NAME
});
var $1b0217ee4a91d156$var$PORTAL_NAME = "ContextMenuPortal";
var $1b0217ee4a91d156$export$14afd0be83e45060 = (props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
};
Object.assign($1b0217ee4a91d156$export$14afd0be83e45060, {
  displayName: $1b0217ee4a91d156$var$PORTAL_NAME
});
var $1b0217ee4a91d156$var$CONTENT_NAME = "ContextMenuContent";
var $1b0217ee4a91d156$export$572205900c9369e = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...contentProps } = props;
  const context = $1b0217ee4a91d156$var$useContextMenuContext($1b0217ee4a91d156$var$CONTENT_NAME, __scopeContextMenu);
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  const hasInteractedOutsideRef = (0, import_react35.useRef)(false);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({}, menuScope, contentProps, {
    ref: forwardedRef,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented && hasInteractedOutsideRef.current)
        event.preventDefault();
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented && !context.modal)
        hasInteractedOutsideRef.current = true;
    },
    style: {
      ...props.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($1b0217ee4a91d156$export$572205900c9369e, {
  displayName: $1b0217ee4a91d156$var$CONTENT_NAME
});
var $1b0217ee4a91d156$var$GROUP_NAME = "ContextMenuGroup";
var $1b0217ee4a91d156$export$9860523b0fcdd664 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...groupProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$eb2fcfdbd7ba97d4, _extends({}, menuScope, groupProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$9860523b0fcdd664, {
  displayName: $1b0217ee4a91d156$var$GROUP_NAME
});
var $1b0217ee4a91d156$var$LABEL_NAME = "ContextMenuLabel";
var $1b0217ee4a91d156$export$d4b9d3b609a10742 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...labelProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$d4b9d3b609a10742, {
  displayName: $1b0217ee4a91d156$var$LABEL_NAME
});
var $1b0217ee4a91d156$var$ITEM_NAME = "ContextMenuItem";
var $1b0217ee4a91d156$export$16a26dc176a49100 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$16a26dc176a49100, {
  displayName: $1b0217ee4a91d156$var$ITEM_NAME
});
var $1b0217ee4a91d156$var$CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem";
var $1b0217ee4a91d156$export$b6adbe51d5d8b7ec = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$b6adbe51d5d8b7ec, {
  displayName: $1b0217ee4a91d156$var$CHECKBOX_ITEM_NAME
});
var $1b0217ee4a91d156$var$RADIO_GROUP_NAME = "ContextMenuRadioGroup";
var $1b0217ee4a91d156$export$db5c89af5ed9aa07 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$a98f0dcb43a68a25, _extends({}, menuScope, radioGroupProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$db5c89af5ed9aa07, {
  displayName: $1b0217ee4a91d156$var$RADIO_GROUP_NAME
});
var $1b0217ee4a91d156$var$RADIO_ITEM_NAME = "ContextMenuRadioItem";
var $1b0217ee4a91d156$export$8a727d09a7d9bfc2 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$8a727d09a7d9bfc2, {
  displayName: $1b0217ee4a91d156$var$RADIO_ITEM_NAME
});
var $1b0217ee4a91d156$var$INDICATOR_NAME = "ContextMenuItemIndicator";
var $1b0217ee4a91d156$export$9ed8194dee42d94b = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$9ed8194dee42d94b, {
  displayName: $1b0217ee4a91d156$var$INDICATOR_NAME
});
var $1b0217ee4a91d156$var$SEPARATOR_NAME = "ContextMenuSeparator";
var $1b0217ee4a91d156$export$8d6b009fadfe1207 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$8d6b009fadfe1207, {
  displayName: $1b0217ee4a91d156$var$SEPARATOR_NAME
});
var $1b0217ee4a91d156$var$ARROW_NAME = "ContextMenuArrow";
var $1b0217ee4a91d156$export$f47d0a58228a61e2 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...arrowProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$21b07c8f274aebd5, _extends({}, menuScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$f47d0a58228a61e2, {
  displayName: $1b0217ee4a91d156$var$ARROW_NAME
});
var $1b0217ee4a91d156$var$SUB_NAME = "ContextMenuSub";
var $1b0217ee4a91d156$export$5bc21d1c00c4b201 = (props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  const [open, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$d7a01e11500dfb6f, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen
  }), children);
};
Object.assign($1b0217ee4a91d156$export$5bc21d1c00c4b201, {
  displayName: $1b0217ee4a91d156$var$SUB_NAME
});
var $1b0217ee4a91d156$var$SUB_TRIGGER_NAME = "ContextMenuSubTrigger";
var $1b0217ee4a91d156$export$30b2b5c64556d316 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, triggerItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($1b0217ee4a91d156$export$30b2b5c64556d316, {
  displayName: $1b0217ee4a91d156$var$SUB_TRIGGER_NAME
});
var $1b0217ee4a91d156$var$SUB_CONTENT_NAME = "ContextMenuSubContent";
var $1b0217ee4a91d156$export$2c967063bd2dc512 = (0, import_react35.forwardRef)((props, forwardedRef) => {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = $1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);
  return (0, import_react35.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($1b0217ee4a91d156$export$2c967063bd2dc512, {
  displayName: $1b0217ee4a91d156$var$SUB_CONTENT_NAME
});
function $1b0217ee4a91d156$var$whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
var $1b0217ee4a91d156$export$be92b6f5f03c0fe9 = $1b0217ee4a91d156$export$8dc6765e8be191c7;
var $1b0217ee4a91d156$export$41fb9f06171c75f4 = $1b0217ee4a91d156$export$be6fc7b1d5b0beb9;
var $1b0217ee4a91d156$export$602eac185826482c = $1b0217ee4a91d156$export$14afd0be83e45060;
var $1b0217ee4a91d156$export$7c6e2c02157bb7d2 = $1b0217ee4a91d156$export$572205900c9369e;
var $1b0217ee4a91d156$export$eb2fcfdbd7ba97d4 = $1b0217ee4a91d156$export$9860523b0fcdd664;
var $1b0217ee4a91d156$export$b04be29aa201d4f5 = $1b0217ee4a91d156$export$d4b9d3b609a10742;
var $1b0217ee4a91d156$export$6d08773d2e66f8f2 = $1b0217ee4a91d156$export$16a26dc176a49100;
var $1b0217ee4a91d156$export$16ce288f89fa631c = $1b0217ee4a91d156$export$b6adbe51d5d8b7ec;
var $1b0217ee4a91d156$export$a98f0dcb43a68a25 = $1b0217ee4a91d156$export$db5c89af5ed9aa07;
var $1b0217ee4a91d156$export$371ab307eab489c0 = $1b0217ee4a91d156$export$8a727d09a7d9bfc2;
var $1b0217ee4a91d156$export$c3468e2714d175fa = $1b0217ee4a91d156$export$9ed8194dee42d94b;
var $1b0217ee4a91d156$export$1ff3c3f08ae963c0 = $1b0217ee4a91d156$export$8d6b009fadfe1207;
var $1b0217ee4a91d156$export$d7a01e11500dfb6f = $1b0217ee4a91d156$export$5bc21d1c00c4b201;
var $1b0217ee4a91d156$export$2ea8a7a591ac5eac = $1b0217ee4a91d156$export$30b2b5c64556d316;
var $1b0217ee4a91d156$export$6d4de93b380beddf = $1b0217ee4a91d156$export$2c967063bd2dc512;

// node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js
var r22 = __toESM(require_react(), 1);
var import_classnames23 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function $6c2e24571c90391f$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react36.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $57acba87d6e25586$var$SCROLL_AREA_NAME = "ScrollArea";
var [$57acba87d6e25586$var$createScrollAreaContext, $57acba87d6e25586$export$488468afe3a6f2b1] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($57acba87d6e25586$var$SCROLL_AREA_NAME);
var [$57acba87d6e25586$var$ScrollAreaProvider, $57acba87d6e25586$var$useScrollAreaContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLL_AREA_NAME);
var $57acba87d6e25586$export$ccf8d8d7bbf3c2cc = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
  const [scrollArea, setScrollArea] = (0, import_react36.useState)(null);
  const [viewport, setViewport] = (0, import_react36.useState)(null);
  const [content, setContent] = (0, import_react36.useState)(null);
  const [scrollbarX, setScrollbarX] = (0, import_react36.useState)(null);
  const [scrollbarY, setScrollbarY] = (0, import_react36.useState)(null);
  const [cornerWidth, setCornerWidth] = (0, import_react36.useState)(0);
  const [cornerHeight, setCornerHeight] = (0, import_react36.useState)(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = (0, import_react36.useState)(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = (0, import_react36.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setScrollArea(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  return (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaProvider, {
    scope: __scopeScrollArea,
    type,
    dir: direction,
    scrollHideDelay,
    scrollArea,
    viewport,
    onViewportChange: setViewport,
    content,
    onContentChange: setContent,
    scrollbarX,
    onScrollbarXChange: setScrollbarX,
    scrollbarXEnabled,
    onScrollbarXEnabledChange: setScrollbarXEnabled,
    scrollbarY,
    onScrollbarYChange: setScrollbarY,
    scrollbarYEnabled,
    onScrollbarYEnabledChange: setScrollbarYEnabled,
    onCornerWidthChange: setCornerWidth,
    onCornerHeightChange: setCornerHeight
  }, (0, import_react36.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction
  }, scrollAreaProps, {
    ref: composedRefs,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
      ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
      ...props.style
    }
  })));
});
Object.assign($57acba87d6e25586$export$ccf8d8d7bbf3c2cc, {
  displayName: $57acba87d6e25586$var$SCROLL_AREA_NAME
});
var $57acba87d6e25586$var$VIEWPORT_NAME = "ScrollAreaViewport";
var $57acba87d6e25586$export$a21cbf9f11fca853 = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, children, ...viewportProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$VIEWPORT_NAME, __scopeScrollArea);
  const ref = (0, import_react36.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onViewportChange);
  return (0, import_react36.createElement)(import_react36.Fragment, null, (0, import_react36.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
    }
  }), (0, import_react36.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-scroll-area-viewport": ""
  }, viewportProps, {
    ref: composedRefs,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
      ...props.style
    }
  }), (0, import_react36.createElement)("div", {
    ref: context.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, children)));
});
Object.assign($57acba87d6e25586$export$a21cbf9f11fca853, {
  displayName: $57acba87d6e25586$var$VIEWPORT_NAME
});
var $57acba87d6e25586$var$SCROLLBAR_NAME = "ScrollAreaScrollbar";
var $57acba87d6e25586$export$2fabd85d0eba3c57 = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
  const isHorizontal = props.orientation === "horizontal";
  (0, import_react36.useEffect)(() => {
    isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
    return () => {
      isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
    };
  }, [
    isHorizontal,
    onScrollbarXEnabledChange,
    onScrollbarYEnabledChange
  ]);
  return context.type === "hover" ? (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarHover, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "scroll" ? (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarScroll, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "auto" ? (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({}, scrollbarProps, {
    ref: forwardedRef,
    forceMount
  })) : context.type === "always" ? (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({}, scrollbarProps, {
    ref: forwardedRef
  })) : null;
});
Object.assign($57acba87d6e25586$export$2fabd85d0eba3c57, {
  displayName: $57acba87d6e25586$var$SCROLLBAR_NAME
});
var $57acba87d6e25586$var$ScrollAreaScrollbarHover = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = (0, import_react36.useState)(false);
  (0, import_react36.useEffect)(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(
          () => setVisible(false),
          context.scrollHideDelay
        );
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [
    context.scrollArea,
    context.scrollHideDelay
  ]);
  return (0, import_react36.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || visible
  }, (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto, _extends({
    "data-state": visible ? "visible" : "hidden"
  }, scrollbarProps, {
    ref: forwardedRef
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarScroll = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(
    () => send("SCROLL_END"),
    100
  );
  const [state, send] = $6c2e24571c90391f$export$3e6543de14f8614f("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  (0, import_react36.useEffect)(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(
        () => send("HIDE"),
        context.scrollHideDelay
      );
      return () => window.clearTimeout(hideTimer);
    }
  }, [
    state,
    context.scrollHideDelay,
    send
  ]);
  (0, import_react36.useEffect)(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    context.viewport,
    isHorizontal,
    send,
    debounceScrollEnd
  ]);
  return (0, import_react36.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || state !== "hidden"
  }, (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({
    "data-state": state === "hidden" ? "hidden" : "visible"
  }, scrollbarProps, {
    ref: forwardedRef,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onPointerEnter,
      () => send("POINTER_ENTER")
    ),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onPointerLeave,
      () => send("POINTER_LEAVE")
    )
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarAuto = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = (0, import_react36.useState)(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  $57acba87d6e25586$var$useResizeObserver(context.viewport, handleResize);
  $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
  return (0, import_react36.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || visible
  }, (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible, _extends({
    "data-state": visible ? "visible" : "hidden"
  }, scrollbarProps, {
    ref: forwardedRef
  })));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarVisible = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = (0, import_react36.useRef)(null);
  const pointerOffsetRef = (0, import_react36.useRef)(0);
  const [sizes, setSizes] = (0, import_react36.useState)({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  });
  const thumbRatio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal")
    return (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarX, _extends({}, commonProps, {
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollLeft;
          const offset3 = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
          thumbRef.current.style.transform = `translate3d(${offset3}px, 0, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
      }
    }));
  if (orientation === "vertical")
    return (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarY, _extends({}, commonProps, {
      ref: forwardedRef,
      onThumbPositionChange: () => {
        if (context.viewport && thumbRef.current) {
          const scrollPos = context.viewport.scrollTop;
          const offset3 = $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes);
          thumbRef.current.style.transform = `translate3d(0, ${offset3}px, 0)`;
        }
      },
      onWheelScroll: (scrollPos) => {
        if (context.viewport)
          context.viewport.scrollTop = scrollPos;
      },
      onDragScroll: (pointerPos) => {
        if (context.viewport)
          context.viewport.scrollTop = getScrollPosition(pointerPos);
      }
    }));
  return null;
});
var $57acba87d6e25586$var$ScrollAreaScrollbarX = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = (0, import_react36.useState)();
  const ref = (0, import_react36.useRef)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarXChange);
  (0, import_react36.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [
    ref
  ]);
  return (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({
    "data-orientation": "horizontal"
  }, scrollbarProps, {
    ref: composeRefs,
    sizes,
    style: {
      bottom: 0,
      left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: $57acba87d6e25586$var$getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollLeft + event.deltaX;
        props.onWheelScroll(scrollPos);
        if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos))
          event.preventDefault();
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle)
        onSizesChange({
          content: context.viewport.scrollWidth,
          viewport: context.viewport.offsetWidth,
          scrollbar: {
            size: ref.current.clientWidth,
            paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingLeft),
            paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingRight)
          }
        });
    }
  }));
});
var $57acba87d6e25586$var$ScrollAreaScrollbarY = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = (0, import_react36.useState)();
  const ref = (0, import_react36.useRef)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref, context.onScrollbarYChange);
  (0, import_react36.useEffect)(() => {
    if (ref.current)
      setComputedStyle(getComputedStyle(ref.current));
  }, [
    ref
  ]);
  return (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl, _extends({
    "data-orientation": "vertical"
  }, scrollbarProps, {
    ref: composeRefs,
    sizes,
    style: {
      top: 0,
      right: context.dir === "ltr" ? 0 : void 0,
      left: context.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: $57acba87d6e25586$var$getThumbSize(sizes) + "px",
      ...props.style
    },
    onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
    onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
    onWheelScroll: (event, maxScrollPos) => {
      if (context.viewport) {
        const scrollPos = context.viewport.scrollTop + event.deltaY;
        props.onWheelScroll(scrollPos);
        if ($57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos))
          event.preventDefault();
      }
    },
    onResize: () => {
      if (ref.current && context.viewport && computedStyle)
        onSizesChange({
          content: context.viewport.scrollHeight,
          viewport: context.viewport.offsetHeight,
          scrollbar: {
            size: ref.current.clientHeight,
            paddingStart: $57acba87d6e25586$var$toInt(computedStyle.paddingTop),
            paddingEnd: $57acba87d6e25586$var$toInt(computedStyle.paddingBottom)
          }
        });
    }
  }));
});
var [$57acba87d6e25586$var$ScrollbarProvider, $57acba87d6e25586$var$useScrollbarContext] = $57acba87d6e25586$var$createScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME);
var $57acba87d6e25586$var$ScrollAreaScrollbarImpl = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = (0, import_react36.useState)(null);
  const composeRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setScrollbar(node)
  );
  const rectRef = (0, import_react36.useRef)(null);
  const prevWebkitUserSelectRef = (0, import_react36.useRef)("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onWheelScroll);
  const handleThumbPositionChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPositionChange);
  const handleResize = $57acba87d6e25586$var$useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x5 = event.clientX - rectRef.current.left;
      const y7 = event.clientY - rectRef.current.top;
      onDragScroll({
        x: x5,
        y: y7
      });
    }
  }
  (0, import_react36.useEffect)(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel)
        handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return () => document.removeEventListener("wheel", handleWheel, {
      passive: false
    });
  }, [
    viewport,
    scrollbar,
    maxScrollPos,
    handleWheelScroll
  ]);
  (0, import_react36.useEffect)(handleThumbPositionChange, [
    sizes,
    handleThumbPositionChange
  ]);
  $57acba87d6e25586$var$useResizeObserver(scrollbar, handleResize);
  $57acba87d6e25586$var$useResizeObserver(context.content, handleResize);
  return (0, import_react36.createElement)($57acba87d6e25586$var$ScrollbarProvider, {
    scope: __scopeScrollArea,
    scrollbar,
    hasThumb,
    onThumbChange: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbChange),
    onThumbPointerUp: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerUp),
    onThumbPositionChange: handleThumbPositionChange,
    onThumbPointerDown: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onThumbPointerDown)
  }, (0, import_react36.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, scrollbarProps, {
    ref: composeRefs,
    style: {
      position: "absolute",
      ...scrollbarProps.style
    },
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      const mainPointer = 0;
      if (event.button === mainPointer) {
        const element = event.target;
        element.setPointerCapture(event.pointerId);
        rectRef.current = scrollbar.getBoundingClientRect();
        prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
        document.body.style.webkitUserSelect = "none";
        if (context.viewport)
          context.viewport.style.scrollBehavior = "auto";
        handleDragScroll(event);
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, handleDragScroll),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      const element = event.target;
      if (element.hasPointerCapture(event.pointerId))
        element.releasePointerCapture(event.pointerId);
      document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
      if (context.viewport)
        context.viewport.style.scrollBehavior = "";
      rectRef.current = null;
    })
  })));
});
var $57acba87d6e25586$var$THUMB_NAME = "ScrollAreaThumb";
var $57acba87d6e25586$export$9fba1154677d7cd2 = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...thumbProps } = props;
  const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, props.__scopeScrollArea);
  return (0, import_react36.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || scrollbarContext.hasThumb
  }, (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaThumbImpl, _extends({
    ref: forwardedRef
  }, thumbProps)));
});
var $57acba87d6e25586$var$ScrollAreaThumbImpl = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, style, ...thumbProps } = props;
  const scrollAreaContext = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
  const scrollbarContext = $57acba87d6e25586$var$useScrollbarContext($57acba87d6e25586$var$THUMB_NAME, __scopeScrollArea);
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => scrollbarContext.onThumbChange(node)
  );
  const removeUnlinkedScrollListenerRef = (0, import_react36.useRef)();
  const debounceScrollEnd = $57acba87d6e25586$var$useDebounceCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  (0, import_react36.useEffect)(() => {
    const viewport = scrollAreaContext.viewport;
    if (viewport) {
      const handleScroll2 = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = $57acba87d6e25586$var$addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    scrollAreaContext.viewport,
    debounceScrollEnd,
    onThumbPositionChange
  ]);
  return (0, import_react36.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": scrollbarContext.hasThumb ? "visible" : "hidden"
  }, thumbProps, {
    ref: composedRef,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...style
    },
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, (event) => {
      const thumb = event.target;
      const thumbRect = thumb.getBoundingClientRect();
      const x5 = event.clientX - thumbRect.left;
      const y7 = event.clientY - thumbRect.top;
      scrollbarContext.onThumbPointerDown({
        x: x5,
        y: y7
      });
    }),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, scrollbarContext.onThumbPointerUp)
  }));
});
Object.assign($57acba87d6e25586$export$9fba1154677d7cd2, {
  displayName: $57acba87d6e25586$var$THUMB_NAME
});
var $57acba87d6e25586$var$CORNER_NAME = "ScrollAreaCorner";
var $57acba87d6e25586$export$56969d565df7cc4b = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, props.__scopeScrollArea);
  const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
  const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? (0, import_react36.createElement)($57acba87d6e25586$var$ScrollAreaCornerImpl, _extends({}, props, {
    ref: forwardedRef
  })) : null;
});
Object.assign($57acba87d6e25586$export$56969d565df7cc4b, {
  displayName: $57acba87d6e25586$var$CORNER_NAME
});
var $57acba87d6e25586$var$ScrollAreaCornerImpl = (0, import_react36.forwardRef)((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = $57acba87d6e25586$var$useScrollAreaContext($57acba87d6e25586$var$CORNER_NAME, __scopeScrollArea);
  const [width1, setWidth] = (0, import_react36.useState)(0);
  const [height1, setHeight] = (0, import_react36.useState)(0);
  const hasSize = Boolean(width1 && height1);
  $57acba87d6e25586$var$useResizeObserver(context.scrollbarX, () => {
    var _context$scrollbarX;
    const height = ((_context$scrollbarX = context.scrollbarX) === null || _context$scrollbarX === void 0 ? void 0 : _context$scrollbarX.offsetHeight) || 0;
    context.onCornerHeightChange(height);
    setHeight(height);
  });
  $57acba87d6e25586$var$useResizeObserver(context.scrollbarY, () => {
    var _context$scrollbarY;
    const width = ((_context$scrollbarY = context.scrollbarY) === null || _context$scrollbarY === void 0 ? void 0 : _context$scrollbarY.offsetWidth) || 0;
    context.onCornerWidthChange(width);
    setWidth(width);
  });
  return hasSize ? (0, import_react36.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, cornerProps, {
    ref: forwardedRef,
    style: {
      width: width1,
      height: height1,
      position: "absolute",
      right: context.dir === "ltr" ? 0 : void 0,
      left: context.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...props.style
    }
  })) : null;
});
function $57acba87d6e25586$var$toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function $57acba87d6e25586$var$getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function $57acba87d6e25586$var$getThumbSize(sizes) {
  const ratio = $57acba87d6e25586$var$getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset3 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset3;
  const minPointerPos = sizes.scrollbar.paddingStart + offset3;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [
    0,
    maxScrollPos
  ] : [
    maxScrollPos * -1,
    0
  ];
  const interpolate = $57acba87d6e25586$var$linearScale([
    minPointerPos,
    maxPointerPos
  ], scrollRange);
  return interpolate(pointerPos);
}
function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = $57acba87d6e25586$var$getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [
    0,
    maxScrollPos
  ] : [
    maxScrollPos * -1,
    0
  ];
  const scrollWithoutMomentum = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(scrollPos, scrollClampRange);
  const interpolate = $57acba87d6e25586$var$linearScale([
    0,
    maxScrollPos
  ], [
    0,
    maxThumbPos
  ]);
  return interpolate(scrollWithoutMomentum);
}
function $57acba87d6e25586$var$linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var $57acba87d6e25586$var$addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = {
    left: node.scrollLeft,
    top: node.scrollTop
  };
  let rAF = 0;
  (function loop() {
    const position = {
      left: node.scrollLeft,
      top: node.scrollTop
    };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll)
      handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function $57acba87d6e25586$var$useDebounceCallback(callback, delay) {
  const handleCallback = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback);
  const debounceTimerRef = (0, import_react36.useRef)(0);
  (0, import_react36.useEffect)(
    () => () => window.clearTimeout(debounceTimerRef.current),
    []
  );
  return (0, import_react36.useCallback)(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [
    handleCallback,
    delay
  ]);
}
function $57acba87d6e25586$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
var $57acba87d6e25586$export$be92b6f5f03c0fe9 = $57acba87d6e25586$export$ccf8d8d7bbf3c2cc;
var $57acba87d6e25586$export$d5c6c08dc2d3ca7 = $57acba87d6e25586$export$a21cbf9f11fca853;
var $57acba87d6e25586$export$9a4e88b92edfce6b = $57acba87d6e25586$export$2fabd85d0eba3c57;
var $57acba87d6e25586$export$6521433ed15a34db = $57acba87d6e25586$export$9fba1154677d7cd2;
var $57acba87d6e25586$export$ac61190d9fc311a9 = $57acba87d6e25586$export$56969d565df7cc4b;

// node_modules/@radix-ui/themes/dist/esm/components/scroll-area.props.js
var r20 = ["1", "2", "3"];
var o27 = ["vertical", "horizontal", "both"];
var t14 = { ...o, size: { type: "enum", className: "rt-r-size", values: r20, default: "1", responsive: true }, ...r7, scrollbars: { type: "enum", values: o27, default: "both" } };

// node_modules/@radix-ui/themes/dist/esm/helpers/extract-margin-props.js
function a21(r43) {
  const { m: t36, mx: m20, my: o60, mt: p39, mr: n24, mb: s23, ml: e42, ...i22 } = r43;
  return { m: t36, mx: m20, my: o60, mt: p39, mr: n24, mb: s23, ml: e42, rest: i22 };
}

// node_modules/@radix-ui/themes/dist/esm/helpers/get-margin-styles.js
var import_classnames22 = __toESM(require_classnames(), 1);
var r21 = r5.m.values;
function S2(s23) {
  const [e42, t36] = R({ className: "rt-r-m", customProperties: ["--margin"], propValues: r21, value: s23.m }), [a39, o60] = R({ className: "rt-r-mx", customProperties: ["--margin-left", "--margin-right"], propValues: r21, value: s23.mx }), [l11, i22] = R({ className: "rt-r-my", customProperties: ["--margin-top", "--margin-bottom"], propValues: r21, value: s23.my }), [p39, u10] = R({ className: "rt-r-mt", customProperties: ["--margin-top"], propValues: r21, value: s23.mt }), [n24, c5] = R({ className: "rt-r-mr", customProperties: ["--margin-right"], propValues: r21, value: s23.mr }), [g7, P6] = R({ className: "rt-r-mb", customProperties: ["--margin-bottom"], propValues: r21, value: s23.mb }), [N8, C6] = R({ className: "rt-r-ml", customProperties: ["--margin-left"], propValues: r21, value: s23.ml });
  return [(0, import_classnames22.default)(e42, a39, l11, p39, n24, g7, N8), l2(t36, o60, i22, u10, c5, P6, C6)];
}

// node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js
var c2 = r22.forwardRef((n24, S6) => {
  const { rest: f21, ...u10 } = a21(n24), [P6, A3] = S2(u10), { asChild: a39, children: d10, className: y7, style: v8, type: t36, scrollHideDelay: N8 = t36 !== "scroll" ? 0 : void 0, dir: V, size: i22 = t14.size.default, radius: p39 = t14.radius.default, scrollbars: l11 = t14.scrollbars.default, ...b8 } = f21;
  return r22.createElement($57acba87d6e25586$export$be92b6f5f03c0fe9, { type: t36, scrollHideDelay: N8, className: (0, import_classnames23.default)("rt-ScrollAreaRoot", P6, y7), style: l2(A3, v8), asChild: a39 }, d3({ asChild: a39, children: d10 }, (g7) => r22.createElement(r22.Fragment, null, r22.createElement($57acba87d6e25586$export$d5c6c08dc2d3ca7, { ...b8, ref: S6, className: "rt-ScrollAreaViewport" }, g7), r22.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), l11 !== "vertical" ? r22.createElement($57acba87d6e25586$export$9a4e88b92edfce6b, { "data-radius": p39, orientation: "horizontal", className: (0, import_classnames23.default)("rt-ScrollAreaScrollbar", g({ className: "rt-r-size", value: i22, propValues: t14.size.values })) }, r22.createElement($57acba87d6e25586$export$6521433ed15a34db, { className: "rt-ScrollAreaThumb" })) : null, l11 !== "horizontal" ? r22.createElement($57acba87d6e25586$export$9a4e88b92edfce6b, { "data-radius": p39, orientation: "vertical", className: (0, import_classnames23.default)("rt-ScrollAreaScrollbar", g({ className: "rt-r-size", value: i22, propValues: t14.size.values })) }, r22.createElement($57acba87d6e25586$export$6521433ed15a34db, { className: "rt-ScrollAreaThumb" })) : null, l11 === "both" ? r22.createElement($57acba87d6e25586$export$ac61190d9fc311a9, { className: "rt-ScrollAreaCorner" }) : null)));
});
c2.displayName = "ScrollArea";

// node_modules/@radix-ui/themes/dist/esm/components/base-menu.props.js
var o28 = ["1", "2"];
var r23 = ["solid", "soft"];
var n15 = { size: { type: "enum", className: "rt-r-size", values: o28, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r23, default: "solid" }, ...r2, ...o3 };
var a22 = { ...o, ...r2, shortcut: { type: "string" } };
var i9 = { ...r2, shortcut: { type: "string" } };
var p21 = { ...r2 };

// node_modules/@radix-ui/themes/dist/esm/components/context-menu.js
var h = (t36) => e23.createElement($1b0217ee4a91d156$export$be92b6f5f03c0fe9, { ...t36 });
h.displayName = "ContextMenu.Root";
var g3 = e23.forwardRef(({ children: t36, ...n24 }, o60) => e23.createElement($1b0217ee4a91d156$export$41fb9f06171c75f4, { ...n24, ref: o60, asChild: true }, a4(t36)));
g3.displayName = "ContextMenu.Trigger";
var v3 = e23.createContext({});
var y2 = e23.forwardRef((t36, n24) => {
  const o60 = H(), { size: s23 = n15.size.default, variant: u10 = n15.variant.default, highContrast: i22 = n15.highContrast.default } = t36, { className: C6, children: m20, color: x5, container: M, forceMount: l11, ...L2 } = v(t36, n15), c5 = x5 || o60.accentColor;
  return e23.createElement($1b0217ee4a91d156$export$602eac185826482c, { container: M, forceMount: l11 }, e23.createElement(I, { asChild: true }, e23.createElement($1b0217ee4a91d156$export$7c6e2c02157bb7d2, { "data-accent-color": c5, alignOffset: -Number(s23) * 4, collisionPadding: 10, ...L2, asChild: false, ref: n24, className: (0, import_classnames24.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-ContextMenuContent", C6) }, e23.createElement(c2, { type: "auto" }, e23.createElement("div", { className: (0, import_classnames24.default)("rt-BaseMenuViewport", "rt-ContextMenuViewport") }, e23.createElement(v3.Provider, { value: e23.useMemo(() => ({ size: s23, variant: u10, color: c5, highContrast: i22 }), [s23, u10, c5, i22]) }, m20))))));
});
y2.displayName = "ContextMenu.Content";
var S3 = e23.forwardRef(({ className: t36, ...n24 }, o60) => e23.createElement($1b0217ee4a91d156$export$b04be29aa201d4f5, { ...n24, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuLabel", "rt-ContextMenuLabel", t36) }));
S3.displayName = "ContextMenu.Label";
var R3 = e23.forwardRef((t36, n24) => {
  const { className: o60, children: s23, color: u10 = a22.color.default, shortcut: i22, ...C6 } = t36;
  return e23.createElement($1b0217ee4a91d156$export$6d08773d2e66f8f2, { "data-accent-color": u10, ...C6, ref: n24, className: (0, import_classnames24.default)("rt-reset", "rt-BaseMenuItem", "rt-ContextMenuItem", o60) }, e23.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, s23), i22 && e23.createElement("div", { className: "rt-BaseMenuShortcut rt-ContextMenuShortcut" }, i22));
});
R3.displayName = "ContextMenu.Item";
var N4 = e23.forwardRef(({ className: t36, ...n24 }, o60) => e23.createElement($1b0217ee4a91d156$export$eb2fcfdbd7ba97d4, { ...n24, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuGroup", "rt-ContextMenuGroup", t36) }));
N4.displayName = "ContextMenu.Group";
var T3 = e23.forwardRef(({ className: t36, ...n24 }, o60) => e23.createElement($1b0217ee4a91d156$export$a98f0dcb43a68a25, { ...n24, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuRadioGroup", "rt-ContextMenuRadioGroup", t36) }));
T3.displayName = "ContextMenu.RadioGroup";
var E4 = e23.forwardRef((t36, n24) => {
  const { children: o60, className: s23, color: u10 = p21.color.default, ...i22 } = t36;
  return e23.createElement($1b0217ee4a91d156$export$371ab307eab489c0, { ...i22, asChild: false, ref: n24, "data-accent-color": u10, className: (0, import_classnames24.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-ContextMenuItem", "rt-ContextMenuRadioItem", s23) }, e23.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, o60), e23.createElement($1b0217ee4a91d156$export$c3468e2714d175fa, { className: "rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator" }, e23.createElement(r16, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })));
});
E4.displayName = "ContextMenu.RadioItem";
var G3 = e23.forwardRef((t36, n24) => {
  const { children: o60, className: s23, shortcut: u10, color: i22 = i9.color.default, ...C6 } = t36;
  return e23.createElement($1b0217ee4a91d156$export$16ce288f89fa631c, { ...C6, asChild: false, ref: n24, "data-accent-color": i22, className: (0, import_classnames24.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-ContextMenuItem", "rt-ContextMenuCheckboxItem", s23) }, e23.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, o60), e23.createElement($1b0217ee4a91d156$export$c3468e2714d175fa, { className: "rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator" }, e23.createElement(r16, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), u10 && e23.createElement("div", { className: "rt-BaseMenuShortcut rt-ContextMenuShortcut" }, u10));
});
G3.displayName = "ContextMenu.CheckboxItem";
var w2 = (t36) => e23.createElement($1b0217ee4a91d156$export$d7a01e11500dfb6f, { ...t36 });
w2.displayName = "ContextMenu.Sub";
var B2 = e23.forwardRef((t36, n24) => {
  const { className: o60, children: s23, ...u10 } = t36;
  return e23.createElement($1b0217ee4a91d156$export$2ea8a7a591ac5eac, { ...u10, asChild: false, ref: n24, className: (0, import_classnames24.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-ContextMenuItem", "rt-ContextMenuSubTrigger", o60) }, s23, e23.createElement("div", { className: "rt-BaseMenuShortcut rt-ContextMenuShortcut" }, e23.createElement(p17, { className: "rt-BaseMenuSubTriggerIcon rt-ContextMenuSubTriggerIcon" })));
});
B2.displayName = "ContextMenu.SubTrigger";
var k3 = e23.forwardRef((t36, n24) => {
  const { size: o60, variant: s23, color: u10, highContrast: i22 } = e23.useContext(v3), { className: C6, children: m20, container: x5, forceMount: M, ...l11 } = v({ size: o60, variant: s23, color: u10, highContrast: i22, ...t36 }, n15);
  return e23.createElement($1b0217ee4a91d156$export$602eac185826482c, { container: x5, forceMount: M }, e23.createElement(I, { asChild: true }, e23.createElement($1b0217ee4a91d156$export$6d4de93b380beddf, { "data-accent-color": u10, alignOffset: -Number(o60) * 4, sideOffset: 1, collisionPadding: 10, ...l11, asChild: false, ref: n24, className: (0, import_classnames24.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-ContextMenuContent", "rt-ContextMenuSubContent", C6) }, e23.createElement(c2, { type: "auto" }, e23.createElement("div", { className: (0, import_classnames24.default)("rt-BaseMenuViewport", "rt-ContextMenuViewport") }, m20)))));
});
k3.displayName = "ContextMenu.SubContent";
var W = e23.forwardRef(({ className: t36, ...n24 }, o60) => e23.createElement($1b0217ee4a91d156$export$1ff3c3f08ae963c0, { ...n24, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuSeparator", "rt-ContextMenuSeparator", t36) }));
W.displayName = "ContextMenu.Separator";

// node_modules/@radix-ui/themes/dist/esm/components/data-list.js
var data_list_exports = {};
__export(data_list_exports, {
  Item: () => m8,
  Label: () => L,
  Root: () => i11,
  Value: () => l7
});
var import_classnames25 = __toESM(require_classnames(), 1);
var t15 = __toESM(require_react(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/data-list.props.js
var s13 = ["start", "center", "end", "baseline", "stretch"];
var i10 = ["horizontal", "vertical"];
var a24 = ["1", "2", "3"];
var n16 = { orientation: { type: "enum", className: "rt-r-orientation", values: i10, default: "horizontal", responsive: true }, size: { type: "enum", className: "rt-r-size", values: a24, default: "2", responsive: true }, trim: { ...r3.trim, className: "rt-r-trim" } };
var p22 = { align: { type: "enum", className: "rt-r-ai", values: s13, responsive: true } };
var m7 = { ...t, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/data-list.js
var i11 = t15.forwardRef((a39, e42) => {
  const { className: s23, ...o60 } = v(a39, n16, r5);
  return t15.createElement(p, { asChild: true }, t15.createElement("dl", { ...o60, ref: e42, className: (0, import_classnames25.default)("rt-DataListRoot", s23) }));
});
i11.displayName = "DataList.Root";
var m8 = t15.forwardRef((a39, e42) => {
  const { className: s23, ...o60 } = v(a39, p22);
  return t15.createElement("div", { ...o60, ref: e42, className: (0, import_classnames25.default)("rt-DataListItem", s23) });
});
m8.displayName = "DataList.Item";
var L = t15.forwardRef((a39, e42) => {
  const { className: s23, color: o60, ...n24 } = v(a39, m7);
  return t15.createElement("dt", { ...n24, "data-accent-color": o60, ref: e42, className: (0, import_classnames25.default)("rt-DataListLabel", s23) });
});
L.displayName = "DataList.Label";
var l7 = t15.forwardRef(({ children: a39, className: e42, ...s23 }, o60) => t15.createElement("dd", { ...s23, ref: o60, className: (0, import_classnames25.default)(e42, "rt-DataListValue") }, a39));
l7.displayName = "DataList.Value";

// node_modules/@radix-ui/themes/dist/esm/components/dialog.js
var dialog_exports = {};
__export(dialog_exports, {
  Close: () => D2,
  Content: () => p23,
  Description: () => m9,
  Root: () => s14,
  Title: () => g4,
  Trigger: () => n17
});
var o29 = __toESM(require_react(), 1);
var import_classnames26 = __toESM(require_classnames(), 1);
var s14 = (e42) => o29.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { ...e42, modal: true });
s14.displayName = "Dialog.Root";
var n17 = o29.forwardRef(({ children: e42, ...i22 }, r43) => o29.createElement($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, { ...i22, ref: r43, asChild: true }, a4(e42)));
n17.displayName = "Dialog.Trigger";
var p23 = o29.forwardRef(({ align: e42, ...i22 }, r43) => {
  const { align: P6, ...f21 } = s, { className: C6 } = v({ align: e42 }, { align: P6 }), { className: d10, forceMount: c5, container: y7, ...T6 } = v(i22, f21);
  return o29.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: y7, forceMount: c5 }, o29.createElement(I, { asChild: true }, o29.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, o29.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, o29.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${C6}` }, o29.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { ...T6, ref: r43, className: (0, import_classnames26.default)("rt-BaseDialogContent", "rt-DialogContent", d10) }))))));
});
p23.displayName = "Dialog.Content";
var g4 = o29.forwardRef((e42, i22) => o29.createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, { asChild: true }, o29.createElement(r6, { size: "5", mb: "3", trim: "start", ...e42, asChild: false, ref: i22 })));
g4.displayName = "Dialog.Title";
var m9 = o29.forwardRef((e42, i22) => o29.createElement($5d3850c4d0b4e6c7$export$393edc798c47379d, { asChild: true }, o29.createElement(p, { as: "p", size: "3", ...e42, asChild: false, ref: i22 })));
m9.displayName = "Dialog.Description";
var D2 = o29.forwardRef(({ children: e42, ...i22 }, r43) => o29.createElement($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { ...i22, ref: r43, asChild: true }, a4(e42)));
D2.displayName = "Dialog.Close";

// node_modules/@radix-ui/themes/dist/esm/components/dropdown-menu.js
var dropdown_menu_exports = {};
__export(dropdown_menu_exports, {
  CheckboxItem: () => T4,
  Content: () => g5,
  Group: () => R4,
  Item: () => v5,
  Label: () => y3,
  RadioGroup: () => S4,
  RadioItem: () => x3,
  Root: () => I2,
  Separator: () => B3,
  Sub: () => N5,
  SubContent: () => G4,
  SubTrigger: () => E5,
  Trigger: () => h2,
  TriggerIcon: () => t12
});
var o30 = __toESM(require_react(), 1);
var import_classnames27 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_react37 = __toESM(require_react(), 1);
var $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
var [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
var $d08ef79370b62062$export$e44a253a59704894 = (props) => {
  const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const triggerRef = (0, import_react37.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react37.createElement)($d08ef79370b62062$var$DropdownMenuProvider, {
    scope: __scopeDropdownMenu,
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react37.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, (0, import_react37.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen,
    dir,
    modal
  }), children));
};
Object.assign($d08ef79370b62062$export$e44a253a59704894, {
  displayName: $d08ef79370b62062$var$DROPDOWN_MENU_NAME
});
var $d08ef79370b62062$var$TRIGGER_NAME = "DropdownMenuTrigger";
var $d08ef79370b62062$export$d2469213b3befba9 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, _extends({
    asChild: true
  }, menuScope), (0, import_react37.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    id: context.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": context.open ? context.contentId : void 0,
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : void 0,
    disabled
  }, triggerProps, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, context.triggerRef),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        context.onOpenToggle();
        if (!context.open)
          event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (disabled)
        return;
      if ([
        "Enter",
        " "
      ].includes(event.key))
        context.onOpenToggle();
      if (event.key === "ArrowDown")
        context.onOpenChange(true);
      if ([
        "Enter",
        " ",
        "ArrowDown"
      ].includes(event.key))
        event.preventDefault();
    })
  })));
});
Object.assign($d08ef79370b62062$export$d2469213b3befba9, {
  displayName: $d08ef79370b62062$var$TRIGGER_NAME
});
var $d08ef79370b62062$var$PORTAL_NAME = "DropdownMenuPortal";
var $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
};
Object.assign($d08ef79370b62062$export$cd369b4d4d54efc9, {
  displayName: $d08ef79370b62062$var$PORTAL_NAME
});
var $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
var $d08ef79370b62062$export$6e76d93a37c01248 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = (0, import_react37.useRef)(false);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($d08ef79370b62062$export$6e76d93a37c01248, {
  displayName: $d08ef79370b62062$var$CONTENT_NAME
});
var $d08ef79370b62062$var$GROUP_NAME = "DropdownMenuGroup";
var $d08ef79370b62062$export$246bebaba3a2f70e = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...groupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$eb2fcfdbd7ba97d4, _extends({}, menuScope, groupProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$246bebaba3a2f70e, {
  displayName: $d08ef79370b62062$var$GROUP_NAME
});
var $d08ef79370b62062$var$LABEL_NAME = "DropdownMenuLabel";
var $d08ef79370b62062$export$76e48c5b57f24495 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$76e48c5b57f24495, {
  displayName: $d08ef79370b62062$var$LABEL_NAME
});
var $d08ef79370b62062$var$ITEM_NAME = "DropdownMenuItem";
var $d08ef79370b62062$export$ed97964d1871885d = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$ed97964d1871885d, {
  displayName: $d08ef79370b62062$var$ITEM_NAME
});
var $d08ef79370b62062$var$CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var $d08ef79370b62062$export$53a69729da201fa9 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$53a69729da201fa9, {
  displayName: $d08ef79370b62062$var$CHECKBOX_ITEM_NAME
});
var $d08ef79370b62062$var$RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var $d08ef79370b62062$export$3323ad73d55f587e = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$a98f0dcb43a68a25, _extends({}, menuScope, radioGroupProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$3323ad73d55f587e, {
  displayName: $d08ef79370b62062$var$RADIO_GROUP_NAME
});
var $d08ef79370b62062$var$RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var $d08ef79370b62062$export$e4f69b41b1637536 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$e4f69b41b1637536, {
  displayName: $d08ef79370b62062$var$RADIO_ITEM_NAME
});
var $d08ef79370b62062$var$INDICATOR_NAME = "DropdownMenuItemIndicator";
var $d08ef79370b62062$export$42355ae145153fb6 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$42355ae145153fb6, {
  displayName: $d08ef79370b62062$var$INDICATOR_NAME
});
var $d08ef79370b62062$var$SEPARATOR_NAME = "DropdownMenuSeparator";
var $d08ef79370b62062$export$da160178fd3bc7e9 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$da160178fd3bc7e9, {
  displayName: $d08ef79370b62062$var$SEPARATOR_NAME
});
var $d08ef79370b62062$var$ARROW_NAME = "DropdownMenuArrow";
var $d08ef79370b62062$export$34b8980744021ec5 = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...arrowProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$21b07c8f274aebd5, _extends({}, menuScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$34b8980744021ec5, {
  displayName: $d08ef79370b62062$var$ARROW_NAME
});
var $d08ef79370b62062$export$2f307d81a64f5442 = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$d7a01e11500dfb6f, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen
  }), children);
};
var $d08ef79370b62062$var$SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var $d08ef79370b62062$export$21dcb7ec56f874cf = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
Object.assign($d08ef79370b62062$export$21dcb7ec56f874cf, {
  displayName: $d08ef79370b62062$var$SUB_TRIGGER_NAME
});
var $d08ef79370b62062$var$SUB_CONTENT_NAME = "DropdownMenuSubContent";
var $d08ef79370b62062$export$f34ec8bc2482cc5f = (0, import_react37.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return (0, import_react37.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($d08ef79370b62062$export$f34ec8bc2482cc5f, {
  displayName: $d08ef79370b62062$var$SUB_CONTENT_NAME
});
var $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
var $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
var $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
var $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
var $d08ef79370b62062$export$eb2fcfdbd7ba97d4 = $d08ef79370b62062$export$246bebaba3a2f70e;
var $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
var $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
var $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
var $d08ef79370b62062$export$a98f0dcb43a68a25 = $d08ef79370b62062$export$3323ad73d55f587e;
var $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
var $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
var $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
var $d08ef79370b62062$export$d7a01e11500dfb6f = $d08ef79370b62062$export$2f307d81a64f5442;
var $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
var $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;

// node_modules/@radix-ui/themes/dist/esm/components/dropdown-menu.js
var I2 = (e42) => o30.createElement($d08ef79370b62062$export$be92b6f5f03c0fe9, { ...e42 });
I2.displayName = "DropdownMenu.Root";
var h2 = o30.forwardRef(({ children: e42, ...n24 }, r43) => o30.createElement($d08ef79370b62062$export$41fb9f06171c75f4, { ...n24, ref: r43, asChild: true }, a4(e42)));
h2.displayName = "DropdownMenu.Trigger";
var b5 = o30.createContext({});
var g5 = o30.forwardRef((e42, n24) => {
  const r43 = H(), { size: s23 = n15.size.default, variant: p39 = n15.variant.default, highContrast: a39 = n15.highContrast.default } = e42, { className: i22, children: m20, color: M, container: w3, forceMount: D3, ...k4 } = v(e42, n15), l11 = M || r43.accentColor;
  return o30.createElement($d08ef79370b62062$export$602eac185826482c, { container: w3, forceMount: D3 }, o30.createElement(I, { asChild: true }, o30.createElement($d08ef79370b62062$export$7c6e2c02157bb7d2, { "data-accent-color": l11, align: "start", sideOffset: 4, collisionPadding: 10, ...k4, asChild: false, ref: n24, className: (0, import_classnames27.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-DropdownMenuContent", i22) }, o30.createElement(c2, { type: "auto" }, o30.createElement("div", { className: (0, import_classnames27.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, o30.createElement(b5.Provider, { value: o30.useMemo(() => ({ size: s23, variant: p39, color: l11, highContrast: a39 }), [s23, p39, l11, a39]) }, m20))))));
});
g5.displayName = "DropdownMenu.Content";
var y3 = o30.forwardRef(({ className: e42, ...n24 }, r43) => o30.createElement($d08ef79370b62062$export$b04be29aa201d4f5, { ...n24, asChild: false, ref: r43, className: (0, import_classnames27.default)("rt-BaseMenuLabel", "rt-DropdownMenuLabel", e42) }));
y3.displayName = "DropdownMenu.Label";
var v5 = o30.forwardRef((e42, n24) => {
  const { className: r43, children: s23, color: p39 = a22.color.default, shortcut: a39, ...i22 } = e42;
  return o30.createElement($d08ef79370b62062$export$6d08773d2e66f8f2, { "data-accent-color": p39, ...i22, ref: n24, className: (0, import_classnames27.default)("rt-reset", "rt-BaseMenuItem", "rt-DropdownMenuItem", r43) }, o30.createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, s23), a39 && o30.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, a39));
});
v5.displayName = "DropdownMenu.Item";
var R4 = o30.forwardRef(({ className: e42, ...n24 }, r43) => o30.createElement($d08ef79370b62062$export$eb2fcfdbd7ba97d4, { ...n24, asChild: false, ref: r43, className: (0, import_classnames27.default)("rt-BaseMenuGroup", "rt-DropdownMenuGroup", e42) }));
R4.displayName = "DropdownMenu.Group";
var S4 = o30.forwardRef(({ className: e42, ...n24 }, r43) => o30.createElement($d08ef79370b62062$export$a98f0dcb43a68a25, { ...n24, asChild: false, ref: r43, className: (0, import_classnames27.default)("rt-BaseMenuRadioGroup", "rt-DropdownMenuRadioGroup", e42) }));
S4.displayName = "DropdownMenu.RadioGroup";
var x3 = o30.forwardRef((e42, n24) => {
  const { children: r43, className: s23, color: p39 = p21.color.default, ...a39 } = e42;
  return o30.createElement($d08ef79370b62062$export$371ab307eab489c0, { ...a39, asChild: false, ref: n24, "data-accent-color": p39, className: (0, import_classnames27.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-DropdownMenuItem", "rt-DropdownMenuRadioItem", s23) }, r43, o30.createElement($d08ef79370b62062$export$c3468e2714d175fa, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, o30.createElement(r16, { className: "rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon" })));
});
x3.displayName = "DropdownMenu.RadioItem";
var T4 = o30.forwardRef((e42, n24) => {
  const { children: r43, className: s23, shortcut: p39, color: a39 = i9.color.default, ...i22 } = e42;
  return o30.createElement($d08ef79370b62062$export$16ce288f89fa631c, { ...i22, asChild: false, ref: n24, "data-accent-color": a39, className: (0, import_classnames27.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-DropdownMenuItem", "rt-DropdownMenuCheckboxItem", s23) }, r43, o30.createElement($d08ef79370b62062$export$c3468e2714d175fa, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, o30.createElement(r16, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), p39 && o30.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, p39));
});
T4.displayName = "DropdownMenu.CheckboxItem";
var N5 = (e42) => o30.createElement($d08ef79370b62062$export$d7a01e11500dfb6f, { ...e42 });
N5.displayName = "DropdownMenu.Sub";
var E5 = o30.forwardRef((e42, n24) => {
  const { className: r43, children: s23, ...p39 } = e42;
  return o30.createElement($d08ef79370b62062$export$2ea8a7a591ac5eac, { ...p39, asChild: false, ref: n24, className: (0, import_classnames27.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-DropdownMenuItem", "rt-DropdownMenuSubTrigger", r43) }, s23, o30.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, o30.createElement(p17, { className: "rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon" })));
});
E5.displayName = "DropdownMenu.SubTrigger";
var G4 = o30.forwardRef((e42, n24) => {
  const { size: r43, variant: s23, color: p39, highContrast: a39 } = o30.useContext(b5), { className: i22, children: m20, container: M, forceMount: w3, ...D3 } = v({ size: r43, variant: s23, color: p39, highContrast: a39, ...e42 }, n15);
  return o30.createElement($d08ef79370b62062$export$602eac185826482c, { container: M, forceMount: w3 }, o30.createElement(I, { asChild: true }, o30.createElement($d08ef79370b62062$export$6d4de93b380beddf, { "data-accent-color": p39, alignOffset: -Number(r43) * 4, sideOffset: 1, collisionPadding: 10, ...D3, asChild: false, ref: n24, className: (0, import_classnames27.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-DropdownMenuContent", "rt-DropdownMenuSubContent", i22) }, o30.createElement(c2, { type: "auto" }, o30.createElement("div", { className: (0, import_classnames27.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, m20)))));
});
G4.displayName = "DropdownMenu.SubContent";
var B3 = o30.forwardRef(({ className: e42, ...n24 }, r43) => o30.createElement($d08ef79370b62062$export$1ff3c3f08ae963c0, { ...n24, asChild: false, ref: r43, className: (0, import_classnames27.default)("rt-BaseMenuSeparator", "rt-DropdownMenuSeparator", e42) }));
B3.displayName = "DropdownMenu.Separator";

// node_modules/@radix-ui/themes/dist/esm/components/em.js
var e24 = __toESM(require_react(), 1);
var import_classnames28 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/em.props.js
var t16 = { ...o, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/em.js
var o31 = e24.forwardRef((p39, m20) => {
  const { asChild: r43, className: t36, ...s23 } = v(p39, t16);
  return e24.createElement(r43 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "em", { ...s23, ref: m20, className: (0, import_classnames28.default)("rt-Em", t36) });
});
o31.displayName = "Em";

// node_modules/@radix-ui/themes/dist/esm/components/hover-card.js
var hover_card_exports = {};
__export(hover_card_exports, {
  Content: () => C4,
  Root: () => s15,
  Trigger: () => p25
});
var r26 = __toESM(require_react(), 1);
var import_classnames29 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-hover-card/dist/index.mjs
var import_react38 = __toESM(require_react(), 1);
var $cef8881cdc69808e$var$originalBodyUserSelect;
var $cef8881cdc69808e$var$HOVERCARD_NAME = "HoverCard";
var [$cef8881cdc69808e$var$createHoverCardContext, $cef8881cdc69808e$export$47b6998a836b7260] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cef8881cdc69808e$var$HOVERCARD_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cef8881cdc69808e$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cef8881cdc69808e$var$HoverCardProvider, $cef8881cdc69808e$var$useHoverCardContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$HOVERCARD_NAME);
var $cef8881cdc69808e$export$57a077cc9fbe653e = (props) => {
  const { __scopeHoverCard, children, open: openProp, defaultOpen, onOpenChange, openDelay = 700, closeDelay = 300 } = props;
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const openTimerRef = (0, import_react38.useRef)(0);
  const closeTimerRef = (0, import_react38.useRef)(0);
  const hasSelectionRef = (0, import_react38.useRef)(false);
  const isPointerDownOnContentRef = (0, import_react38.useRef)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const handleOpen = (0, import_react38.useCallback)(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(
      () => setOpen(true),
      openDelay
    );
  }, [
    openDelay,
    setOpen
  ]);
  const handleClose = (0, import_react38.useCallback)(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current)
      closeTimerRef.current = window.setTimeout(
        () => setOpen(false),
        closeDelay
      );
  }, [
    closeDelay,
    setOpen
  ]);
  const handleDismiss = (0, import_react38.useCallback)(
    () => setOpen(false),
    [
      setOpen
    ]
  );
  (0, import_react38.useEffect)(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return (0, import_react38.createElement)($cef8881cdc69808e$var$HoverCardProvider, {
    scope: __scopeHoverCard,
    open,
    onOpenChange: setOpen,
    onOpen: handleOpen,
    onClose: handleClose,
    onDismiss: handleDismiss,
    hasSelectionRef,
    isPointerDownOnContentRef
  }, (0, import_react38.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, children));
};
Object.assign($cef8881cdc69808e$export$57a077cc9fbe653e, {
  displayName: $cef8881cdc69808e$var$HOVERCARD_NAME
});
var $cef8881cdc69808e$var$TRIGGER_NAME = "HoverCardTrigger";
var $cef8881cdc69808e$export$ef9f7fd8e4ba882f = (0, import_react38.forwardRef)((props, forwardedRef) => {
  const { __scopeHoverCard, ...triggerProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$TRIGGER_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  return (0, import_react38.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), (0, import_react38.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-state": context.open ? "open" : "closed"
  }, triggerProps, {
    ref: forwardedRef,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, context.onOpen),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, context.onClose),
    onTouchStart: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onTouchStart,
      (event) => event.preventDefault()
    )
  })));
});
Object.assign($cef8881cdc69808e$export$ef9f7fd8e4ba882f, {
  displayName: $cef8881cdc69808e$var$TRIGGER_NAME
});
var $cef8881cdc69808e$var$PORTAL_NAME = "HoverCardPortal";
var [$cef8881cdc69808e$var$PortalProvider, $cef8881cdc69808e$var$usePortalContext] = $cef8881cdc69808e$var$createHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cef8881cdc69808e$export$b384c6e0a789f88b = (props) => {
  const { __scopeHoverCard, forceMount, children, container } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$PORTAL_NAME, __scopeHoverCard);
  return (0, import_react38.createElement)($cef8881cdc69808e$var$PortalProvider, {
    scope: __scopeHoverCard,
    forceMount
  }, (0, import_react38.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react38.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($cef8881cdc69808e$export$b384c6e0a789f88b, {
  displayName: $cef8881cdc69808e$var$PORTAL_NAME
});
var $cef8881cdc69808e$var$CONTENT_NAME = "HoverCardContent";
var $cef8881cdc69808e$export$aa4724a5938c586 = (0, import_react38.forwardRef)((props, forwardedRef) => {
  const portalContext = $cef8881cdc69808e$var$usePortalContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, props.__scopeHoverCard);
  return (0, import_react38.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react38.createElement)($cef8881cdc69808e$var$HoverCardContentImpl, _extends({
    "data-state": context.open ? "open" : "closed"
  }, contentProps, {
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, $cef8881cdc69808e$var$excludeTouch(context.onOpen)),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $cef8881cdc69808e$var$excludeTouch(context.onClose)),
    ref: forwardedRef
  })));
});
Object.assign($cef8881cdc69808e$export$aa4724a5938c586, {
  displayName: $cef8881cdc69808e$var$CONTENT_NAME
});
var $cef8881cdc69808e$var$HoverCardContentImpl = (0, import_react38.forwardRef)((props, forwardedRef) => {
  const { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cef8881cdc69808e$var$useHoverCardContext($cef8881cdc69808e$var$CONTENT_NAME, __scopeHoverCard);
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  const ref = (0, import_react38.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [containSelection, setContainSelection] = (0, import_react38.useState)(false);
  (0, import_react38.useEffect)(() => {
    if (containSelection) {
      const body = document.body;
      $cef8881cdc69808e$var$originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
        body.style.webkitUserSelect = $cef8881cdc69808e$var$originalBodyUserSelect;
      };
    }
  }, [
    containSelection
  ]);
  (0, import_react38.useEffect)(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          var _document$getSelectio;
          const hasSelection = ((_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 ? void 0 : _document$getSelectio.toString()) !== "";
          if (hasSelection)
            context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [
    context.isPointerDownOnContentRef,
    context.hasSelectionRef
  ]);
  (0, import_react38.useEffect)(() => {
    if (ref.current) {
      const tabbables = $cef8881cdc69808e$var$getTabbableNodes(ref.current);
      tabbables.forEach(
        (tabbable) => tabbable.setAttribute("tabindex", "-1")
      );
    }
  });
  return (0, import_react38.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: false,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onFocusOutside, (event) => {
      event.preventDefault();
    }),
    onDismiss: context.onDismiss
  }, (0, import_react38.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, contentProps, {
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onPointerDown, (event) => {
      if (event.currentTarget.contains(event.target))
        setContainSelection(true);
      context.hasSelectionRef.current = false;
      context.isPointerDownOnContentRef.current = true;
    }),
    ref: composedRefs,
    style: {
      ...contentProps.style,
      userSelect: containSelection ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: containSelection ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
var $cef8881cdc69808e$var$ARROW_NAME = "HoverCardArrow";
var $cef8881cdc69808e$export$b9744d3e7456d806 = (0, import_react38.forwardRef)((props, forwardedRef) => {
  const { __scopeHoverCard, ...arrowProps } = props;
  const popperScope = $cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);
  return (0, import_react38.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($cef8881cdc69808e$export$b9744d3e7456d806, {
  displayName: $cef8881cdc69808e$var$ARROW_NAME
});
function $cef8881cdc69808e$var$excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function $cef8881cdc69808e$var$getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
var $cef8881cdc69808e$export$be92b6f5f03c0fe9 = $cef8881cdc69808e$export$57a077cc9fbe653e;
var $cef8881cdc69808e$export$41fb9f06171c75f4 = $cef8881cdc69808e$export$ef9f7fd8e4ba882f;
var $cef8881cdc69808e$export$602eac185826482c = $cef8881cdc69808e$export$b384c6e0a789f88b;
var $cef8881cdc69808e$export$7c6e2c02157bb7d2 = $cef8881cdc69808e$export$aa4724a5938c586;

// node_modules/@radix-ui/themes/dist/esm/components/hover-card.props.js
var r25 = ["1", "2", "3"];
var p24 = { ...o, size: { type: "enum", className: "rt-r-size", values: r25, default: "2", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "480px" }, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/hover-card.js
var s15 = (e42) => r26.createElement($cef8881cdc69808e$export$be92b6f5f03c0fe9, { closeDelay: 150, openDelay: 200, ...e42 });
s15.displayName = "HoverCard.Root";
var p25 = r26.forwardRef(({ children: e42, className: t36, ...n24 }, a39) => r26.createElement($cef8881cdc69808e$export$41fb9f06171c75f4, { ref: a39, className: (0, import_classnames29.default)("rt-HoverCardTrigger", t36), ...n24, asChild: true }, a4(e42)));
p25.displayName = "HoverCard.Trigger";
var C4 = r26.forwardRef((e42, t36) => {
  const { className: n24, forceMount: a39, container: m20, ...d10 } = v(e42, p24);
  return r26.createElement($cef8881cdc69808e$export$602eac185826482c, { container: m20, forceMount: a39 }, r26.createElement(I, { asChild: true }, r26.createElement($cef8881cdc69808e$export$7c6e2c02157bb7d2, { align: "start", sideOffset: 8, collisionPadding: 10, ...d10, ref: t36, className: (0, import_classnames29.default)("rt-PopperContent", "rt-HoverCardContent", n24) })));
});
C4.displayName = "HoverCard.Content";

// node_modules/@radix-ui/themes/dist/esm/components/icon-button.js
var t17 = __toESM(require_react(), 1);
var import_classnames30 = __toESM(require_classnames(), 1);
var o32 = t17.forwardRef(({ className: e42, ...n24 }, r43) => t17.createElement(n11, { ...n24, ref: r43, className: (0, import_classnames30.default)("rt-IconButton", e42) }));
o32.displayName = "IconButton";

// node_modules/@radix-ui/themes/dist/esm/components/inset.js
var e26 = __toESM(require_react(), 1);
var import_classnames31 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/inset.props.js
var a25 = ["all", "x", "y", "top", "bottom", "left", "right"];
var t18 = ["border-box", "padding-box"];
var e25 = ["current", "0"];
var u5 = { ...o, side: { type: "enum", className: "rt-r-side", values: a25, default: "all", responsive: true }, clip: { type: "enum", className: "rt-r-clip", values: t18, default: "border-box", responsive: true }, p: { type: "enum", className: "rt-r-p", values: e25, parseValue: p26, responsive: true }, px: { type: "enum", className: "rt-r-px", values: e25, parseValue: p26, responsive: true }, py: { type: "enum", className: "rt-r-py", values: e25, parseValue: p26, responsive: true }, pt: { type: "enum", className: "rt-r-pt", values: e25, parseValue: p26, responsive: true }, pr: { type: "enum", className: "rt-r-pr", values: e25, parseValue: p26, responsive: true }, pb: { type: "enum", className: "rt-r-pb", values: e25, parseValue: p26, responsive: true }, pl: { type: "enum", className: "rt-r-pl", values: e25, parseValue: p26, responsive: true } };
function p26(s23) {
  return s23 === "current" ? "inset" : s23;
}

// node_modules/@radix-ui/themes/dist/esm/components/inset.js
var o33 = e26.forwardRef((r43, p39) => {
  const { asChild: t36, className: s23, ...m20 } = v(r43, u5, r5);
  return e26.createElement(t36 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "div", { ...m20, ref: p39, className: (0, import_classnames31.default)("rt-Inset", s23) });
});
o33.displayName = "Inset";

// node_modules/@radix-ui/themes/dist/esm/components/kbd.js
var o35 = __toESM(require_react(), 1);
var import_classnames32 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/kbd.props.js
var e27 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var o34 = { ...o, size: { type: "enum", className: "rt-r-size", values: e27, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/kbd.js
var r27 = o35.forwardRef((p39, e42) => {
  const { asChild: t36, className: s23, ...m20 } = v(p39, o34, r5);
  return o35.createElement(t36 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "kbd", { ...m20, ref: e42, className: (0, import_classnames32.default)("rt-reset", "rt-Kbd", s23) });
});
r27.displayName = "Kbd";

// node_modules/@radix-ui/themes/dist/esm/components/link.js
var o36 = __toESM(require_react(), 1);
var import_classnames33 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/link.props.js
var n19 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var f11 = ["auto", "always", "hover", "none"];
var m10 = { ...o, size: { type: "enum", className: "rt-r-size", values: n19, responsive: true }, ...t3, ...r3, ...e6, ...r4, underline: { type: "enum", className: "rt-underline", values: f11, default: "auto" }, ...s2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/link.js
var e28 = o36.forwardRef((p39, t36) => {
  const { children: r43, className: s23, color: n24, asChild: i22, ...m20 } = v(p39, m10);
  return o36.createElement(p, { ...m20, "data-accent-color": n24, ref: t36, asChild: true, className: (0, import_classnames33.default)("rt-reset", "rt-Link", s23) }, i22 ? r43 : o36.createElement("a", null, r43));
});
e28.displayName = "Link";

// node_modules/@radix-ui/themes/dist/esm/components/popover.js
var popover_exports = {};
__export(popover_exports, {
  Close: () => m11,
  Content: () => i13,
  Root: () => n20,
  Trigger: () => s17
});
var o37 = __toESM(require_react(), 1);
var import_classnames34 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-popover/dist/index.mjs
var import_react39 = __toESM(require_react(), 1);
var $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
var [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
var $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
  const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const triggerRef = (0, import_react39.useRef)(null);
  const [hasCustomAnchor, setHasCustomAnchor] = (0, import_react39.useState)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_react39.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react39.createElement)($cb5cc270b50c6fcd$var$PopoverProvider, {
    scope: __scopePopover,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react39.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    hasCustomAnchor,
    onCustomAnchorAdd: (0, import_react39.useCallback)(
      () => setHasCustomAnchor(true),
      []
    ),
    onCustomAnchorRemove: (0, import_react39.useCallback)(
      () => setHasCustomAnchor(false),
      []
    ),
    modal
  }, children));
};
Object.assign($cb5cc270b50c6fcd$export$5b6b19405a83ff9d, {
  displayName: $cb5cc270b50c6fcd$var$POPOVER_NAME
});
var $cb5cc270b50c6fcd$var$ANCHOR_NAME = "PopoverAnchor";
var $cb5cc270b50c6fcd$export$96e5381f42521a79 = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...anchorProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$ANCHOR_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
  (0, import_react39.useEffect)(() => {
    onCustomAnchorAdd();
    return () => onCustomAnchorRemove();
  }, [
    onCustomAnchorAdd,
    onCustomAnchorRemove
  ]);
  return (0, import_react39.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
Object.assign($cb5cc270b50c6fcd$export$96e5381f42521a79, {
  displayName: $cb5cc270b50c6fcd$var$ANCHOR_NAME
});
var $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
var $cb5cc270b50c6fcd$export$7dacb05d26466c3 = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  const trigger = (0, import_react39.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
  return context.hasCustomAnchor ? trigger : (0, import_react39.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), trigger);
});
Object.assign($cb5cc270b50c6fcd$export$7dacb05d26466c3, {
  displayName: $cb5cc270b50c6fcd$var$TRIGGER_NAME
});
var $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
var [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
  return (0, import_react39.createElement)($cb5cc270b50c6fcd$var$PortalProvider, {
    scope: __scopePopover,
    forceMount
  }, (0, import_react39.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, (0, import_react39.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
Object.assign($cb5cc270b50c6fcd$export$dd679ffb4362d2d4, {
  displayName: $cb5cc270b50c6fcd$var$PORTAL_NAME
});
var $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
var $cb5cc270b50c6fcd$export$d7e1f420b25549ff = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  return (0, import_react39.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? (0, import_react39.createElement)($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : (0, import_react39.createElement)($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
Object.assign($cb5cc270b50c6fcd$export$d7e1f420b25549ff, {
  displayName: $cb5cc270b50c6fcd$var$CONTENT_NAME
});
var $cb5cc270b50c6fcd$var$PopoverContentModal = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const contentRef = (0, import_react39.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const isRightClickOutsideRef = (0, import_react39.useRef)(false);
  (0, import_react39.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return (0, import_react39.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, (0, import_react39.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, {
      checkForDefaultPrevented: false
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentNonModal = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const hasInteractedOutsideRef = (0, import_react39.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react39.useRef)(false);
  return (0, import_react39.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $cb5cc270b50c6fcd$var$PopoverContentImpl = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return (0, import_react39.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, (0, import_react39.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onDismiss: () => context.onOpenChange(false)
  }, (0, import_react39.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
    role: "dialog",
    id: context.contentId
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
var $cb5cc270b50c6fcd$var$CLOSE_NAME = "PopoverClose";
var $cb5cc270b50c6fcd$export$d6ac43ebaa40d53e = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...closeProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CLOSE_NAME, __scopePopover);
  return (0, import_react39.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
Object.assign($cb5cc270b50c6fcd$export$d6ac43ebaa40d53e, {
  displayName: $cb5cc270b50c6fcd$var$CLOSE_NAME
});
var $cb5cc270b50c6fcd$var$ARROW_NAME = "PopoverArrow";
var $cb5cc270b50c6fcd$export$3152841115e061b2 = (0, import_react39.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...arrowProps } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  return (0, import_react39.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  }));
});
Object.assign($cb5cc270b50c6fcd$export$3152841115e061b2, {
  displayName: $cb5cc270b50c6fcd$var$ARROW_NAME
});
function $cb5cc270b50c6fcd$var$getState(open) {
  return open ? "open" : "closed";
}
var $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
var $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
var $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
var $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;
var $cb5cc270b50c6fcd$export$f39c2d165cd861fe = $cb5cc270b50c6fcd$export$d6ac43ebaa40d53e;

// node_modules/@radix-ui/themes/dist/esm/components/popover.props.js
var p27 = ["1", "2", "3", "4"];
var r28 = { ...o, size: { type: "enum", className: "rt-r-size", values: p27, default: "2", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "480px" }, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/popover.js
var n20 = (e42) => o37.createElement($cb5cc270b50c6fcd$export$be92b6f5f03c0fe9, { ...e42 });
n20.displayName = "Popover.Root";
var s17 = o37.forwardRef(({ children: e42, ...r43 }, t36) => o37.createElement($cb5cc270b50c6fcd$export$41fb9f06171c75f4, { ...r43, ref: t36, asChild: true }, a4(e42)));
s17.displayName = "Popover.Trigger";
var i13 = o37.forwardRef((e42, r43) => {
  const { className: t36, forceMount: v8, container: a39, ...l11 } = v(e42, r28);
  return o37.createElement($cb5cc270b50c6fcd$export$602eac185826482c, { container: a39, forceMount: v8 }, o37.createElement(I, { asChild: true }, o37.createElement($cb5cc270b50c6fcd$export$7c6e2c02157bb7d2, { align: "start", sideOffset: 8, collisionPadding: 10, ...l11, ref: r43, className: (0, import_classnames34.default)("rt-PopperContent", "rt-PopoverContent", t36) })));
});
i13.displayName = "Popover.Content";
var m11 = o37.forwardRef(({ children: e42, ...r43 }, t36) => o37.createElement($cb5cc270b50c6fcd$export$f39c2d165cd861fe, { ...r43, ref: t36, asChild: true }, a4(e42)));
m11.displayName = "Popover.Close";

// node_modules/@radix-ui/themes/dist/esm/components/progress.js
var o39 = __toESM(require_react(), 1);
var import_classnames35 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-progress/dist/index.mjs
var import_react40 = __toESM(require_react(), 1);
var $67824d98245208a0$var$PROGRESS_NAME = "Progress";
var $67824d98245208a0$var$DEFAULT_MAX = 100;
var [$67824d98245208a0$var$createProgressContext, $67824d98245208a0$export$388eb2d8f6d3261f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($67824d98245208a0$var$PROGRESS_NAME);
var [$67824d98245208a0$var$ProgressProvider, $67824d98245208a0$var$useProgressContext] = $67824d98245208a0$var$createProgressContext($67824d98245208a0$var$PROGRESS_NAME);
var $67824d98245208a0$export$b25a304ec7d746bb = (0, import_react40.forwardRef)((props, forwardedRef) => {
  const { __scopeProgress, value: valueProp, max: maxProp, getValueLabel = $67824d98245208a0$var$defaultGetValueLabel, ...progressProps } = props;
  const max2 = $67824d98245208a0$var$isValidMaxNumber(maxProp) ? maxProp : $67824d98245208a0$var$DEFAULT_MAX;
  const value = $67824d98245208a0$var$isValidValueNumber(valueProp, max2) ? valueProp : null;
  const valueLabel = $67824d98245208a0$var$isNumber(value) ? getValueLabel(value, max2) : void 0;
  return (0, import_react40.createElement)($67824d98245208a0$var$ProgressProvider, {
    scope: __scopeProgress,
    value,
    max: max2
  }, (0, import_react40.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-valuemax": max2,
    "aria-valuemin": 0,
    "aria-valuenow": $67824d98245208a0$var$isNumber(value) ? value : void 0,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    "data-state": $67824d98245208a0$var$getProgressState(value, max2),
    "data-value": value !== null && value !== void 0 ? value : void 0,
    "data-max": max2
  }, progressProps, {
    ref: forwardedRef
  })));
});
Object.assign($67824d98245208a0$export$b25a304ec7d746bb, {
  displayName: $67824d98245208a0$var$PROGRESS_NAME
});
$67824d98245208a0$export$b25a304ec7d746bb.propTypes = {
  max(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$67824d98245208a0$var$isValidMaxNumber(propValue))
      return new Error($67824d98245208a0$var$getInvalidMaxError(strVal, componentName));
    return null;
  },
  value(props, propName, componentName) {
    const valueProp = props[propName];
    const strVal = String(valueProp);
    const max2 = $67824d98245208a0$var$isValidMaxNumber(props.max) ? props.max : $67824d98245208a0$var$DEFAULT_MAX;
    if (valueProp != null && !$67824d98245208a0$var$isValidValueNumber(valueProp, max2))
      return new Error($67824d98245208a0$var$getInvalidValueError(strVal, componentName));
    return null;
  }
};
var $67824d98245208a0$var$INDICATOR_NAME = "ProgressIndicator";
var $67824d98245208a0$export$2b776f7e7ee60dbd = (0, import_react40.forwardRef)((props, forwardedRef) => {
  var _context$value;
  const { __scopeProgress, ...indicatorProps } = props;
  const context = $67824d98245208a0$var$useProgressContext($67824d98245208a0$var$INDICATOR_NAME, __scopeProgress);
  return (0, import_react40.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $67824d98245208a0$var$getProgressState(context.value, context.max),
    "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : void 0,
    "data-max": context.max
  }, indicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($67824d98245208a0$export$2b776f7e7ee60dbd, {
  displayName: $67824d98245208a0$var$INDICATOR_NAME
});
function $67824d98245208a0$var$defaultGetValueLabel(value, max2) {
  return `${Math.round(value / max2 * 100)}%`;
}
function $67824d98245208a0$var$getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function $67824d98245208a0$var$isNumber(value) {
  return typeof value === "number";
}
function $67824d98245208a0$var$isValidMaxNumber(max2) {
  return $67824d98245208a0$var$isNumber(max2) && !isNaN(max2) && max2 > 0;
}
function $67824d98245208a0$var$isValidValueNumber(value, max2) {
  return $67824d98245208a0$var$isNumber(value) && !isNaN(value) && value <= max2 && value >= 0;
}
function $67824d98245208a0$var$getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`;
}
function $67824d98245208a0$var$getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var $67824d98245208a0$export$be92b6f5f03c0fe9 = $67824d98245208a0$export$b25a304ec7d746bb;
var $67824d98245208a0$export$adb584737d712b70 = $67824d98245208a0$export$2b776f7e7ee60dbd;

// node_modules/@radix-ui/themes/dist/esm/components/progress.props.js
var o38 = ["1", "2", "3"];
var t19 = ["classic", "surface", "soft"];
var a27 = { size: { type: "enum", className: "rt-r-size", values: o38, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t19, default: "surface" }, ...r2, ...o3, ...r7, duration: { type: "string" } };

// node_modules/@radix-ui/themes/dist/esm/components/progress.js
var s18 = o39.forwardRef((t36, p39) => {
  const { className: i22, style: m20, color: a39, radius: n24, duration: P6, ...r43 } = v(t36, a27, r5);
  return o39.createElement($67824d98245208a0$export$be92b6f5f03c0fe9, { "data-accent-color": a39, "data-radius": n24, ref: p39, className: (0, import_classnames35.default)("rt-ProgressRoot", i22), style: l2({ "--progress-duration": "value" in r43 ? void 0 : P6, "--progress-value": "value" in r43 ? r43.value : void 0, "--progress-max": "max" in r43 ? r43.max : void 0 }, m20), ...r43, asChild: false }, o39.createElement($67824d98245208a0$export$adb584737d712b70, { className: "rt-ProgressIndicator" }));
});
s18.displayName = "Progress";

// node_modules/@radix-ui/themes/dist/esm/components/quote.js
var o40 = __toESM(require_react(), 1);
var import_classnames36 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/quote.props.js
var p28 = { ...o, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/quote.js
var e29 = o40.forwardRef((t36, p39) => {
  const { asChild: r43, className: s23, ...m20 } = v(t36, p28);
  return o40.createElement(r43 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "q", { ...m20, ref: p39, className: (0, import_classnames36.default)("rt-Quote", s23) });
});
e29.displayName = "Quote";

// node_modules/@radix-ui/themes/dist/esm/components/radio-cards.js
var radio_cards_exports = {};
__export(radio_cards_exports, {
  Item: () => i14,
  Root: () => p30
});
var o41 = __toESM(require_react(), 1);
var import_classnames37 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var import_react41 = __toESM(require_react(), 1);
var $ce77a8961b41be9e$var$RADIO_NAME = "Radio";
var [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($ce77a8961b41be9e$var$RADIO_NAME);
var [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
var $ce77a8961b41be9e$export$d7b12c4107be0d61 = (0, import_react41.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, ...radioProps } = props;
  const [button, setButton] = (0, import_react41.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react41.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  return (0, import_react41.createElement)($ce77a8961b41be9e$var$RadioProvider, {
    scope: __scopeRadio,
    checked,
    disabled
  }, (0, import_react41.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "radio",
    "aria-checked": checked,
    "data-state": $ce77a8961b41be9e$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, radioProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      if (!checked)
        onCheck === null || onCheck === void 0 || onCheck();
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && (0, import_react41.createElement)($ce77a8961b41be9e$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
Object.assign($ce77a8961b41be9e$export$d7b12c4107be0d61, {
  displayName: $ce77a8961b41be9e$var$RADIO_NAME
});
var $ce77a8961b41be9e$var$INDICATOR_NAME = "RadioIndicator";
var $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = (0, import_react41.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
  return (0, import_react41.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.checked
  }, (0, import_react41.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $ce77a8961b41be9e$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef
  })));
});
Object.assign($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, {
  displayName: $ce77a8961b41be9e$var$INDICATOR_NAME
});
var $ce77a8961b41be9e$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react41.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react41.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return (0, import_react41.createElement)("input", _extends({
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $ce77a8961b41be9e$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $f99a8c78507165f7$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $f99a8c78507165f7$var$RADIO_GROUP_NAME = "RadioGroup";
var [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  $ce77a8961b41be9e$export$67d2296460f1b002
]);
var $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
var [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
var $f99a8c78507165f7$export$a98f0dcb43a68a25 = (0, import_react41.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return (0, import_react41.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue
  }, (0, import_react41.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), (0, import_react41.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "radiogroup",
    "aria-required": required,
    "aria-orientation": orientation,
    "data-disabled": disabled ? "" : void 0,
    dir: direction
  }, groupProps, {
    ref: forwardedRef
  }))));
});
Object.assign($f99a8c78507165f7$export$a98f0dcb43a68a25, {
  displayName: $f99a8c78507165f7$var$RADIO_GROUP_NAME
});
var $f99a8c78507165f7$var$ITEM_NAME = "RadioGroupItem";
var $f99a8c78507165f7$export$9f866c100ef519e4 = (0, import_react41.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  const ref = (0, import_react41.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = (0, import_react41.useRef)(false);
  (0, import_react41.useEffect)(() => {
    const handleKeyDown = (event) => {
      if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key))
        isArrowKeyPressedRef.current = true;
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (0, import_react41.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !isDisabled,
    active: checked
  }), (0, import_react41.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, _extends({
    disabled: isDisabled,
    required: context.required,
    checked
  }, radioScope, itemProps, {
    name: context.name,
    ref: composedRefs,
    onCheck: () => context.onValueChange(itemProps.value),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10((event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, () => {
      var _ref$current;
      if (isArrowKeyPressedRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
    })
  })));
});
Object.assign($f99a8c78507165f7$export$9f866c100ef519e4, {
  displayName: $f99a8c78507165f7$var$ITEM_NAME
});
var $f99a8c78507165f7$var$INDICATOR_NAME = "RadioGroupIndicator";
var $f99a8c78507165f7$export$5fb54c671a65c88 = (0, import_react41.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  return (0, import_react41.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, _extends({}, radioScope, indicatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($f99a8c78507165f7$export$5fb54c671a65c88, {
  displayName: $f99a8c78507165f7$var$INDICATOR_NAME
});
var $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
var $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;

// node_modules/@radix-ui/themes/dist/esm/components/radio-cards.props.js
var a28 = ["1", "2", "3"];
var t20 = ["surface", "classic"];
var p29 = { ...o, size: { type: "enum", className: "rt-r-size", values: a28, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t20, default: "surface" }, ...r2, ...o3, columns: { ...s11.columns, default: "repeat(auto-fit, minmax(160px, 1fr))" }, gap: { ...s11.gap, default: "4" } };

// node_modules/@radix-ui/themes/dist/esm/components/radio-cards.js
var p30 = o41.forwardRef((r43, t36) => {
  const { className: e42, color: d10, ...m20 } = v(r43, p29, r5);
  return o41.createElement(o21, { asChild: true }, o41.createElement($f99a8c78507165f7$export$be92b6f5f03c0fe9, { "data-accent-color": d10, ...m20, ref: t36, className: (0, import_classnames37.default)("rt-RadioCardsRoot", e42) }));
});
p30.displayName = "RadioCards.Root";
var i14 = o41.forwardRef(({ className: r43, ...t36 }, e42) => o41.createElement($f99a8c78507165f7$export$6d08773d2e66f8f2, { ...t36, asChild: false, ref: e42, className: (0, import_classnames37.default)("rt-reset", "rt-BaseCard", "rt-RadioCardsItem", r43) }));
i14.displayName = "RadioCards.Item";

// node_modules/@radix-ui/themes/dist/esm/components/radio-group.js
var radio_group_exports = {};
__export(radio_group_exports, {
  Item: () => x4,
  Root: () => y4
});
var o43 = __toESM(require_react(), 1);
var import_classnames38 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/radio-group.props.js
var o42 = ["1", "2", "3"];
var t21 = ["classic", "surface", "soft"];
var a30 = { ...o, size: { type: "enum", className: "rt-r-size", values: o42, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t21, default: "surface" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/radio-group.js
var P3 = "RadioGroup";
var [S5] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(P3, [$f99a8c78507165f7$export$c547093f11b76da2]);
var l8 = $f99a8c78507165f7$export$c547093f11b76da2();
var [E6, I3] = S5(P3);
var y4 = o43.forwardRef(({ color: a39 = a30.color.default, highContrast: e42 = a30.highContrast.default, size: r43 = a30.size.default, variant: t36 = a30.variant.default, ...i22 }, s23) => {
  const { __scopeRadioGroup: p39, className: R6, ...C6 } = v(i22, r5), h4 = l8(p39);
  return o43.createElement(E6, { scope: p39, color: a39, highContrast: e42, size: r43, variant: t36 }, o43.createElement($f99a8c78507165f7$export$be92b6f5f03c0fe9, { ...h4, ...C6, ref: s23, className: (0, import_classnames38.default)("rt-RadioGroupRoot", R6) }));
});
y4.displayName = "RadioGroup.Root";
var x4 = o43.forwardRef((a39, e42) => {
  const { __scopeRadioGroup: r43, children: t36, className: i22, style: s23, ...p39 } = a39, { size: R6 } = I3("RadioGroupItem", r43);
  return t36 ? o43.createElement(p, { as: "label", size: R6, className: (0, import_classnames38.default)("rt-RadioGroupItem", i22), style: s23 }, o43.createElement(u6, { __scopeRadioGroup: r43, ...p39, ref: e42 }), t36 && o43.createElement("span", { className: "rt-RadioGroupItemInner" }, t36)) : o43.createElement(u6, { __scopeRadioGroup: r43, ...p39, ref: e42, className: i22, style: s23 });
});
x4.displayName = "RadioGroup.Item";
var u6 = o43.forwardRef(({ __scopeRadioGroup: a39, ...e42 }, r43) => {
  const t36 = I3("RadioGroupItemRadio", a39), i22 = l8(a39), { color: s23, className: p39 } = v({ ...e42, ...t36 }, a30, r5);
  return o43.createElement($f99a8c78507165f7$export$6d08773d2e66f8f2, { ...i22, "data-accent-color": s23, ...e42, asChild: false, ref: r43, className: (0, import_classnames38.default)("rt-reset", "rt-BaseRadioRoot", p39) });
});
u6.displayName = "RadioGroup.ItemRadio";

// node_modules/@radix-ui/themes/dist/esm/components/radio.js
var o45 = __toESM(require_react(), 1);
var import_classnames39 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/base-radio.props.js
var r29 = ["1", "2", "3"];
var o44 = ["classic", "surface", "soft"];
var t22 = { size: { type: "enum", className: "rt-r-size", values: r29, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: o44, default: "surface" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/radio.js
var e30 = o45.forwardRef((r43, t36) => {
  const p39 = o45.useRef(null), { className: a39, color: s23, onChange: i22, onValueChange: n24, ...m20 } = v(r43, t22, r5);
  return o45.createElement("input", { type: "radio", "data-accent-color": s23, ...m20, onChange: $e42e1063c40fb3ef$export$b9ecd428b558ff10(i22, (d10) => n24 == null ? void 0 : n24(d10.currentTarget.value)), ref: $6ed0406888f73fc4$export$43e446d32b3d21af(p39, t36), className: (0, import_classnames39.default)("rt-reset", "rt-BaseRadioRoot", "rt-RadioRoot", a39) });
});
e30.displayName = "Radio";

// node_modules/@radix-ui/themes/dist/esm/components/reset.js
var e31 = __toESM(require_react(), 1);
var import_classnames40 = __toESM(require_classnames(), 1);
var o46 = e31.forwardRef(({ className: t36, children: r43, ...s23 }, p39) => e31.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, { ...s23, ref: p39, className: (0, import_classnames40.default)("rt-reset", t36) }, a4(r43)));
o46.displayName = "Reset";

// node_modules/@radix-ui/themes/dist/esm/components/segmented-control.js
var segmented_control_exports = {};
__export(segmented_control_exports, {
  Item: () => l9,
  Root: () => p31
});
var e32 = __toESM(require_react(), 1);
var import_classnames41 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var import_react43 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toggle/dist/index.mjs
var import_react42 = __toESM(require_react(), 1);
var $b3bbe2732c13b576$var$NAME = "Toggle";
var $b3bbe2732c13b576$export$bea8ebba691c5813 = (0, import_react42.forwardRef)((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;
  const [pressed = false, setPressed] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed
  });
  return (0, import_react42.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-pressed": pressed,
    "data-state": pressed ? "on" : "off",
    "data-disabled": props.disabled ? "" : void 0
  }, buttonProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      if (!props.disabled)
        setPressed(!pressed);
    })
  }));
});
Object.assign($b3bbe2732c13b576$export$bea8ebba691c5813, {
  displayName: $b3bbe2732c13b576$var$NAME
});

// node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var $6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME = "ToggleGroup";
var [$6c1fd9e6a8969628$var$createToggleGroupContext, $6c1fd9e6a8969628$export$d1c7c4bcd9f26dd4] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6c1fd9e6a8969628$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var $6c1fd9e6a8969628$export$af3ec21f6cfb5e30 = import_react43.default.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupImplSingle, _extends({}, singleProps, {
      ref: forwardedRef
    }));
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupImplMultiple, _extends({}, multipleProps, {
      ref: forwardedRef
    }));
  }
  throw new Error(`Missing prop \`type\` expected on \`${$6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME}\``);
});
Object.assign($6c1fd9e6a8969628$export$af3ec21f6cfb5e30, {
  displayName: $6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME
});
var [$6c1fd9e6a8969628$var$ToggleGroupValueProvider, $6c1fd9e6a8969628$var$useToggleGroupValueContext] = $6c1fd9e6a8969628$var$createToggleGroupContext($6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME);
var $6c1fd9e6a8969628$var$ToggleGroupImplSingle = import_react43.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...toggleGroupSingleProps } = props;
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupValueProvider, {
    scope: props.__scopeToggleGroup,
    type: "single",
    value: value ? [
      value
    ] : [],
    onItemActivate: setValue,
    onItemDeactivate: import_react43.default.useCallback(
      () => setValue(""),
      [
        setValue
      ]
    )
  }, import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupImpl, _extends({}, toggleGroupSingleProps, {
    ref: forwardedRef
  })));
});
var $6c1fd9e6a8969628$var$ToggleGroupImplMultiple = import_react43.default.forwardRef((props, forwardedRef) => {
  const { value: valueProp, defaultValue, onValueChange = () => {
  }, ...toggleGroupMultipleProps } = props;
  const [value1 = [], setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleButtonActivate = import_react43.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => [
        ...prevValue,
        itemValue
      ]
    ),
    [
      setValue
    ]
  );
  const handleButtonDeactivate = import_react43.default.useCallback(
    (itemValue) => setValue(
      (prevValue = []) => prevValue.filter(
        (value) => value !== itemValue
      )
    ),
    [
      setValue
    ]
  );
  return import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupValueProvider, {
    scope: props.__scopeToggleGroup,
    type: "multiple",
    value: value1,
    onItemActivate: handleButtonActivate,
    onItemDeactivate: handleButtonDeactivate
  }, import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupImpl, _extends({}, toggleGroupMultipleProps, {
    ref: forwardedRef
  })));
});
Object.assign($6c1fd9e6a8969628$export$af3ec21f6cfb5e30, {
  displayName: $6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME
});
var [$6c1fd9e6a8969628$var$ToggleGroupContext, $6c1fd9e6a8969628$var$useToggleGroupContext] = $6c1fd9e6a8969628$var$createToggleGroupContext($6c1fd9e6a8969628$var$TOGGLE_GROUP_NAME);
var $6c1fd9e6a8969628$var$ToggleGroupImpl = import_react43.default.forwardRef((props, forwardedRef) => {
  const { __scopeToggleGroup, disabled = false, rovingFocus = true, orientation, dir, loop = true, ...toggleGroupProps } = props;
  const rovingFocusGroupScope = $6c1fd9e6a8969628$var$useRovingFocusGroupScope(__scopeToggleGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const commonProps = {
    role: "group",
    dir: direction,
    ...toggleGroupProps
  };
  return import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupContext, {
    scope: __scopeToggleGroup,
    rovingFocus,
    disabled
  }, rovingFocus ? import_react43.default.createElement($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), import_react43.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, commonProps, {
    ref: forwardedRef
  }))) : import_react43.default.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, commonProps, {
    ref: forwardedRef
  })));
});
var $6c1fd9e6a8969628$var$ITEM_NAME = "ToggleGroupItem";
var $6c1fd9e6a8969628$export$b453109e13abe10b = import_react43.default.forwardRef((props, forwardedRef) => {
  const valueContext = $6c1fd9e6a8969628$var$useToggleGroupValueContext($6c1fd9e6a8969628$var$ITEM_NAME, props.__scopeToggleGroup);
  const context = $6c1fd9e6a8969628$var$useToggleGroupContext($6c1fd9e6a8969628$var$ITEM_NAME, props.__scopeToggleGroup);
  const rovingFocusGroupScope = $6c1fd9e6a8969628$var$useRovingFocusGroupScope(props.__scopeToggleGroup);
  const pressed = valueContext.value.includes(props.value);
  const disabled = context.disabled || props.disabled;
  const commonProps = {
    ...props,
    pressed,
    disabled
  };
  const ref = import_react43.default.useRef(null);
  return context.rovingFocus ? import_react43.default.createElement($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled,
    active: pressed,
    ref
  }), import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupItemImpl, _extends({}, commonProps, {
    ref: forwardedRef
  }))) : import_react43.default.createElement($6c1fd9e6a8969628$var$ToggleGroupItemImpl, _extends({}, commonProps, {
    ref: forwardedRef
  }));
});
Object.assign($6c1fd9e6a8969628$export$b453109e13abe10b, {
  displayName: $6c1fd9e6a8969628$var$ITEM_NAME
});
var $6c1fd9e6a8969628$var$ToggleGroupItemImpl = import_react43.default.forwardRef((props, forwardedRef) => {
  const { __scopeToggleGroup, value, ...itemProps } = props;
  const valueContext = $6c1fd9e6a8969628$var$useToggleGroupValueContext($6c1fd9e6a8969628$var$ITEM_NAME, __scopeToggleGroup);
  const singleProps = {
    role: "radio",
    "aria-checked": props.pressed,
    "aria-pressed": void 0
  };
  const typeProps = valueContext.type === "single" ? singleProps : void 0;
  return import_react43.default.createElement($b3bbe2732c13b576$export$bea8ebba691c5813, _extends({}, typeProps, itemProps, {
    ref: forwardedRef,
    onPressedChange: (pressed) => {
      if (pressed)
        valueContext.onItemActivate(value);
      else
        valueContext.onItemDeactivate(value);
    }
  }));
});
var $6c1fd9e6a8969628$export$be92b6f5f03c0fe9 = $6c1fd9e6a8969628$export$af3ec21f6cfb5e30;
var $6c1fd9e6a8969628$export$6d08773d2e66f8f2 = $6c1fd9e6a8969628$export$b453109e13abe10b;

// node_modules/@radix-ui/themes/dist/esm/components/segmented-control.props.js
var s19 = ["1", "2", "3"];
var r30 = ["surface", "classic"];
var t23 = { size: { type: "enum", className: "rt-r-size", values: s19, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r30, default: "surface" }, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/segmented-control.js
var p31 = e32.forwardRef((o60, t36) => {
  const { className: r43, children: n24, radius: i22, value: d10, defaultValue: g7, onValueChange: f21, ...P6 } = v(o60, t23, r5), [C6, u10] = $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: d10, onChange: f21, defaultProp: g7 });
  return e32.createElement($6c1fd9e6a8969628$export$be92b6f5f03c0fe9, { "data-radius": i22, ref: t36, className: (0, import_classnames41.default)("rt-SegmentedControlRoot", r43), onValueChange: (s23) => {
    s23 && u10(s23);
  }, ...P6, type: "single", value: C6, asChild: false, disabled: false }, n24, e32.createElement("div", { className: "rt-SegmentedControlIndicator" }));
});
p31.displayName = "SegmentedControl.Root";
var l9 = e32.forwardRef(({ children: o60, className: t36, ...r43 }, n24) => e32.createElement($6c1fd9e6a8969628$export$6d08773d2e66f8f2, { ref: n24, className: (0, import_classnames41.default)("rt-reset", "rt-SegmentedControlItem", t36), ...r43, disabled: false, asChild: false }, e32.createElement("span", { className: "rt-SegmentedControlItemSeparator" }), e32.createElement("span", { className: "rt-SegmentedControlItemLabel" }, e32.createElement("span", { className: "rt-SegmentedControlItemLabelActive" }, o60), e32.createElement("span", { className: "rt-SegmentedControlItemLabelInactive" }, o60))));
l9.displayName = "SegmentedControl.Item";

// node_modules/@radix-ui/themes/dist/esm/components/section.js
var o48 = __toESM(require_react(), 1);
var import_classnames42 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/section.props.js
var p32 = ["1", "2", "3", "4"];
var o47 = ["none", "initial"];
var t24 = { ...o, size: { type: "enum", className: "rt-r-size", values: p32, default: "3", responsive: true }, display: { type: "enum", className: "rt-r-display", values: o47, parseValue: r31, responsive: true } };
function r31(e42) {
  return e42 === "initial" ? "block" : e42;
}

// node_modules/@radix-ui/themes/dist/esm/components/section.js
var r32 = o48.forwardRef((t36, p39) => {
  const { asChild: e42, className: s23, ...m20 } = v(t36, t24, u, r5);
  return o48.createElement(e42 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "section", { ...m20, ref: p39, className: (0, import_classnames42.default)("rt-Section", s23) });
});
r32.displayName = "Section";

// node_modules/@radix-ui/themes/dist/esm/components/select.js
var select_exports = {};
__export(select_exports, {
  Content: () => g6,
  Group: () => v6,
  Item: () => y5,
  Label: () => h3,
  Root: () => C5,
  Separator: () => I4,
  Trigger: () => u7
});
var e33 = __toESM(require_react(), 1);
var import_classnames43 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-select/dist/index.mjs
var import_react44 = __toESM(require_react(), 1);
var import_react_dom5 = __toESM(require_react_dom(), 1);
var $cc7e05a45900e73f$var$OPEN_KEYS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
];
var $cc7e05a45900e73f$var$SELECTION_KEYS = [
  " ",
  "Enter"
];
var $cc7e05a45900e73f$var$SELECT_NAME = "Select";
var [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
  $cc7e05a45900e73f$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var $cc7e05a45900e73f$export$ef9b1a59e592288f = (props) => {
  const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = (0, import_react44.useState)(null);
  const [valueNode, setValueNode] = (0, import_react44.useState)(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = (0, import_react44.useState)(false);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = (0, import_react44.useRef)(null);
  const isFormControl = trigger ? Boolean(trigger.closest("form")) : true;
  const [nativeOptionsSet, setNativeOptionsSet] = (0, import_react44.useState)(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map(
    (option) => option.props.value
  ).join(";");
  return (0, import_react44.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectProvider, {
    required,
    scope: __scopeSelect,
    trigger,
    onTriggerChange: setTrigger,
    valueNode,
    onValueNodeChange: setValueNode,
    valueNodeHasChildren,
    onValueNodeHasChildrenChange: setValueNodeHasChildren,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    open,
    onOpenChange: setOpen,
    dir: direction,
    triggerPointerDownPosRef,
    disabled
  }, (0, import_react44.createElement)($cc7e05a45900e73f$var$Collection.Provider, {
    scope: __scopeSelect
  }, (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
    scope: props.__scopeSelect,
    onNativeOptionAdd: (0, import_react44.useCallback)((option) => {
      setNativeOptionsSet(
        (prev) => new Set(prev).add(option)
      );
    }, []),
    onNativeOptionRemove: (0, import_react44.useCallback)((option) => {
      setNativeOptionsSet((prev) => {
        const optionsSet = new Set(prev);
        optionsSet.delete(option);
        return optionsSet;
      });
    }, [])
  }, children)), isFormControl ? (0, import_react44.createElement)($cc7e05a45900e73f$var$BubbleSelect, {
    key: nativeSelectKey,
    "aria-hidden": true,
    required,
    tabIndex: -1,
    name,
    autoComplete,
    value,
    onChange: (event) => setValue(event.target.value),
    disabled
  }, value === void 0 ? (0, import_react44.createElement)("option", {
    value: ""
  }) : null, Array.from(nativeOptionsSet)) : null));
};
Object.assign($cc7e05a45900e73f$export$ef9b1a59e592288f, {
  displayName: $cc7e05a45900e73f$var$SELECT_NAME
});
var $cc7e05a45900e73f$var$TRIGGER_NAME = "SelectTrigger";
var $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, disabled = false, ...triggerProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onTriggerChange);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.value === context.value
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem !== void 0)
      context.onValueChange(nextItem.value);
  });
  const handleOpen = () => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
  };
  return (0, import_react44.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "combobox",
    "aria-controls": context.contentId,
    "aria-expanded": context.open,
    "aria-required": context.required,
    "aria-autocomplete": "none",
    dir: context.dir,
    "data-state": context.open ? "open" : "closed",
    disabled: isDisabled,
    "data-disabled": isDisabled ? "" : void 0,
    "data-placeholder": $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? "" : void 0
  }, triggerProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onClick, (event) => {
      event.currentTarget.focus();
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onPointerDown, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        target.releasePointerCapture(event.pointerId);
      if (event.button === 0 && event.ctrlKey === false) {
        handleOpen();
        context.triggerPointerDownPosRef.current = {
          x: Math.round(event.pageX),
          y: Math.round(event.pageY)
        };
        event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onKeyDown, (event) => {
      const isTypingAhead = searchRef.current !== "";
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
        handleOpen();
        event.preventDefault();
      }
    })
  })));
});
Object.assign($cc7e05a45900e73f$export$3ac1e88a1c0b9f1, {
  displayName: $cc7e05a45900e73f$var$TRIGGER_NAME
});
var $cc7e05a45900e73f$var$VALUE_NAME = "SelectValue";
var $cc7e05a45900e73f$export$e288731fd71264f0 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$VALUE_NAME, __scopeSelect);
  const { onValueNodeHasChildrenChange } = context;
  const hasChildren = children !== void 0;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onValueNodeChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [
    onValueNodeHasChildrenChange,
    hasChildren
  ]);
  return (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, valueProps, {
    ref: composedRefs,
    style: {
      pointerEvents: "none"
    }
  }), $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? (0, import_react44.createElement)(import_react44.Fragment, null, placeholder) : children);
});
Object.assign($cc7e05a45900e73f$export$e288731fd71264f0, {
  displayName: $cc7e05a45900e73f$var$VALUE_NAME
});
var $cc7e05a45900e73f$var$ICON_NAME = "SelectIcon";
var $cc7e05a45900e73f$export$99b400cabb58c515 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, children, ...iconProps } = props;
  return (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "aria-hidden": true
  }, iconProps, {
    ref: forwardedRef
  }), children || "▼");
});
Object.assign($cc7e05a45900e73f$export$99b400cabb58c515, {
  displayName: $cc7e05a45900e73f$var$ICON_NAME
});
var $cc7e05a45900e73f$var$PORTAL_NAME = "SelectPortal";
var $cc7e05a45900e73f$export$b2af6c9944296213 = (props) => {
  return (0, import_react44.createElement)($f1701beae083dbae$export$602eac185826482c, _extends({
    asChild: true
  }, props));
};
Object.assign($cc7e05a45900e73f$export$b2af6c9944296213, {
  displayName: $cc7e05a45900e73f$var$PORTAL_NAME
});
var $cc7e05a45900e73f$var$CONTENT_NAME = "SelectContent";
var $cc7e05a45900e73f$export$c973a4b3cb86a03d = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = (0, import_react44.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? (0, import_react_dom5.createPortal)((0, import_react44.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
      scope: props.__scopeSelect
    }, (0, import_react44.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
      scope: props.__scopeSelect
    }, (0, import_react44.createElement)("div", null, props.children))), frag) : null;
  }
  return (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectContentImpl, _extends({}, props, {
    ref: forwardedRef
  }));
});
Object.assign($cc7e05a45900e73f$export$c973a4b3cb86a03d, {
  displayName: $cc7e05a45900e73f$var$CONTENT_NAME
});
var $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
var [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
var $cc7e05a45900e73f$var$CONTENT_IMPL_NAME = "SelectContentImpl";
var $cc7e05a45900e73f$var$SelectContentImpl = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    //
    ...contentProps
  } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [content, setContent] = (0, import_react44.useState)(null);
  const [viewport, setViewport] = (0, import_react44.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [selectedItem, setSelectedItem] = (0, import_react44.useState)(null);
  const [selectedItemText, setSelectedItemText] = (0, import_react44.useState)(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = (0, import_react44.useState)(false);
  const firstValidItemFoundRef = (0, import_react44.useRef)(false);
  (0, import_react44.useEffect)(() => {
    if (content)
      return hideOthers(content);
  }, [
    content
  ]);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const focusFirst = (0, import_react44.useCallback)((candidates) => {
    const [firstItem, ...restItems] = getItems().map(
      (item) => item.ref.current
    );
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate === null || candidate === void 0 || candidate.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport)
        viewport.scrollTop = 0;
      if (candidate === lastItem && viewport)
        viewport.scrollTop = viewport.scrollHeight;
      candidate === null || candidate === void 0 || candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }, [
    getItems,
    viewport
  ]);
  const focusSelectedItem = (0, import_react44.useCallback)(
    () => focusFirst([
      selectedItem,
      content
    ]),
    [
      focusFirst,
      selectedItem,
      content
    ]
  );
  (0, import_react44.useEffect)(() => {
    if (isPositioned)
      focusSelectedItem();
  }, [
    isPositioned,
    focusSelectedItem
  ]);
  const { onOpenChange, triggerPointerDownPosRef } = context;
  (0, import_react44.useEffect)(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = (event) => {
        var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
          y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
        };
      };
      const handlePointerUp = (event) => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10)
          event.preventDefault();
        else if (!content.contains(event.target))
          onOpenChange(false);
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [
    content,
    onOpenChange,
    triggerPointerDownPosRef
  ]);
  (0, import_react44.useEffect)(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [
    onOpenChange
  ]);
  const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.ref.current === document.activeElement
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem)
      setTimeout(
        () => nextItem.ref.current.focus()
      );
  });
  const itemRefCallback = (0, import_react44.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem)
        firstValidItemFoundRef.current = true;
    }
  }, [
    context.value
  ]);
  const handleItemLeave = (0, import_react44.useCallback)(
    () => content === null || content === void 0 ? void 0 : content.focus(),
    [
      content
    ]
  );
  const itemTextRefCallback = (0, import_react44.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem)
      setSelectedItemText(node);
  }, [
    context.value
  ]);
  const SelectPosition = position === "popper" ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef
  }, (0, import_react44.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, (0, import_react44.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: context.open,
    onMountAutoFocus: (event) => {
      event.preventDefault();
    },
    onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event) => {
      var _context$trigger;
      (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
        preventScroll: true
      });
      event.preventDefault();
    })
  }, (0, import_react44.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: true,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: () => context.onOpenChange(false)
  }, (0, import_react44.createElement)(SelectPosition, _extends({
    role: "listbox",
    id: context.contentId,
    "data-state": context.open ? "open" : "closed",
    dir: context.dir,
    onContextMenu: (event) => event.preventDefault()
  }, contentProps, popperContentProps, {
    onPlaced: () => setIsPositioned(true),
    ref: composedRefs,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (event.key === "Tab")
        event.preventDefault();
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if ([
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(event.key)) {
        const items = getItems().filter(
          (item) => !item.disabled
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(event.key))
          candidateNodes = candidateNodes.slice().reverse();
        if ([
          "ArrowUp",
          "ArrowDown"
        ].includes(event.key)) {
          const currentElement = event.target;
          const currentIndex = candidateNodes.indexOf(currentElement);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  }))))));
});
Object.assign($cc7e05a45900e73f$var$SelectContentImpl, {
  displayName: $cc7e05a45900e73f$var$CONTENT_IMPL_NAME
});
var $cc7e05a45900e73f$var$ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var $cc7e05a45900e73f$var$SelectItemAlignedPosition = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = (0, import_react44.useState)(null);
  const [content, setContent] = (0, import_react44.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = (0, import_react44.useRef)(false);
  const shouldRepositionRef = (0, import_react44.useRef)(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = (0, import_react44.useCallback)(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          rightEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          leftEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced === null || onPlaced === void 0 || onPlaced();
      requestAnimationFrame(
        () => shouldExpandOnScrollRef.current = true
      );
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(
    () => position(),
    [
      position
    ]
  );
  const [contentZIndex, setContentZIndex] = (0, import_react44.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const handleScrollButtonChange = (0, import_react44.useCallback)((node) => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
      shouldRepositionRef.current = false;
    }
  }, [
    position,
    focusSelectedItem
  ]);
  return (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange
  }, (0, import_react44.createElement)("div", {
    ref: setContentWrapper,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: contentZIndex
    }
  }, (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, popperProps, {
    ref: composedRefs,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...popperProps.style
    }
  }))));
});
Object.assign($cc7e05a45900e73f$var$SelectItemAlignedPosition, {
  displayName: $cc7e05a45900e73f$var$ITEM_ALIGNED_POSITION_NAME
});
var $cc7e05a45900e73f$var$POPPER_POSITION_NAME = "SelectPopperPosition";
var $cc7e05a45900e73f$var$SelectPopperPosition = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, align = "start", collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN, ...popperProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  return (0, import_react44.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, popperProps, {
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...popperProps.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
Object.assign($cc7e05a45900e73f$var$SelectPopperPosition, {
  displayName: $cc7e05a45900e73f$var$POPPER_POSITION_NAME
});
var [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
var $cc7e05a45900e73f$var$VIEWPORT_NAME = "SelectViewport";
var $cc7e05a45900e73f$export$9ed6e7b40248d36d = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...viewportProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = (0, import_react44.useRef)(0);
  return (0, import_react44.createElement)(import_react44.Fragment, null, (0, import_react44.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
    }
  }), (0, import_react44.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
    scope: __scopeSelect
  }, (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, viewportProps, {
    ref: composedRefs,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...viewportProps.style
    },
    onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event) => {
      const viewport = event.currentTarget;
      const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
      if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
        const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
        if (scrolledBy > 0) {
          const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
          const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
          const cssHeight = parseFloat(contentWrapper.style.height);
          const prevHeight = Math.max(cssMinHeight, cssHeight);
          if (prevHeight < availableHeight) {
            const nextHeight = prevHeight + scrolledBy;
            const clampedNextHeight = Math.min(availableHeight, nextHeight);
            const heightDiff = nextHeight - clampedNextHeight;
            contentWrapper.style.height = clampedNextHeight + "px";
            if (contentWrapper.style.bottom === "0px") {
              viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
              contentWrapper.style.justifyContent = "flex-end";
            }
          }
        }
      }
      prevScrollTopRef.current = viewport.scrollTop;
    })
  }))));
});
Object.assign($cc7e05a45900e73f$export$9ed6e7b40248d36d, {
  displayName: $cc7e05a45900e73f$var$VIEWPORT_NAME
});
var $cc7e05a45900e73f$var$GROUP_NAME = "SelectGroup";
var [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
var $cc7e05a45900e73f$export$ee25a334c55de1f4 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...groupProps } = props;
  const groupId = $1746a345f3d73bb7$export$f680877a34711e37();
  return (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectGroupContextProvider, {
    scope: __scopeSelect,
    id: groupId
  }, (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "group",
    "aria-labelledby": groupId
  }, groupProps, {
    ref: forwardedRef
  })));
});
Object.assign($cc7e05a45900e73f$export$ee25a334c55de1f4, {
  displayName: $cc7e05a45900e73f$var$GROUP_NAME
});
var $cc7e05a45900e73f$var$LABEL_NAME = "SelectLabel";
var $cc7e05a45900e73f$export$f67338d29bd972f8 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...labelProps } = props;
  const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
  return (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    id: groupContext.id
  }, labelProps, {
    ref: forwardedRef
  }));
});
Object.assign($cc7e05a45900e73f$export$f67338d29bd972f8, {
  displayName: $cc7e05a45900e73f$var$LABEL_NAME
});
var $cc7e05a45900e73f$var$ITEM_NAME = "SelectItem";
var [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
var $cc7e05a45900e73f$export$13ef48a934230896 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = (0, import_react44.useState)(textValueProp !== null && textValueProp !== void 0 ? textValueProp : "");
  const [isFocused, setIsFocused] = (0, import_react44.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => {
    var _contentContext$itemR;
    return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
  });
  const textId = $1746a345f3d73bb7$export$f680877a34711e37();
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: (0, import_react44.useCallback)((node) => {
      setTextValue((prevTextValue) => {
        var _node$textContent;
        return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "").trim();
      });
    }, [])
  }, (0, import_react44.createElement)($cc7e05a45900e73f$var$Collection.ItemSlot, {
    scope: __scopeSelect,
    value,
    disabled,
    textValue
  }, (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "option",
    "aria-labelledby": textId,
    "data-highlighted": isFocused ? "" : void 0,
    "aria-selected": isSelected && isFocused,
    "data-state": isSelected ? "checked" : "unchecked",
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0,
    tabIndex: disabled ? void 0 : -1
  }, itemProps, {
    ref: composedRefs,
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onBlur,
      () => setIsFocused(false)
    ),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event) => {
      if (disabled) {
        var _contentContext$onIte;
        (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
      } else
        event.currentTarget.focus({
          preventScroll: true
        });
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event) => {
      if (event.currentTarget === document.activeElement) {
        var _contentContext$onIte2;
        (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event) => {
      var _contentContext$searc;
      const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== "";
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key))
        handleSelect();
      if (event.key === " ")
        event.preventDefault();
    })
  }))));
});
Object.assign($cc7e05a45900e73f$export$13ef48a934230896, {
  displayName: $cc7e05a45900e73f$var$ITEM_NAME
});
var $cc7e05a45900e73f$var$ITEM_TEXT_NAME = "SelectItemText";
var $cc7e05a45900e73f$export$3572fb0fb821ff49 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, className, style, ...itemTextProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = (0, import_react44.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setItemTextNode(node),
    itemContext.onItemTextChange,
    (node) => {
      var _contentContext$itemT;
      return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    }
  );
  const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
  const nativeOption = (0, import_react44.useMemo)(
    () => (0, import_react44.createElement)("option", {
      key: itemContext.value,
      value: itemContext.value,
      disabled: itemContext.disabled
    }, textContent),
    [
      itemContext.disabled,
      itemContext.value,
      textContent
    ]
  );
  const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [
    onNativeOptionAdd,
    onNativeOptionRemove,
    nativeOption
  ]);
  return (0, import_react44.createElement)(import_react44.Fragment, null, (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    id: itemContext.textId
  }, itemTextProps, {
    ref: composedRefs
  })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? (0, import_react_dom5.createPortal)(itemTextProps.children, context.valueNode) : null);
});
Object.assign($cc7e05a45900e73f$export$3572fb0fb821ff49, {
  displayName: $cc7e05a45900e73f$var$ITEM_TEXT_NAME
});
var $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = "SelectItemIndicator";
var $cc7e05a45900e73f$export$6b9198de19accfe6 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...itemIndicatorProps } = props;
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "aria-hidden": true
  }, itemIndicatorProps, {
    ref: forwardedRef
  })) : null;
});
Object.assign($cc7e05a45900e73f$export$6b9198de19accfe6, {
  displayName: $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME
});
var $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var $cc7e05a45900e73f$export$d8117927658af6d7 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp1, setCanScrollUp] = (0, import_react44.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    contentContext.viewport,
    contentContext.isPositioned
  ]);
  return canScrollUp1 ? (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends({}, props, {
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem)
        viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
    }
  })) : null;
});
Object.assign($cc7e05a45900e73f$export$d8117927658af6d7, {
  displayName: $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME
});
var $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var $cc7e05a45900e73f$export$ff951e476c12189 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown1, setCanScrollDown] = (0, import_react44.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    contentContext.viewport,
    contentContext.isPositioned
  ]);
  return canScrollDown1 ? (0, import_react44.createElement)($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends({}, props, {
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem)
        viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
    }
  })) : null;
});
Object.assign($cc7e05a45900e73f$export$ff951e476c12189, {
  displayName: $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME
});
var $cc7e05a45900e73f$var$SelectScrollButtonImpl = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = (0, import_react44.useRef)(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const clearAutoScrollTimer = (0, import_react44.useCallback)(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  (0, import_react44.useEffect)(() => {
    return () => clearAutoScrollTimer();
  }, [
    clearAutoScrollTimer
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    var _activeItem$ref$curre;
    const activeItem = getItems().find(
      (item) => item.ref.current === document.activeElement
    );
    activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
      block: "nearest"
    });
  }, [
    getItems
  ]);
  return (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true
  }, scrollIndicatorProps, {
    ref: forwardedRef,
    style: {
      flexShrink: 0,
      ...scrollIndicatorProps.style
    },
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerDown, () => {
      if (autoScrollTimerRef.current === null)
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerMove, () => {
      var _contentContext$onIte3;
      (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
      if (autoScrollTimerRef.current === null)
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerLeave, () => {
      clearAutoScrollTimer();
    })
  }));
});
var $cc7e05a45900e73f$var$SEPARATOR_NAME = "SelectSeparator";
var $cc7e05a45900e73f$export$eba4b1df07cb1d3 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...separatorProps } = props;
  return (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true
  }, separatorProps, {
    ref: forwardedRef
  }));
});
Object.assign($cc7e05a45900e73f$export$eba4b1df07cb1d3, {
  displayName: $cc7e05a45900e73f$var$SEPARATOR_NAME
});
var $cc7e05a45900e73f$var$ARROW_NAME = "SelectArrow";
var $cc7e05a45900e73f$export$314f4cb8f8099628 = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...arrowProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ARROW_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ARROW_NAME, __scopeSelect);
  return context.open && contentContext.position === "popper" ? (0, import_react44.createElement)($cf1ac5d9fe0e8206$export$21b07c8f274aebd5, _extends({}, popperScope, arrowProps, {
    ref: forwardedRef
  })) : null;
});
Object.assign($cc7e05a45900e73f$export$314f4cb8f8099628, {
  displayName: $cc7e05a45900e73f$var$ARROW_NAME
});
function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var $cc7e05a45900e73f$var$BubbleSelect = (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { value, ...selectProps } = props;
  const ref = (0, import_react44.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  (0, import_react44.useEffect)(() => {
    const select = ref.current;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return (0, import_react44.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, {
    asChild: true
  }, (0, import_react44.createElement)("select", _extends({}, selectProps, {
    ref: composedRefs,
    defaultValue: value
  })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = "BubbleSelect";
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
  const searchRef = (0, import_react44.useRef)("");
  const timerRef = (0, import_react44.useRef)(0);
  const handleTypeaheadSearch = (0, import_react44.useCallback)((key) => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
  }, [
    handleSearchChange
  ]);
  const resetTypeahead = (0, import_react44.useCallback)(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  (0, import_react44.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [
    searchRef,
    handleTypeaheadSearch,
    resetTypeahead
  ];
}
function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem)
    wrappedItems = wrappedItems.filter(
      (v8) => v8 !== currentItem
    );
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
var $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
var $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
var $cc7e05a45900e73f$export$4c8d1a57a761ef94 = $cc7e05a45900e73f$export$e288731fd71264f0;
var $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
var $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
var $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
var $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
var $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4 = $cc7e05a45900e73f$export$ee25a334c55de1f4;
var $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
var $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
var $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
var $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;
var $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;

// node_modules/@radix-ui/themes/dist/esm/components/select.props.js
var r33 = ["1", "2", "3"];
var o49 = { size: { type: "enum", className: "rt-r-size", values: r33, default: "2", responsive: true } };
var a31 = ["classic", "surface", "soft", "ghost"];
var i16 = { variant: { type: "enum", className: "rt-variant", values: a31, default: "surface" }, ...r2, ...r7, placeholder: { type: "string" } };
var n21 = ["solid", "soft"];
var p33 = { variant: { type: "enum", className: "rt-variant", values: n21, default: "solid" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/select.js
var f16 = e33.createContext({});
var C5 = (o60) => {
  const { children: r43, size: t36 = o49.size.default, ...s23 } = o60;
  return e33.createElement($cc7e05a45900e73f$export$be92b6f5f03c0fe9, { ...s23 }, e33.createElement(f16.Provider, { value: e33.useMemo(() => ({ size: t36 }), [t36]) }, r43));
};
C5.displayName = "Select.Root";
var u7 = e33.forwardRef((o60, r43) => {
  const t36 = e33.useContext(f16), { children: s23, className: p39, color: n24, radius: m20, placeholder: c5, ...S6 } = v({ size: t36 == null ? void 0 : t36.size, ...o60 }, { size: o49.size }, i16, r5);
  return e33.createElement($cc7e05a45900e73f$export$41fb9f06171c75f4, { asChild: true }, e33.createElement("button", { "data-accent-color": n24, "data-radius": m20, ...S6, ref: r43, className: (0, import_classnames43.default)("rt-reset", "rt-SelectTrigger", p39) }, e33.createElement("span", { className: "rt-SelectTriggerInner" }, e33.createElement($cc7e05a45900e73f$export$4c8d1a57a761ef94, { placeholder: c5 }, s23)), e33.createElement($cc7e05a45900e73f$export$f04a61298a47a40f, { asChild: true }, e33.createElement(t12, { className: "rt-SelectIcon" }))));
});
u7.displayName = "Select.Trigger";
var g6 = e33.forwardRef((o60, r43) => {
  const t36 = e33.useContext(f16), { className: s23, children: p39, color: n24, container: m20, ...c5 } = v({ size: t36 == null ? void 0 : t36.size, ...o60 }, { size: o49.size }, p33), S6 = H(), T6 = n24 || S6.accentColor;
  return e33.createElement($cc7e05a45900e73f$export$602eac185826482c, { container: m20 }, e33.createElement(I, { asChild: true }, e33.createElement($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { "data-accent-color": T6, sideOffset: 4, ...c5, asChild: false, ref: r43, className: (0, import_classnames43.default)({ "rt-PopperContent": c5.position === "popper" }, "rt-SelectContent", s23) }, e33.createElement($57acba87d6e25586$export$be92b6f5f03c0fe9, { type: "auto", className: "rt-ScrollAreaRoot" }, e33.createElement($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { asChild: true, className: "rt-SelectViewport" }, e33.createElement($57acba87d6e25586$export$d5c6c08dc2d3ca7, { className: "rt-ScrollAreaViewport", style: { overflowY: void 0 } }, p39)), e33.createElement($57acba87d6e25586$export$9a4e88b92edfce6b, { className: "rt-ScrollAreaScrollbar rt-r-size-1", orientation: "vertical" }, e33.createElement($57acba87d6e25586$export$6521433ed15a34db, { className: "rt-ScrollAreaThumb" }))))));
});
g6.displayName = "Select.Content";
var y5 = e33.forwardRef((o60, r43) => {
  const { className: t36, children: s23, ...p39 } = o60;
  return e33.createElement($cc7e05a45900e73f$export$6d08773d2e66f8f2, { ...p39, asChild: false, ref: r43, className: (0, import_classnames43.default)("rt-SelectItem", t36) }, e33.createElement($cc7e05a45900e73f$export$c3468e2714d175fa, { className: "rt-SelectItemIndicator" }, e33.createElement(r16, { className: "rt-SelectItemIndicatorIcon" })), e33.createElement($cc7e05a45900e73f$export$d6e5bf9c43ea9319, null, s23));
});
y5.displayName = "Select.Item";
var v6 = e33.forwardRef(({ className: o60, ...r43 }, t36) => e33.createElement($cc7e05a45900e73f$export$eb2fcfdbd7ba97d4, { ...r43, asChild: false, ref: t36, className: (0, import_classnames43.default)("rt-SelectGroup", o60) }));
v6.displayName = "Select.Group";
var h3 = e33.forwardRef(({ className: o60, ...r43 }, t36) => e33.createElement($cc7e05a45900e73f$export$b04be29aa201d4f5, { ...r43, asChild: false, ref: t36, className: (0, import_classnames43.default)("rt-SelectLabel", o60) }));
h3.displayName = "Select.Label";
var I4 = e33.forwardRef(({ className: o60, ...r43 }, t36) => e33.createElement($cc7e05a45900e73f$export$1ff3c3f08ae963c0, { ...r43, asChild: false, ref: t36, className: (0, import_classnames43.default)("rt-SelectSeparator", o60) }));
I4.displayName = "Select.Separator";

// node_modules/@radix-ui/themes/dist/esm/components/separator.js
var r35 = __toESM(require_react(), 1);
var import_classnames44 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/separator.props.js
var e34 = ["horizontal", "vertical"];
var r34 = ["1", "2", "3", "4"];
var t25 = { orientation: { type: "enum", className: "rt-r-orientation", values: e34, default: "horizontal", responsive: true }, size: { type: "enum", className: "rt-r-size", values: r34, default: "1", responsive: true }, color: { ...r2.color, default: "gray" }, decorative: { type: "boolean", default: true } };

// node_modules/@radix-ui/themes/dist/esm/components/separator.js
var o50 = r35.forwardRef((e42, p39) => {
  const { className: t36, color: a39, decorative: s23, ...m20 } = v(e42, t25, r5);
  return r35.createElement("span", { "data-accent-color": a39, role: s23 ? void 0 : "separator", ...m20, ref: p39, className: (0, import_classnames44.default)("rt-Separator", t36) });
});
o50.displayName = "Separator";

// node_modules/@radix-ui/themes/dist/esm/components/skeleton.js
var o51 = __toESM(require_react(), 1);
var import_classnames45 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/skeleton.props.js
var p34 = { loading: { type: "boolean", default: true }, ...t, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/skeleton.js
var t26 = o51.forwardRef((r43, p39) => {
  const { children: e42, className: n24, loading: s23, ...m20 } = v(r43, p34, r5);
  if (!s23)
    return e42;
  const i22 = o51.isValidElement(e42) ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "span";
  return o51.createElement(i22, { ref: p39, "aria-hidden": true, className: (0, import_classnames45.default)("rt-Skeleton", n24), "data-inline-skeleton": o51.isValidElement(e42) ? void 0 : true, tabIndex: -1, inert: "", ...m20 }, e42);
});
t26.displayName = "Skeleton";

// node_modules/@radix-ui/themes/dist/esm/components/slider.js
var e35 = __toESM(require_react(), 1);
var import_classnames46 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-slider/dist/index.mjs
var import_react45 = __toESM(require_react(), 1);
var $faa2e61a3361514f$var$PAGE_KEYS = [
  "PageUp",
  "PageDown"
];
var $faa2e61a3361514f$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $faa2e61a3361514f$var$BACK_KEYS = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
};
var $faa2e61a3361514f$var$SLIDER_NAME = "Slider";
var [$faa2e61a3361514f$var$Collection, $faa2e61a3361514f$var$useCollection, $faa2e61a3361514f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($faa2e61a3361514f$var$SLIDER_NAME);
var [$faa2e61a3361514f$var$createSliderContext, $faa2e61a3361514f$export$ef72632d7b901f97] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($faa2e61a3361514f$var$SLIDER_NAME, [
  $faa2e61a3361514f$var$createCollectionScope
]);
var [$faa2e61a3361514f$var$SliderProvider, $faa2e61a3361514f$var$useSliderContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME);
var $faa2e61a3361514f$export$472062a354075cee = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { name, min: min2 = 0, max: max2 = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [
    min2
  ], value: value1, onValueChange = () => {
  }, onValueCommit = () => {
  }, inverted = false, ...sliderProps } = props;
  const [slider, setSlider] = (0, import_react45.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setSlider(node)
  );
  const thumbRefs = (0, import_react45.useRef)(/* @__PURE__ */ new Set());
  const valueIndexToChangeRef = (0, import_react45.useRef)(0);
  const isHorizontal = orientation === "horizontal";
  const isFormControl = slider ? Boolean(slider.closest("form")) : true;
  const SliderOrientation = isHorizontal ? $faa2e61a3361514f$var$SliderHorizontal : $faa2e61a3361514f$var$SliderVertical;
  const [values = [], setValues] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: value1,
    defaultProp: defaultValue,
    onChange: (value) => {
      var _thumbs$valueIndexToC;
      const thumbs = [
        ...thumbRefs.current
      ];
      (_thumbs$valueIndexToC = thumbs[valueIndexToChangeRef.current]) === null || _thumbs$valueIndexToC === void 0 || _thumbs$valueIndexToC.focus();
      onValueChange(value);
    }
  });
  const valuesBeforeSlideStartRef = (0, import_react45.useRef)(values);
  function handleSlideStart(value) {
    const closestIndex = $faa2e61a3361514f$var$getClosestValueIndex(values, value);
    updateValues(value, closestIndex);
  }
  function handleSlideMove(value) {
    updateValues(value, valueIndexToChangeRef.current);
  }
  function handleSlideEnd() {
    const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
    const nextValue = values[valueIndexToChangeRef.current];
    const hasChanged = nextValue !== prevValue;
    if (hasChanged)
      onValueCommit(values);
  }
  function updateValues(value, atIndex, { commit } = {
    commit: false
  }) {
    const decimalCount = $faa2e61a3361514f$var$getDecimalCount(step);
    const snapToStep = $faa2e61a3361514f$var$roundValue(Math.round((value - min2) / step) * step + min2, decimalCount);
    const nextValue = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(snapToStep, [
      min2,
      max2
    ]);
    setValues((prevValues = []) => {
      const nextValues = $faa2e61a3361514f$var$getNextSortedValues(prevValues, nextValue, atIndex);
      if ($faa2e61a3361514f$var$hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
        valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
        const hasChanged = String(nextValues) !== String(prevValues);
        if (hasChanged && commit)
          onValueCommit(nextValues);
        return hasChanged ? nextValues : prevValues;
      } else
        return prevValues;
    });
  }
  return (0, import_react45.createElement)($faa2e61a3361514f$var$SliderProvider, {
    scope: props.__scopeSlider,
    disabled,
    min: min2,
    max: max2,
    valueIndexToChangeRef,
    thumbs: thumbRefs.current,
    values,
    orientation
  }, (0, import_react45.createElement)($faa2e61a3361514f$var$Collection.Provider, {
    scope: props.__scopeSlider
  }, (0, import_react45.createElement)($faa2e61a3361514f$var$Collection.Slot, {
    scope: props.__scopeSlider
  }, (0, import_react45.createElement)(SliderOrientation, _extends({
    "aria-disabled": disabled,
    "data-disabled": disabled ? "" : void 0
  }, sliderProps, {
    ref: composedRefs,
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(sliderProps.onPointerDown, () => {
      if (!disabled)
        valuesBeforeSlideStartRef.current = values;
    }),
    min: min2,
    max: max2,
    inverted,
    onSlideStart: disabled ? void 0 : handleSlideStart,
    onSlideMove: disabled ? void 0 : handleSlideMove,
    onSlideEnd: disabled ? void 0 : handleSlideEnd,
    onHomeKeyDown: () => !disabled && updateValues(min2, 0, {
      commit: true
    }),
    onEndKeyDown: () => !disabled && updateValues(max2, values.length - 1, {
      commit: true
    }),
    onStepKeyDown: ({ event, direction: stepDirection }) => {
      if (!disabled) {
        const isPageKey = $faa2e61a3361514f$var$PAGE_KEYS.includes(event.key);
        const isSkipKey = isPageKey || event.shiftKey && $faa2e61a3361514f$var$ARROW_KEYS.includes(event.key);
        const multiplier = isSkipKey ? 10 : 1;
        const atIndex = valueIndexToChangeRef.current;
        const value = values[atIndex];
        const stepInDirection = step * multiplier * stepDirection;
        updateValues(value + stepInDirection, atIndex, {
          commit: true
        });
      }
    }
  })))), isFormControl && values.map(
    (value, index2) => (0, import_react45.createElement)($faa2e61a3361514f$var$BubbleInput, {
      key: index2,
      name: name ? name + (values.length > 1 ? "[]" : "") : void 0,
      value
    })
  ));
});
Object.assign($faa2e61a3361514f$export$472062a354075cee, {
  displayName: $faa2e61a3361514f$var$SLIDER_NAME
});
var [$faa2e61a3361514f$var$SliderOrientationProvider, $faa2e61a3361514f$var$useSliderOrientationContext] = $faa2e61a3361514f$var$createSliderContext($faa2e61a3361514f$var$SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var $faa2e61a3361514f$var$SliderHorizontal = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { min: min2, max: max2, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
  const [slider, setSlider] = (0, import_react45.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setSlider(node)
  );
  const rectRef = (0, import_react45.useRef)();
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const isDirectionLTR = direction === "ltr";
  const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
  function getValueFromPointer(pointerPosition) {
    const rect = rectRef.current || slider.getBoundingClientRect();
    const input = [
      0,
      rect.width
    ];
    const output = isSlidingFromLeft ? [
      min2,
      max2
    ] : [
      max2,
      min2
    ];
    const value = $faa2e61a3361514f$var$linearScale(input, output);
    rectRef.current = rect;
    return value(pointerPosition - rect.left);
  }
  return (0, import_react45.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isSlidingFromLeft ? "left" : "right",
    endEdge: isSlidingFromLeft ? "right" : "left",
    direction: isSlidingFromLeft ? 1 : -1,
    size: "width"
  }, (0, import_react45.createElement)($faa2e61a3361514f$var$SliderImpl, _extends({
    dir: direction,
    "data-orientation": "horizontal"
  }, sliderProps, {
    ref: composedRefs,
    style: {
      ...sliderProps.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (event) => {
      const value = getValueFromPointer(event.clientX);
      onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
    },
    onSlideMove: (event) => {
      const value = getValueFromPointer(event.clientX);
      onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
    },
    onSlideEnd: () => {
      rectRef.current = void 0;
      onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
    },
    onStepKeyDown: (event) => {
      const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
      const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
      onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
        event,
        direction: isBackKey ? -1 : 1
      });
    }
  })));
});
var $faa2e61a3361514f$var$SliderVertical = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { min: min2, max: max2, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
  const sliderRef = (0, import_react45.useRef)(null);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, sliderRef);
  const rectRef = (0, import_react45.useRef)();
  const isSlidingFromBottom = !inverted;
  function getValueFromPointer(pointerPosition) {
    const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
    const input = [
      0,
      rect.height
    ];
    const output = isSlidingFromBottom ? [
      max2,
      min2
    ] : [
      min2,
      max2
    ];
    const value = $faa2e61a3361514f$var$linearScale(input, output);
    rectRef.current = rect;
    return value(pointerPosition - rect.top);
  }
  return (0, import_react45.createElement)($faa2e61a3361514f$var$SliderOrientationProvider, {
    scope: props.__scopeSlider,
    startEdge: isSlidingFromBottom ? "bottom" : "top",
    endEdge: isSlidingFromBottom ? "top" : "bottom",
    size: "height",
    direction: isSlidingFromBottom ? 1 : -1
  }, (0, import_react45.createElement)($faa2e61a3361514f$var$SliderImpl, _extends({
    "data-orientation": "vertical"
  }, sliderProps, {
    ref,
    style: {
      ...sliderProps.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
    },
    onSlideStart: (event) => {
      const value = getValueFromPointer(event.clientY);
      onSlideStart === null || onSlideStart === void 0 || onSlideStart(value);
    },
    onSlideMove: (event) => {
      const value = getValueFromPointer(event.clientY);
      onSlideMove === null || onSlideMove === void 0 || onSlideMove(value);
    },
    onSlideEnd: () => {
      rectRef.current = void 0;
      onSlideEnd === null || onSlideEnd === void 0 || onSlideEnd();
    },
    onStepKeyDown: (event) => {
      const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
      const isBackKey = $faa2e61a3361514f$var$BACK_KEYS[slideDirection].includes(event.key);
      onStepKeyDown === null || onStepKeyDown === void 0 || onStepKeyDown({
        event,
        direction: isBackKey ? -1 : 1
      });
    }
  })));
});
var $faa2e61a3361514f$var$SliderImpl = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$SLIDER_NAME, __scopeSlider);
  return (0, import_react45.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, sliderProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (event.key === "Home") {
        onHomeKeyDown(event);
        event.preventDefault();
      } else if (event.key === "End") {
        onEndKeyDown(event);
        event.preventDefault();
      } else if ($faa2e61a3361514f$var$PAGE_KEYS.concat($faa2e61a3361514f$var$ARROW_KEYS).includes(event.key)) {
        onStepKeyDown(event);
        event.preventDefault();
      }
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      const target = event.target;
      target.setPointerCapture(event.pointerId);
      event.preventDefault();
      if (context.thumbs.has(target))
        target.focus();
      else
        onSlideStart(event);
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        onSlideMove(event);
    }),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId)) {
        target.releasePointerCapture(event.pointerId);
        onSlideEnd(event);
      }
    })
  }));
});
var $faa2e61a3361514f$var$TRACK_NAME = "SliderTrack";
var $faa2e61a3361514f$export$105594979f116971 = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, ...trackProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$TRACK_NAME, __scopeSlider);
  return (0, import_react45.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-disabled": context.disabled ? "" : void 0,
    "data-orientation": context.orientation
  }, trackProps, {
    ref: forwardedRef
  }));
});
Object.assign($faa2e61a3361514f$export$105594979f116971, {
  displayName: $faa2e61a3361514f$var$TRACK_NAME
});
var $faa2e61a3361514f$var$RANGE_NAME = "SliderRange";
var $faa2e61a3361514f$export$a5cf38a7a000fe77 = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, ...rangeProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
  const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$RANGE_NAME, __scopeSlider);
  const ref = (0, import_react45.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const valuesCount = context.values.length;
  const percentages = context.values.map(
    (value) => $faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max)
  );
  const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
  const offsetEnd = 100 - Math.max(...percentages);
  return (0, import_react45.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-orientation": context.orientation,
    "data-disabled": context.disabled ? "" : void 0
  }, rangeProps, {
    ref: composedRefs,
    style: {
      ...props.style,
      [orientation.startEdge]: offsetStart + "%",
      [orientation.endEdge]: offsetEnd + "%"
    }
  }));
});
Object.assign($faa2e61a3361514f$export$a5cf38a7a000fe77, {
  displayName: $faa2e61a3361514f$var$RANGE_NAME
});
var $faa2e61a3361514f$var$THUMB_NAME = "SliderThumb";
var $faa2e61a3361514f$export$2c1b491743890dec = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const getItems = $faa2e61a3361514f$var$useCollection(props.__scopeSlider);
  const [thumb, setThumb] = (0, import_react45.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setThumb(node)
  );
  const index2 = (0, import_react45.useMemo)(
    () => thumb ? getItems().findIndex(
      (item) => item.ref.current === thumb
    ) : -1,
    [
      getItems,
      thumb
    ]
  );
  return (0, import_react45.createElement)($faa2e61a3361514f$var$SliderThumbImpl, _extends({}, props, {
    ref: composedRefs,
    index: index2
  }));
});
var $faa2e61a3361514f$var$SliderThumbImpl = (0, import_react45.forwardRef)((props, forwardedRef) => {
  const { __scopeSlider, index: index2, ...thumbProps } = props;
  const context = $faa2e61a3361514f$var$useSliderContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
  const orientation = $faa2e61a3361514f$var$useSliderOrientationContext($faa2e61a3361514f$var$THUMB_NAME, __scopeSlider);
  const [thumb, setThumb] = (0, import_react45.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setThumb(node)
  );
  const size3 = $db6c3485150b8e66$export$1ab7ae714698c4b8(thumb);
  const value = context.values[index2];
  const percent = value === void 0 ? 0 : $faa2e61a3361514f$var$convertValueToPercentage(value, context.min, context.max);
  const label = $faa2e61a3361514f$var$getLabel(index2, context.values.length);
  const orientationSize = size3 === null || size3 === void 0 ? void 0 : size3[orientation.size];
  const thumbInBoundsOffset = orientationSize ? $faa2e61a3361514f$var$getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
  (0, import_react45.useEffect)(() => {
    if (thumb) {
      context.thumbs.add(thumb);
      return () => {
        context.thumbs.delete(thumb);
      };
    }
  }, [
    thumb,
    context.thumbs
  ]);
  return (0, import_react45.createElement)("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
    }
  }, (0, import_react45.createElement)($faa2e61a3361514f$var$Collection.ItemSlot, {
    scope: props.__scopeSlider
  }, (0, import_react45.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    role: "slider",
    "aria-label": props["aria-label"] || label,
    "aria-valuemin": context.min,
    "aria-valuenow": value,
    "aria-valuemax": context.max,
    "aria-orientation": context.orientation,
    "data-orientation": context.orientation,
    "data-disabled": context.disabled ? "" : void 0,
    tabIndex: context.disabled ? void 0 : 0
  }, thumbProps, {
    ref: composedRefs,
    style: value === void 0 ? {
      display: "none"
    } : props.style,
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      context.valueIndexToChangeRef.current = index2;
    })
  }))));
});
Object.assign($faa2e61a3361514f$export$2c1b491743890dec, {
  displayName: $faa2e61a3361514f$var$THUMB_NAME
});
var $faa2e61a3361514f$var$BubbleInput = (props) => {
  const { value, ...inputProps } = props;
  const ref = (0, import_react45.useRef)(null);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  (0, import_react45.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("input", {
        bubbles: true
      });
      setValue.call(input, value);
      input.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return (0, import_react45.createElement)("input", _extends({
    style: {
      display: "none"
    }
  }, inputProps, {
    ref,
    defaultValue: value
  }));
};
function $faa2e61a3361514f$var$getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [
    ...prevValues
  ];
  nextValues[atIndex] = nextValue;
  return nextValues.sort(
    (a39, b8) => a39 - b8
  );
}
function $faa2e61a3361514f$var$convertValueToPercentage(value, min2, max2) {
  const maxSteps = max2 - min2;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min2);
  return $ae6933e535247d3d$export$7d15b64cf5a3a4c4(percentage, [
    0,
    100
  ]);
}
function $faa2e61a3361514f$var$getLabel(index2, totalValues) {
  if (totalValues > 2)
    return `Value ${index2 + 1} of ${totalValues}`;
  else if (totalValues === 2)
    return [
      "Minimum",
      "Maximum"
    ][index2];
  else
    return void 0;
}
function $faa2e61a3361514f$var$getClosestValueIndex(values, nextValue) {
  if (values.length === 1)
    return 0;
  const distances = values.map(
    (value) => Math.abs(value - nextValue)
  );
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function $faa2e61a3361514f$var$getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset3 = $faa2e61a3361514f$var$linearScale([
    0,
    halfPercent
  ], [
    0,
    halfWidth
  ]);
  return (halfWidth - offset3(left) * direction) * direction;
}
function $faa2e61a3361514f$var$getStepsBetweenValues(values) {
  return values.slice(0, -1).map(
    (value, index2) => values[index2 + 1] - value
  );
}
function $faa2e61a3361514f$var$hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = $faa2e61a3361514f$var$getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function $faa2e61a3361514f$var$linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1])
      return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function $faa2e61a3361514f$var$getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function $faa2e61a3361514f$var$roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var $faa2e61a3361514f$export$be92b6f5f03c0fe9 = $faa2e61a3361514f$export$472062a354075cee;
var $faa2e61a3361514f$export$13921ac0cc260818 = $faa2e61a3361514f$export$105594979f116971;
var $faa2e61a3361514f$export$9a58ef0d7ad3278c = $faa2e61a3361514f$export$a5cf38a7a000fe77;
var $faa2e61a3361514f$export$6521433ed15a34db = $faa2e61a3361514f$export$2c1b491743890dec;

// node_modules/@radix-ui/themes/dist/esm/components/slider.props.js
var o52 = ["1", "2", "3"];
var t27 = ["classic", "surface", "soft"];
var a33 = { size: { type: "enum", className: "rt-r-size", values: o52, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t27, default: "surface" }, ...r2, ...o3, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/slider.js
var p35 = e35.forwardRef((i22, a39) => {
  const { className: d10, color: l11, radius: m20, tabIndex: t36, ...r43 } = v(i22, a33, r5);
  return e35.createElement($faa2e61a3361514f$export$be92b6f5f03c0fe9, { "data-accent-color": l11, "data-radius": m20, ref: a39, ...r43, asChild: false, className: (0, import_classnames46.default)("rt-SliderRoot", d10) }, e35.createElement($faa2e61a3361514f$export$13921ac0cc260818, { className: "rt-SliderTrack" }, e35.createElement($faa2e61a3361514f$export$9a58ef0d7ad3278c, { className: (0, import_classnames46.default)("rt-SliderRange", { "rt-high-contrast": i22.highContrast }), "data-inverted": r43.inverted ? "" : void 0 })), (r43.value ?? r43.defaultValue ?? []).map((S6, n24) => e35.createElement($faa2e61a3361514f$export$6521433ed15a34db, { key: n24, className: "rt-SliderThumb", ...t36 !== void 0 ? { tabIndex: t36 } : void 0 })));
});
p35.displayName = "Slider";

// node_modules/@radix-ui/themes/dist/esm/components/strong.js
var o53 = __toESM(require_react(), 1);
var import_classnames47 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/strong.props.js
var p36 = { ...o, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/strong.js
var r36 = o53.forwardRef((t36, e42) => {
  const { asChild: p39, className: s23, ...n24 } = v(t36, p36);
  return o53.createElement(p39 ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "strong", { ...n24, ref: e42, className: (0, import_classnames47.default)("rt-Strong", s23) });
});
r36.displayName = "Strong";

// node_modules/@radix-ui/themes/dist/esm/components/switch.js
var t29 = __toESM(require_react(), 1);
var import_classnames48 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-switch/dist/index.mjs
var import_react46 = __toESM(require_react(), 1);
var $6be4966fd9bbc698$var$SWITCH_NAME = "Switch";
var [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6be4966fd9bbc698$var$SWITCH_NAME);
var [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
var $6be4966fd9bbc698$export$b5d5cf8927ab7262 = (0, import_react46.forwardRef)((props, forwardedRef) => {
  const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, ...switchProps } = props;
  const [button, setButton] = (0, import_react46.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react46.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange
  });
  return (0, import_react46.createElement)($6be4966fd9bbc698$var$SwitchProvider, {
    scope: __scopeSwitch,
    checked,
    disabled
  }, (0, import_react46.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-required": required,
    "data-state": $6be4966fd9bbc698$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, switchProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      setChecked(
        (prevChecked) => !prevChecked
      );
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && (0, import_react46.createElement)($6be4966fd9bbc698$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
Object.assign($6be4966fd9bbc698$export$b5d5cf8927ab7262, {
  displayName: $6be4966fd9bbc698$var$SWITCH_NAME
});
var $6be4966fd9bbc698$var$THUMB_NAME = "SwitchThumb";
var $6be4966fd9bbc698$export$4d07bf653ea69106 = (0, import_react46.forwardRef)((props, forwardedRef) => {
  const { __scopeSwitch, ...thumbProps } = props;
  const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
  return (0, import_react46.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $6be4966fd9bbc698$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, thumbProps, {
    ref: forwardedRef
  }));
});
Object.assign($6be4966fd9bbc698$export$4d07bf653ea69106, {
  displayName: $6be4966fd9bbc698$var$THUMB_NAME
});
var $6be4966fd9bbc698$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react46.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react46.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return (0, import_react46.createElement)("input", _extends({
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $6be4966fd9bbc698$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
var $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;

// node_modules/@radix-ui/themes/dist/esm/components/switch.props.js
var o54 = ["1", "2", "3"];
var t28 = ["classic", "surface", "soft"];
var a34 = { size: { type: "enum", className: "rt-r-size", values: o54, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t28, default: "surface" }, ...r2, ...o3, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/switch.js
var i18 = t29.forwardRef((o60, p39) => {
  const { className: s23, color: m20, radius: c5, ...a39 } = v(o60, a34, r5);
  return t29.createElement($6be4966fd9bbc698$export$be92b6f5f03c0fe9, { "data-accent-color": m20, "data-radius": c5, ...a39, asChild: false, ref: p39, className: (0, import_classnames48.default)("rt-reset", "rt-SwitchRoot", s23) }, t29.createElement($6be4966fd9bbc698$export$6521433ed15a34db, { className: (0, import_classnames48.default)("rt-SwitchThumb", { "rt-high-contrast": o60.highContrast }) }));
});
i18.displayName = "Switch";

// node_modules/@radix-ui/themes/dist/esm/components/tab-nav.js
var tab_nav_exports = {};
__export(tab_nav_exports, {
  Link: () => v7,
  Root: () => N6
});
var o56 = __toESM(require_react(), 1);
var import_classnames49 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react47 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react47.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react47.useRef)(0);
  const closeTimerRef = (0, import_react47.useRef)(0);
  const skipDelayTimerRef = (0, import_react47.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react47.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react47.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react47.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react47.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react47.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
Object.assign($322c88a641701f3b$export$5b2278cf1e8bcae2, {
  displayName: $322c88a641701f3b$var$NAVIGATION_MENU_NAME
});
var $322c88a641701f3b$var$SUB_NAME = "NavigationMenuSub";
var $322c88a641701f3b$export$5958edd6c4ee7c79 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", ...subProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$SUB_NAME, __scopeNavigationMenu);
  const [value = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue
  });
  return (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: false,
    value,
    dir: context.dir,
    orientation,
    rootNavigationMenu: context.rootNavigationMenu,
    onTriggerEnter: (itemValue) => setValue(itemValue),
    onItemSelect: (itemValue) => setValue(itemValue),
    onItemDismiss: () => setValue("")
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, subProps, {
    ref: forwardedRef
  })));
});
Object.assign($322c88a641701f3b$export$5958edd6c4ee7c79, {
  displayName: $322c88a641701f3b$var$SUB_NAME
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react47.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react47.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react47.useState)(null);
  return (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react47.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react47.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, (0, import_react47.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, (0, import_react47.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, (0, import_react47.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
Object.assign($322c88a641701f3b$export$c361068a95fd2286, {
  displayName: $322c88a641701f3b$var$LIST_NAME
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$export$ffdbb83a2de845c2 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = $1746a345f3d73bb7$export$f680877a34711e37();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = (0, import_react47.useRef)(null);
  const triggerRef = (0, import_react47.useRef)(null);
  const focusProxyRef = (0, import_react47.useRef)(null);
  const restoreContentTabOrderRef = (0, import_react47.useRef)(() => {
  });
  const wasEscapeCloseRef = (0, import_react47.useRef)(false);
  const handleContentEntry = (0, import_react47.useCallback)((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        $322c88a641701f3b$var$focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = (0, import_react47.useCallback)(() => {
    if (contentRef.current) {
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
    }
  }, []);
  return (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({}, itemProps, {
    ref: forwardedRef
  })));
});
Object.assign($322c88a641701f3b$export$ffdbb83a2de845c2, {
  displayName: $322c88a641701f3b$var$ITEM_NAME
});
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react47.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react47.useRef)(false);
  const wasClickCloseRef = (0, import_react47.useRef)(false);
  const open = itemContext.value === context.value;
  return (0, import_react47.createElement)(import_react47.Fragment, null, (0, import_react47.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && (0, import_react47.createElement)(import_react47.Fragment, null, (0, import_react47.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && (0, import_react47.createElement)("span", {
    "aria-owns": contentId
  })));
});
Object.assign($322c88a641701f3b$export$37fe8002734d8f2, {
  displayName: $322c88a641701f3b$var$TRIGGER_NAME
});
var $322c88a641701f3b$var$LINK_NAME = "NavigationMenuLink";
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
Object.assign($322c88a641701f3b$export$6893bf21536567da, {
  displayName: $322c88a641701f3b$var$LINK_NAME
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? import_react_dom6.default.createPortal((0, import_react47.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
Object.assign($322c88a641701f3b$export$8ddb526647c0d8fb, {
  displayName: $322c88a641701f3b$var$INDICATOR_NAME
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react47.useState)(null);
  const [position, setPosition] = (0, import_react47.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react47.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? (0, import_react47.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : (0, import_react47.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
Object.assign($322c88a641701f3b$export$38e00e996c2f93f7, {
  displayName: $322c88a641701f3b$var$CONTENT_NAME
});
var $322c88a641701f3b$var$ViewportContentMounter = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react47.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react47.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react47.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react47.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index2 = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index2 !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index2 > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index2 !== -1)
          return index2 > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, (0, import_react47.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index2 = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index2).reverse() : candidates.slice(index2 + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return (0, import_react47.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends({}, viewportProps, {
    ref: forwardedRef
  })));
});
Object.assign($322c88a641701f3b$export$ee880b97cc6d44a5, {
  displayName: $322c88a641701f3b$var$VIEWPORT_NAME
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = (0, import_react47.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size3, setSize] = (0, import_react47.useState)(null);
  const [content, setContent] = (0, import_react47.useState)(null);
  const viewportWidth = size3 ? (size3 === null || size3 === void 0 ? void 0 : size3.width) + "px" : void 0;
  const viewportHeight = size3 ? (size3 === null || size3 === void 0 ? void 0 : size3.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return (0, import_react47.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, (0, import_react47.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = (0, import_react47.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return (0, import_react47.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, (0, import_react47.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;

// node_modules/@radix-ui/themes/dist/esm/components/base-tab-list.props.js
var r38 = ["1", "2"];
var t30 = ["nowrap", "wrap", "wrap-reverse"];
var o55 = ["start", "center", "end"];
var p37 = { size: { type: "enum", className: "rt-r-size", values: r38, default: "2", responsive: true }, wrap: { type: "enum", className: "rt-r-fw", values: t30, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: o55, responsive: true }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/tab-nav.props.js
var e36 = { ...o, active: { type: "boolean", default: false } };

// node_modules/@radix-ui/themes/dist/esm/components/tab-nav.js
var N6 = o56.forwardRef((t36, r43) => {
  const { children: a39, className: s23, color: n24, ...p39 } = v(t36, p37, r5);
  return o56.createElement($322c88a641701f3b$export$be92b6f5f03c0fe9, { className: "rt-TabNavRoot", "data-accent-color": n24, ...p39, asChild: false, ref: r43 }, o56.createElement($322c88a641701f3b$export$54c2e3dc7acea9f5, { className: (0, import_classnames49.default)("rt-reset", "rt-BaseTabList", "rt-TabNavList", s23) }, a39));
});
N6.displayName = "TabNav.Root";
var v7 = o56.forwardRef((t36, r43) => {
  const { asChild: a39, children: s23, className: n24, ...p39 } = t36;
  return o56.createElement($322c88a641701f3b$export$6d08773d2e66f8f2, { className: "rt-TabNavItem" }, o56.createElement($322c88a641701f3b$export$a6c7ac8248d6e38a, { ...p39, ref: r43, className: (0, import_classnames49.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabNavLink", n24), onSelect: () => {
  }, asChild: a39 }, d3({ asChild: a39, children: s23 }, (i22) => o56.createElement(o56.Fragment, null, o56.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabNavLinkInner" }, i22), o56.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabNavLinkInnerHidden" }, i22)))));
});
v7.displayName = "TabNav.Link";

// node_modules/@radix-ui/themes/dist/esm/components/table.js
var table_exports = {};
__export(table_exports, {
  Body: () => b6,
  Cell: () => T5,
  ColumnHeaderCell: () => f18,
  Header: () => d8,
  Root: () => m17,
  Row: () => P4,
  RowHeaderCell: () => R5
});
var e37 = __toESM(require_react(), 1);
var import_classnames50 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/table.props.js
var r39 = ["1", "2", "3"];
var a35 = ["surface", "ghost"];
var o57 = ["auto", "fixed"];
var n23 = { size: { type: "enum", className: "rt-r-size", values: r39, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a35, default: "ghost" }, layout: { type: "enum", className: "rt-r-tl", values: o57, responsive: true } };
var i19 = ["start", "center", "end", "baseline"];
var u8 = { align: { type: "enum", className: "rt-r-va", values: i19, parseValue: l10, responsive: true } };
function l10(e42) {
  return { baseline: "baseline", start: "top", center: "middle", end: "bottom" }[e42];
}
var p38 = ["start", "center", "end"];
var f17 = { justify: { type: "enum", className: "rt-r-ta", values: p38, parseValue: c3, responsive: true }, ...t, ...p7 };
function c3(e42) {
  return { start: "left", center: "center", end: "right" }[e42];
}

// node_modules/@radix-ui/themes/dist/esm/components/table.js
var m17 = e37.forwardRef((o60, l11) => {
  const { layout: a39, ...r43 } = n23, { className: C6, children: c5, layout: y7, ...i22 } = v(o60, r43, r5), w3 = g({ value: y7, className: n23.layout.className, propValues: n23.layout.values });
  return e37.createElement("div", { ref: l11, className: (0, import_classnames50.default)("rt-TableRoot", C6), ...i22 }, e37.createElement(c2, null, e37.createElement("table", { className: (0, import_classnames50.default)("rt-TableRootTable", w3) }, c5)));
});
m17.displayName = "Table.Root";
var d8 = e37.forwardRef(({ className: o60, ...l11 }, a39) => e37.createElement("thead", { ...l11, ref: a39, className: (0, import_classnames50.default)("rt-TableHeader", o60) }));
d8.displayName = "Table.Header";
var b6 = e37.forwardRef(({ className: o60, ...l11 }, a39) => e37.createElement("tbody", { ...l11, ref: a39, className: (0, import_classnames50.default)("rt-TableBody", o60) }));
b6.displayName = "Table.Body";
var P4 = e37.forwardRef((o60, l11) => {
  const { className: a39, ...r43 } = v(o60, u8);
  return e37.createElement("tr", { ...r43, ref: l11, className: (0, import_classnames50.default)("rt-TableRow", a39) });
});
P4.displayName = "Table.Row";
var T5 = e37.forwardRef((o60, l11) => {
  const { className: a39, ...r43 } = v(o60, f17);
  return e37.createElement("td", { className: (0, import_classnames50.default)("rt-TableCell", a39), ref: l11, ...r43 });
});
T5.displayName = "Table.Cell";
var f18 = e37.forwardRef((o60, l11) => {
  const { className: a39, ...r43 } = v(o60, f17);
  return e37.createElement("th", { className: (0, import_classnames50.default)("rt-TableCell", "rt-TableColumnHeaderCell", a39), scope: "col", ref: l11, ...r43 });
});
f18.displayName = "Table.ColumnHeaderCell";
var R5 = e37.forwardRef((o60, l11) => {
  const { className: a39, ...r43 } = v(o60, f17);
  return e37.createElement("th", { className: (0, import_classnames50.default)("rt-TableCell", "rt-TableRowHeaderCell", a39), scope: "row", ref: l11, ...r43 });
});
R5.displayName = "Table.RowHeaderCell";

// node_modules/@radix-ui/themes/dist/esm/components/tabs.js
var tabs_exports = {};
__export(tabs_exports, {
  Content: () => f19,
  List: () => P5,
  Root: () => m18,
  Trigger: () => b7
});
var s22 = __toESM(require_react(), 1);
var import_classnames51 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var import_react48 = __toESM(require_react(), 1);
var $69cb30bb0017df05$var$TABS_NAME = "Tabs";
var [$69cb30bb0017df05$var$createTabsContext, $69cb30bb0017df05$export$355f5bd209d7b13a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($69cb30bb0017df05$var$TABS_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $69cb30bb0017df05$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$69cb30bb0017df05$var$TabsProvider, $69cb30bb0017df05$var$useTabsContext] = $69cb30bb0017df05$var$createTabsContext($69cb30bb0017df05$var$TABS_NAME);
var $69cb30bb0017df05$export$b2539bed5023c21c = (0, import_react48.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue
  });
  return (0, import_react48.createElement)($69cb30bb0017df05$var$TabsProvider, {
    scope: __scopeTabs,
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    orientation,
    dir: direction,
    activationMode
  }, (0, import_react48.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction,
    "data-orientation": orientation
  }, tabsProps, {
    ref: forwardedRef
  })));
});
Object.assign($69cb30bb0017df05$export$b2539bed5023c21c, {
  displayName: $69cb30bb0017df05$var$TABS_NAME
});
var $69cb30bb0017df05$var$TAB_LIST_NAME = "TabsList";
var $69cb30bb0017df05$export$9712d22edc0d78c1 = (0, import_react48.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, loop = true, ...listProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TAB_LIST_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  return (0, import_react48.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation: context.orientation,
    dir: context.dir,
    loop
  }), (0, import_react48.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "tablist",
    "aria-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  })));
});
Object.assign($69cb30bb0017df05$export$9712d22edc0d78c1, {
  displayName: $69cb30bb0017df05$var$TAB_LIST_NAME
});
var $69cb30bb0017df05$var$TRIGGER_NAME = "TabsTrigger";
var $69cb30bb0017df05$export$8114b9fdfdf9f3ba = (0, import_react48.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TRIGGER_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  return (0, import_react48.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled,
    active: isSelected
  }), (0, import_react48.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": contentId,
    "data-state": isSelected ? "active" : "inactive",
    "data-disabled": disabled ? "" : void 0,
    disabled,
    id: triggerId
  }, triggerProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false)
        context.onValueChange(value);
      else
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if ([
        " ",
        "Enter"
      ].includes(event.key))
        context.onValueChange(value);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      const isAutomaticActivation = context.activationMode !== "manual";
      if (!isSelected && !disabled && isAutomaticActivation)
        context.onValueChange(value);
    })
  })));
});
Object.assign($69cb30bb0017df05$export$8114b9fdfdf9f3ba, {
  displayName: $69cb30bb0017df05$var$TRIGGER_NAME
});
var $69cb30bb0017df05$var$CONTENT_NAME = "TabsContent";
var $69cb30bb0017df05$export$bd905d70e8fd2ebb = (0, import_react48.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$CONTENT_NAME, __scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  const isMountAnimationPreventedRef = (0, import_react48.useRef)(isSelected);
  (0, import_react48.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  return (0, import_react48.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || isSelected
    },
    ({ present }) => (0, import_react48.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": isSelected ? "active" : "inactive",
      "data-orientation": context.orientation,
      role: "tabpanel",
      "aria-labelledby": triggerId,
      hidden: !present,
      id: contentId,
      tabIndex: 0
    }, contentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
      }
    }), present && children)
  );
});
Object.assign($69cb30bb0017df05$export$bd905d70e8fd2ebb, {
  displayName: $69cb30bb0017df05$var$CONTENT_NAME
});
function $69cb30bb0017df05$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $69cb30bb0017df05$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var $69cb30bb0017df05$export$be92b6f5f03c0fe9 = $69cb30bb0017df05$export$b2539bed5023c21c;
var $69cb30bb0017df05$export$54c2e3dc7acea9f5 = $69cb30bb0017df05$export$9712d22edc0d78c1;
var $69cb30bb0017df05$export$41fb9f06171c75f4 = $69cb30bb0017df05$export$8114b9fdfdf9f3ba;
var $69cb30bb0017df05$export$7c6e2c02157bb7d2 = $69cb30bb0017df05$export$bd905d70e8fd2ebb;

// node_modules/@radix-ui/themes/dist/esm/components/tabs.props.js
var s21 = { ...o };
var t32 = { ...o };

// node_modules/@radix-ui/themes/dist/esm/components/tabs.js
var m18 = s22.forwardRef((t36, o60) => {
  const { className: r43, ...e42 } = v(t36, r5);
  return s22.createElement($69cb30bb0017df05$export$be92b6f5f03c0fe9, { ...e42, ref: o60, className: (0, import_classnames51.default)("rt-TabsRoot", r43) });
});
m18.displayName = "Tabs.Root";
var P5 = s22.forwardRef((t36, o60) => {
  const { className: r43, color: e42, ...n24 } = v(t36, p37, r5);
  return s22.createElement($69cb30bb0017df05$export$54c2e3dc7acea9f5, { "data-accent-color": e42, ...n24, asChild: false, ref: o60, className: (0, import_classnames51.default)("rt-BaseTabList", "rt-TabsList", r43) });
});
P5.displayName = "Tabs.List";
var b7 = s22.forwardRef((t36, o60) => {
  const { className: r43, children: e42, ...n24 } = t36;
  return s22.createElement($69cb30bb0017df05$export$41fb9f06171c75f4, { ...n24, asChild: false, ref: o60, className: (0, import_classnames51.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabsTrigger", r43) }, s22.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabsTriggerInner" }, e42), s22.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden" }, e42));
});
b7.displayName = "Tabs.Trigger";
var f19 = s22.forwardRef((t36, o60) => {
  const { className: r43, ...e42 } = v(t36, r5);
  return s22.createElement($69cb30bb0017df05$export$7c6e2c02157bb7d2, { ...e42, ref: o60, className: (0, import_classnames51.default)("rt-TabsContent", r43) });
});
f19.displayName = "Tabs.Content";

// node_modules/@radix-ui/themes/dist/esm/components/text-area.js
var e38 = __toESM(require_react(), 1);
var import_classnames52 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/text-area.props.js
var r40 = ["1", "2", "3"];
var t33 = ["classic", "surface", "soft"];
var o58 = ["none", "vertical", "horizontal", "both"];
var a37 = { size: { type: "enum", className: "rt-r-size", values: r40, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t33, default: "surface" }, resize: { type: "enum", className: "rt-r-resize", values: o58, responsive: true }, ...r2, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/text-area.js
var r41 = e38.forwardRef((t36, o60) => {
  const { className: p39, color: a39, radius: s23, style: m20, ...n24 } = v(t36, a37, r5);
  return e38.createElement("div", { "data-accent-color": a39, "data-radius": s23, className: (0, import_classnames52.default)("rt-TextAreaRoot", p39), style: m20 }, e38.createElement("textarea", { className: "rt-reset rt-TextAreaInput", ref: o60, ...n24 }));
});
r41.displayName = "TextArea";

// node_modules/@radix-ui/themes/dist/esm/components/text-field.js
var text_field_exports = {};
__export(text_field_exports, {
  Root: () => u9,
  Slot: () => c4
});
var t35 = __toESM(require_react(), 1);
var import_classnames53 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/text-field.props.js
var r42 = ["1", "2", "3"];
var t34 = ["classic", "surface", "soft"];
var f20 = { size: { type: "enum", className: "rt-r-size", values: r42, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t34, default: "surface" }, ...r2, ...r7 };
var a38 = ["left", "right"];
var i21 = { side: { type: "enum", values: a38 }, ...r2, gap: u2.gap, px: p7.px, pl: p7.pl, pr: p7.pr };

// node_modules/@radix-ui/themes/dist/esm/components/text-field.js
var u9 = t35.forwardRef((r43, s23) => {
  const e42 = t35.useRef(null), { children: l11, className: i22, color: p39, radius: f21, style: x5, ...P6 } = v(r43, f20, r5);
  return t35.createElement("div", { "data-accent-color": p39, "data-radius": f21, style: x5, className: (0, import_classnames53.default)("rt-TextFieldRoot", i22), onPointerDown: (T6) => {
    const n24 = T6.target;
    if (n24.closest("input, button, a"))
      return;
    const o60 = e42.current;
    if (!o60)
      return;
    const a39 = n24.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `) ? o60.value.length : 0;
    requestAnimationFrame(() => {
      try {
        o60.setSelectionRange(a39, a39);
      } catch {
      }
      o60.focus();
    });
  } }, t35.createElement("input", { spellCheck: "false", ...P6, ref: $6ed0406888f73fc4$export$43e446d32b3d21af(e42, s23), className: "rt-reset rt-TextFieldInput" }), l11);
});
u9.displayName = "TextField.Root";
var c4 = t35.forwardRef((r43, s23) => {
  const { className: e42, color: l11, side: i22, ...p39 } = v(r43, i21);
  return t35.createElement("div", { "data-accent-color": l11, "data-side": i22, ...p39, ref: s23, className: (0, import_classnames53.default)("rt-TextFieldSlot", e42) });
});
c4.displayName = "TextField.Slot";

// node_modules/@radix-ui/themes/dist/esm/components/theme-panel.js
var e39 = __toESM(require_react(), 1);
var N7 = e39.forwardRef(({ defaultOpen: n24 = true, ...a39 }, l11) => {
  const [c5, h4] = e39.useState(n24);
  return e39.createElement(z, { ...a39, ref: l11, open: c5, onOpenChange: h4 });
});
N7.displayName = "ThemePanel";
var z = e39.forwardRef((n24, a39) => {
  const { open: l11, onOpenChange: c5, onAppearanceChange: h4, ...v8 } = n24, G5 = H(), { appearance: d10, onAppearanceChange: B4, accentColor: g7, onAccentColorChange: $, grayColor: f21, onGrayColorChange: F, panelBackground: T6, onPanelBackgroundChange: O2, radius: w3, onRadiusChange: D3, scaling: x5, onScalingChange: j2 } = G5, E7 = h4 !== void 0, K2 = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(h4), k4 = e39.useCallback((t36) => {
    const o60 = n92();
    if (d10 !== "inherit") {
      B4(t36);
      return;
    }
    E7 ? K2(t36) : (H3(t36), a92(t36)), o60();
  }, [d10, B4, E7, K2]), P6 = a3(g7), S6 = f21 === "auto" ? P6 : f21, [W2, M] = e39.useState("idle");
  async function U() {
    const t36 = { appearance: d10 === s3.appearance.default ? void 0 : d10, accentColor: g7 === s3.accentColor.default ? void 0 : g7, grayColor: f21 === s3.grayColor.default ? void 0 : f21, panelBackground: T6 === s3.panelBackground.default ? void 0 : T6, radius: w3 === s3.radius.default ? void 0 : w3, scaling: x5 === s3.scaling.default ? void 0 : x5 }, o60 = Object.keys(t36).filter((i22) => t36[i22] !== void 0).map((i22) => `${i22}="${t36[i22]}"`).join(" "), C6 = o60 ? `<Theme ${o60}>` : "<Theme>";
    M("copying"), await navigator.clipboard.writeText(C6), M("copied"), setTimeout(() => M("idle"), 2e3);
  }
  const [Z, H3] = e39.useState(d10 === "inherit" ? null : d10), b8 = `
      [contenteditable],
      [role="combobox"],
      [role="listbox"],
      [role="menu"],
      input:not([type="radio"], [type="checkbox"]),
      select,
      textarea
    `;
  return e39.useEffect(() => {
    function t36(o60) {
      var _a, _b;
      const C6 = o60.altKey || o60.ctrlKey || o60.shiftKey || o60.metaKey, i22 = (_a = document.activeElement) == null ? void 0 : _a.closest(b8);
      ((_b = o60.key) == null ? void 0 : _b.toUpperCase()) === "T" && !C6 && !i22 && c5(!l11);
    }
    return document.addEventListener("keydown", t36), () => document.removeEventListener("keydown", t36);
  }, [c5, l11, b8]), e39.useEffect(() => {
    function t36(o60) {
      var _a, _b;
      const C6 = o60.altKey || o60.ctrlKey || o60.shiftKey || o60.metaKey, i22 = (_a = document.activeElement) == null ? void 0 : _a.closest(b8);
      ((_b = o60.key) == null ? void 0 : _b.toUpperCase()) === "D" && !C6 && !i22 && k4(Z === "light" ? "dark" : "light");
    }
    return document.addEventListener("keydown", t36), () => document.removeEventListener("keydown", t36);
  }, [k4, Z, b8]), e39.useEffect(() => {
    const t36 = document.documentElement, o60 = document.body;
    function C6() {
      const y7 = t36.classList.contains("dark") || t36.classList.contains("dark-theme") || o60.classList.contains("dark") || o60.classList.contains("dark-theme");
      H3(d10 === "inherit" ? y7 ? "dark" : "light" : d10);
    }
    const i22 = new MutationObserver(function(y7) {
      y7.forEach(function(X2) {
        X2.attributeName === "class" && C6();
      });
    });
    return C6(), d10 === "inherit" && (i22.observe(t36, { attributes: true }), i22.observe(o60, { attributes: true })), () => i22.disconnect();
  }, [d10]), e39.createElement(I, { asChild: true, radius: "medium", scaling: "100%" }, e39.createElement(p12, { direction: "column", position: "fixed", top: "0", right: "0", mr: "4", mt: "4", inert: l11 ? void 0 : "", ...v8, ref: a39, style: { zIndex: 9999, overflow: "hidden", maxHeight: "calc(100vh - var(--space-4) - var(--space-4))", borderRadius: "var(--radius-4)", backgroundColor: "var(--color-panel-solid)", transformOrigin: "top center", transitionProperty: "transform, box-shadow", transitionDuration: "200ms", transitionTimingFunction: l11 ? "ease-out" : "ease-in", transform: l11 ? "none" : "translateX(105%)", boxShadow: l11 ? "var(--shadow-5)" : "var(--shadow-2)", ...n24.style } }, e39.createElement(c2, null, e39.createElement(p9, { flexGrow: "1", p: "5", position: "relative" }, e39.createElement(p9, { position: "absolute", top: "0", right: "0", m: "2" }, e39.createElement(e40, { content: "Press T to show/hide the Theme Panel", side: "bottom", sideOffset: 6 }, e39.createElement(r27, { asChild: true, size: "3", tabIndex: 0, className: "rt-ThemePanelShortcut" }, e39.createElement("button", { onClick: () => c5(!l11) }, "T")))), e39.createElement(r6, { size: "5", trim: "both", as: "h3", mb: "5" }, "Theme"), e39.createElement(p, { id: "accent-color-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Accent color"), e39.createElement(o21, { columns: "10", gap: "2", mt: "3", role: "group", "aria-labelledby": "accent-color-title" }, s3.accentColor.values.map((t36) => e39.createElement("label", { key: t36, className: "rt-ThemePanelSwatch", style: { backgroundColor: `var(--${t36}-9)` } }, e39.createElement(e40, { content: `${m19(t36)}${g7 === "gray" && S6 !== "gray" ? ` (${m19(S6)})` : ""}` }, e39.createElement("input", { className: "rt-ThemePanelSwatchInput", type: "radio", name: "accentColor", value: t36, checked: g7 === t36, onChange: (o60) => $(o60.target.value) }))))), e39.createElement(p12, { asChild: true, align: "center", justify: "between" }, e39.createElement(p, { as: "p", id: "gray-color-title", size: "2", weight: "medium", mt: "5" }, "Gray color")), e39.createElement(o21, { columns: "10", gap: "2", mt: "3", role: "group", "aria-labelledby": "gray-color-title" }, s3.grayColor.values.map((t36) => e39.createElement(p12, { key: t36, asChild: true, align: "center", justify: "center" }, e39.createElement("label", { className: "rt-ThemePanelSwatch", style: { backgroundColor: t36 === "auto" ? `var(--${P6}-9)` : t36 === "gray" ? "var(--gray-9)" : `var(--${t36}-9)`, filter: t36 === "gray" ? "saturate(0)" : void 0 } }, e39.createElement(e40, { content: `${m19(t36)}${t36 === "auto" ? ` (${m19(P6)})` : ""}` }, e39.createElement("input", { className: "rt-ThemePanelSwatchInput", type: "radio", name: "grayColor", value: t36, checked: f21 === t36, onChange: (o60) => F(o60.target.value) })))))), e39.createElement(p, { id: "appearance-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Appearance"), e39.createElement(o21, { columns: "2", gap: "2", mt: "3", role: "group", "aria-labelledby": "appearance-title" }, ["light", "dark"].map((t36) => e39.createElement("label", { key: t36, className: "rt-ThemePanelRadioCard" }, e39.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "appearance", value: t36, checked: Z === t36, onChange: (o60) => k4(o60.target.value) }), e39.createElement(p12, { align: "center", justify: "center", height: "32px", gap: "2" }, t36 === "light" ? e39.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -1px" } }, e39.createElement("path", { d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })) : e39.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -1px" } }, e39.createElement("path", { d: "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })), e39.createElement(p, { size: "1", weight: "medium" }, m19(t36)))))), e39.createElement(p, { id: "radius-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Radius"), e39.createElement(o21, { columns: "5", gap: "2", mt: "3", role: "group", "aria-labelledby": "radius-title" }, s3.radius.values.map((t36) => e39.createElement(p12, { key: t36, direction: "column", align: "center" }, e39.createElement("label", { className: "rt-ThemePanelRadioCard" }, e39.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "radius", id: `theme-panel-radius-${t36}`, value: t36, checked: w3 === t36, onChange: (o60) => D3(o60.target.value) }), e39.createElement(I, { asChild: true, radius: t36 }, e39.createElement(p9, { m: "3", width: "32px", height: "32px", style: { borderTopLeftRadius: t36 === "full" ? "80%" : "var(--radius-5)", backgroundImage: "linear-gradient(to bottom right, var(--accent-3), var(--accent-4))", borderTop: "2px solid var(--accent-a8)", borderLeft: "2px solid var(--accent-a8)" } }))), e39.createElement(p9, { asChild: true, pt: "2" }, e39.createElement(p, { asChild: true, size: "1", color: "gray" }, e39.createElement("label", { htmlFor: `theme-panel-radius-${t36}` }, m19(t36))))))), e39.createElement(p, { id: "scaling-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Scaling"), e39.createElement(o21, { columns: "5", gap: "2", mt: "3", role: "group", "aria-labelledby": "scaling-title" }, s3.scaling.values.map((t36) => e39.createElement("label", { key: t36, className: "rt-ThemePanelRadioCard" }, e39.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "scaling", value: t36, checked: x5 === t36, onChange: (o60) => j2(o60.target.value) }), e39.createElement(p12, { align: "center", justify: "center", height: "32px" }, e39.createElement(I, { asChild: true, scaling: t36 }, e39.createElement(p12, { align: "center", justify: "center" }, e39.createElement(p, { size: "1", weight: "medium" }, m19(t36)))))))), e39.createElement(p12, { mt: "5", align: "center", gap: "2" }, e39.createElement(p, { id: "panel-background-title", as: "p", size: "2", weight: "medium" }, "Panel background"), e39.createElement(popover_exports.Root, null, e39.createElement(popover_exports.Trigger, null, e39.createElement(o32, { size: "1", variant: "ghost", color: "gray" }, e39.createElement($08b6689415b2f49a$export$5aec92af04ace2d2, { label: "Learn more about panel background options" }, e39.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, e39.createElement("path", { d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z", fillRule: "evenodd", clipRule: "evenodd" }))))), e39.createElement(popover_exports.Content, { size: "1", style: { maxWidth: 220 }, side: "top", align: "center" }, e39.createElement(p, { as: "p", size: "2" }, "Whether Card and Table panels are translucent, showing some of the background behind them.")))), e39.createElement(o21, { columns: "2", gap: "2", mt: "3", role: "group", "aria-labelledby": "panel-background-title" }, s3.panelBackground.values.map((t36) => e39.createElement("label", { key: t36, className: "rt-ThemePanelRadioCard" }, e39.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "panelBackground", value: t36, checked: T6 === t36, onChange: (o60) => O2(o60.target.value) }), e39.createElement(p12, { align: "center", justify: "center", height: "32px", gap: "2" }, t36 === "solid" ? e39.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -2px" } }, e39.createElement("path", { d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })) : e39.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -2px" } }, e39.createElement("path", { opacity: ".05", d: "M6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".1", d: "M7.28204 13.4775C9.23929 9.99523 9.23929 5.00475 7.28204 1.52248L7.71791 1.2775C9.76067 4.9119 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".15", d: "M7.82098 13.5064C9.72502 9.99523 9.72636 5.01411 7.82492 1.50084L8.26465 1.26285C10.2465 4.92466 10.2451 10.085 8.26052 13.7448L7.82098 13.5064Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".2", d: "M8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".25", d: "M9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".3", d: "M9.66809 13.0655C11.1097 9.69572 11.1107 5.3121 9.67088 1.94095L10.1307 1.74457C11.6241 5.24121 11.6231 9.76683 10.1278 13.2622L9.66809 13.0655Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".35", d: "M10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".4", d: "M11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".45", d: "M11.7214 11.668C12.4254 9.01303 12.4262 5.99691 11.7237 3.34116L12.2071 3.21329C12.9318 5.95292 12.931 9.05728 12.2047 11.7961L11.7214 11.668Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { opacity: ".5", d: "M12.4432 10.752C12.8524 8.63762 12.8523 6.36089 12.4429 4.2466L12.9338 4.15155C13.3553 6.32861 13.3554 8.66985 12.9341 10.847L12.4432 10.752Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e39.createElement("path", { d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })), e39.createElement(p, { size: "1", weight: "medium" }, m19(t36)))))), e39.createElement(o16, { mt: "5", style: { width: "100%" }, onClick: U }, W2 === "copied" ? "Copied" : "Copy Theme")))));
});
z.displayName = "ThemePanelImpl";
function n92() {
  const n24 = document.createElement("style");
  return n24.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(n24), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(n24);
    }, 1);
  };
}
function m19(n24) {
  return n24.charAt(0).toUpperCase() + n24.slice(1);
}
function a92(n24) {
  const a39 = document.documentElement, l11 = a39.classList.contains("light-theme"), c5 = a39.classList.contains("dark-theme"), h4 = a39.classList.contains("light"), v8 = a39.classList.contains("dark");
  (l11 || c5) && (a39.classList.remove("light-theme", "dark-theme"), a39.style.colorScheme = n24, a39.classList.add(`${n24}-theme`)), (h4 || v8) && (a39.classList.remove("light", "dark"), a39.style.colorScheme = n24, a39.classList.add(n24)), !l11 && !c5 && !h4 && !v8 && (a39.style.colorScheme = n24, a39.classList.add(n24));
}

// node_modules/@radix-ui/themes/dist/esm/components/tooltip.js
var o59 = __toESM(require_react(), 1);
var import_classnames54 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/tooltip.props.js
var e41 = { content: { type: "ReactNode", required: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "360px" } };

// node_modules/@radix-ui/themes/dist/esm/components/tooltip.js
var e40 = o59.forwardRef((i22, p39) => {
  const { children: r43, className: n24, open: s23, defaultOpen: l11, onOpenChange: m20, delayDuration: a39, disableHoverableContent: f21, content: P6, container: T6, forceMount: c5, ...d10 } = v(i22, e41), C6 = { open: s23, defaultOpen: l11, onOpenChange: m20, delayDuration: a39, disableHoverableContent: f21 };
  return o59.createElement($a093c7e1ec25a057$export$be92b6f5f03c0fe9, { ...C6 }, o59.createElement($a093c7e1ec25a057$export$41fb9f06171c75f4, { asChild: true }, r43), o59.createElement($a093c7e1ec25a057$export$602eac185826482c, { container: T6, forceMount: c5 }, o59.createElement(I, { asChild: true }, o59.createElement($a093c7e1ec25a057$export$7c6e2c02157bb7d2, { sideOffset: 4, collisionPadding: 10, ...d10, asChild: false, ref: p39, className: (0, import_classnames54.default)("rt-TooltipContent", n24) }, o59.createElement(p, { as: "p", className: "rt-TooltipText", size: "1" }, P6), o59.createElement($a093c7e1ec25a057$export$21b07c8f274aebd5, { className: "rt-TooltipArrow" })))));
});
e40.displayName = "Tooltip";
export {
  $08b6689415b2f49a$export$5aec92af04ace2d2 as AccessibleIcon,
  alert_dialog_exports as AlertDialog,
  $c1b5f66aac50e106$export$e840e8869344ca38 as AspectRatio,
  i2 as Avatar,
  e14 as Badge,
  e15 as Blockquote,
  p9 as Box,
  o16 as Button,
  callout_exports as Callout,
  o18 as Card,
  r17 as Checkbox,
  checkbox_cards_exports as CheckboxCards,
  checkbox_group_exports as CheckboxGroup,
  t12 as ChevronDownIcon,
  p18 as Code,
  p20 as Container,
  context_menu_exports as ContextMenu,
  data_list_exports as DataList,
  dialog_exports as Dialog,
  dropdown_menu_exports as DropdownMenu,
  o31 as Em,
  p12 as Flex,
  o21 as Grid,
  r6 as Heading,
  hover_card_exports as HoverCard,
  o32 as IconButton,
  o33 as Inset,
  r27 as Kbd,
  e28 as Link,
  popover_exports as Popover,
  $f1701beae083dbae$export$602eac185826482c as Portal,
  s18 as Progress,
  e29 as Quote,
  e30 as Radio,
  radio_cards_exports as RadioCards,
  radio_group_exports as RadioGroup,
  o46 as Reset,
  c2 as ScrollArea,
  r32 as Section,
  segmented_control_exports as SegmentedControl,
  select_exports as Select,
  o50 as Separator,
  t26 as Skeleton,
  p35 as Slider,
  $5e63c961fc1ce211$export$8c6ed5c666ac1360 as Slot,
  $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 as Slottable,
  s8 as Spinner,
  r36 as Strong,
  i18 as Switch,
  tab_nav_exports as TabNav,
  table_exports as Table,
  tabs_exports as Tabs,
  p as Text,
  r41 as TextArea,
  text_field_exports as TextField,
  I as Theme,
  N7 as ThemePanel,
  r16 as ThickCheckIcon,
  p17 as ThickChevronRightIcon,
  e40 as Tooltip,
  $ea1ef594cf570d83$export$439d29a4e110a164 as VisuallyHidden,
  H as useThemeContext
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=@radix-ui_themes.js.map
