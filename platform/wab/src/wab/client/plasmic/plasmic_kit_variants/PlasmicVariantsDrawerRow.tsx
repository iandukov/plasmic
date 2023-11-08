// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wT5BWZPEc2fYxyqbTLXMt2
// Component: f-9OgqRi3D
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import ListItem from "../../components/ListItem"; // plasmic-import: v31d9_ANqk/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import VariantPinButton from "../../components/variants/VariantPinButton"; // plasmic-import: iPC_skyaMh/component
import Indicator from "../../components/style-controls/Indicator"; // plasmic-import: KRNHR6lpj1/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_variants.module.css"; // plasmic-import: wT5BWZPEc2fYxyqbTLXMt2/projectcss
import sty from "./PlasmicVariantsDrawerRow.module.css"; // plasmic-import: f-9OgqRi3D/css

import VariantsvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Variantsvg"; // plasmic-import: mSYwardqQ/icon
import VariantIcon from "../plasmic_kit_design_system/PlasmicIcon__Variant"; // plasmic-import: WBXMPcPdoM/icon
import PlusCirclesvgIcon from "../q_4_icons/icons/PlasmicIcon__PlusCirclesvg"; // plasmic-import: tPPI666-2/icon
import Recording2Icon from "../plasmic_kit/PlasmicIcon__Recording2"; // plasmic-import: S1b6HroavEOOP/icon
import PlusCircleIcon from "../plasmic_kit/PlasmicIcon__PlusCircle"; // plasmic-import: miOAezEgkL3Po/icon
import CloseIcon from "../plasmic_kit/PlasmicIcon__Close"; // plasmic-import: hy7vKrgdAZwW4/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

export type PlasmicVariantsDrawerRow__VariantMembers = {
  isFocused: "isFocused";
  pinState: "pinnedTrue" | "selected" | "pinnedFalse" | "evaluatedTrue";
  isIndicated: "isIndicated";
  isStandalone: "isStandalone";
};

export type PlasmicVariantsDrawerRow__VariantsArgs = {
  isFocused?: SingleBooleanChoiceArg<"isFocused">;
  pinState?: SingleChoiceArg<
    "pinnedTrue" | "selected" | "pinnedFalse" | "evaluatedTrue"
  >;

  isIndicated?: SingleBooleanChoiceArg<"isIndicated">;
  isStandalone?: SingleBooleanChoiceArg<"isStandalone">;
};

type VariantPropType = keyof PlasmicVariantsDrawerRow__VariantsArgs;
export const PlasmicVariantsDrawerRow__VariantProps =
  new Array<VariantPropType>(
    "isFocused",
    "pinState",
    "isIndicated",
    "isStandalone"
  );

export type PlasmicVariantsDrawerRow__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicVariantsDrawerRow__ArgsType;
export const PlasmicVariantsDrawerRow__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicVariantsDrawerRow__OverridesType = {
  root?: p.Flex<"div">;
  listItem?: p.Flex<typeof ListItem>;
  labelContainer?: p.Flex<"div">;
  recordButton?: p.Flex<typeof IconButton>;
  variantPinButton?: p.Flex<typeof VariantPinButton>;
  indicator?: p.Flex<typeof Indicator>;
};

export interface DefaultVariantsDrawerRowProps {
  children?: React.ReactNode;
  isFocused?: SingleBooleanChoiceArg<"isFocused">;
  pinState?: SingleChoiceArg<
    "pinnedTrue" | "selected" | "pinnedFalse" | "evaluatedTrue"
  >;

  isIndicated?: SingleBooleanChoiceArg<"isIndicated">;
  isStandalone?: SingleBooleanChoiceArg<"isStandalone">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicVariantsDrawerRow__RenderFunc(props: {
  variants: PlasmicVariantsDrawerRow__VariantsArgs;
  args: PlasmicVariantsDrawerRow__ArgsType;
  overrides: PlasmicVariantsDrawerRow__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),

    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isFocused",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.isFocused : undefined,
      },

      {
        path: "pinState",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.pinState : undefined,
      },

      {
        path: "isIndicated",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.isIndicated
          : undefined,
      },

      {
        path: "isStandalone",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.isStandalone
          : undefined,
      },
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootisFocused]: hasVariant($state, "isFocused", "isFocused") }
      )}
    >
      {(hasVariant($state, "isFocused", "isFocused") ? true : true) ? (
        <ListItem
          data-plasmic-name={"listItem"}
          data-plasmic-override={overrides.listItem}
          actions={
            <React.Fragment>
              {(
                hasVariant($state, "pinState", "selected")
                  ? true
                  : hasVariant($state, "isFocused", "isFocused")
                  ? true
                  : false
              ) ? (
                <IconButton
                  data-plasmic-name={"recordButton"}
                  data-plasmic-override={overrides.recordButton}
                  children2={
                    <ChevronDownsvgIcon
                      className={classNames(projectcss.all, sty.svg__ku7Q2)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.recordButton, {
                    [sty.recordButtonisFocused]: hasVariant(
                      $state,
                      "isFocused",
                      "isFocused"
                    ),

                    [sty.recordButtonpinState_selected]: hasVariant(
                      $state,
                      "pinState",
                      "selected"
                    ),
                  })}
                >
                  <p.PlasmicIcon
                    PlasmicIconType={
                      hasVariant($state, "pinState", "selected") &&
                      hasVariant($state, "isFocused", "isFocused")
                        ? CloseIcon
                        : hasVariant($state, "pinState", "selected")
                        ? Recording2Icon
                        : hasVariant($state, "isFocused", "isFocused")
                        ? PlusCircleIcon
                        : PlusCirclesvgIcon
                    }
                    className={classNames(projectcss.all, sty.svg___6Q7Ap, {
                      [sty.svgisFocused___6Q7ApIna7T]: hasVariant(
                        $state,
                        "isFocused",
                        "isFocused"
                      ),

                      [sty.svgpinState_selected___6Q7Ap7KbKb]: hasVariant(
                        $state,
                        "pinState",
                        "selected"
                      ),

                      [sty.svgpinState_selected_isFocused___6Q7Ap7KbKbIna7T]:
                        hasVariant($state, "pinState", "selected") &&
                        hasVariant($state, "isFocused", "isFocused"),
                    })}
                    role={"img"}
                  />
                </IconButton>
              ) : null}
              {(
                hasVariant($state, "pinState", "evaluatedTrue")
                  ? true
                  : hasVariant($state, "pinState", "pinnedFalse")
                  ? true
                  : hasVariant($state, "pinState", "selected")
                  ? true
                  : hasVariant($state, "pinState", "pinnedTrue")
                  ? true
                  : hasVariant($state, "isFocused", "isFocused")
                  ? true
                  : false
              ) ? (
                <VariantPinButton
                  data-plasmic-name={"variantPinButton"}
                  data-plasmic-override={overrides.variantPinButton}
                  className={classNames(
                    "__wab_instance",
                    sty.variantPinButton,
                    {
                      [sty.variantPinButtonisFocused]: hasVariant(
                        $state,
                        "isFocused",
                        "isFocused"
                      ),

                      [sty.variantPinButtonpinState_evaluatedTrue]: hasVariant(
                        $state,
                        "pinState",
                        "evaluatedTrue"
                      ),

                      [sty.variantPinButtonpinState_pinnedFalse]: hasVariant(
                        $state,
                        "pinState",
                        "pinnedFalse"
                      ),

                      [sty.variantPinButtonpinState_pinnedTrue]: hasVariant(
                        $state,
                        "pinState",
                        "pinnedTrue"
                      ),

                      [sty.variantPinButtonpinState_selected]: hasVariant(
                        $state,
                        "pinState",
                        "selected"
                      ),
                    }
                  )}
                  pinState={
                    hasVariant($state, "pinState", "evaluatedTrue")
                      ? ("evaluatedTrue" as const)
                      : hasVariant($state, "pinState", "pinnedFalse")
                      ? ("pinnedFalse" as const)
                      : hasVariant($state, "pinState", "selected")
                      ? ("selected" as const)
                      : hasVariant($state, "pinState", "pinnedTrue")
                      ? ("pinnedTrue" as const)
                      : undefined
                  }
                />
              ) : null}
            </React.Fragment>
          }
          className={classNames("__wab_instance", sty.listItem, {
            [sty.listItemisFocused]: hasVariant(
              $state,
              "isFocused",
              "isFocused"
            ),

            [sty.listItemisIndicated]: hasVariant(
              $state,
              "isIndicated",
              "isIndicated"
            ),

            [sty.listItemisStandalone]: hasVariant(
              $state,
              "isStandalone",
              "isStandalone"
            ),

            [sty.listItempinState_selected]: hasVariant(
              $state,
              "pinState",
              "selected"
            ),

            [sty.listItempinState_selected_isFocused]:
              hasVariant($state, "pinState", "selected") &&
              hasVariant($state, "isFocused", "isFocused"),
          })}
          hideIcon={
            hasVariant($state, "isStandalone", "isStandalone")
              ? undefined
              : undefined
          }
          icon={
            <p.PlasmicIcon
              PlasmicIconType={
                hasVariant($state, "isStandalone", "isStandalone")
                  ? VariantIcon
                  : VariantsvgIcon
              }
              className={classNames(projectcss.all, sty.svg__zp3Cq, {
                [sty.svgisFocused__zp3CqIna7T]: hasVariant(
                  $state,
                  "isFocused",
                  "isFocused"
                ),

                [sty.svgisStandalone__zp3CqV0Y0A]: hasVariant(
                  $state,
                  "isStandalone",
                  "isStandalone"
                ),

                [sty.svgpinState_pinnedTrue__zp3CqOwbGh]: hasVariant(
                  $state,
                  "pinState",
                  "pinnedTrue"
                ),
              })}
              role={"img"}
            />
          }
          isFocused={
            hasVariant($state, "isFocused", "isFocused") ? true : undefined
          }
          showActions={
            hasVariant($state, "isFocused", "isFocused") ? true : true
          }
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"labelContainer"}
            data-plasmic-override={overrides.labelContainer}
            hasGap={true}
            className={classNames(projectcss.all, sty.labelContainer, {
              [sty.labelContainerisStandalone]: hasVariant(
                $state,
                "isStandalone",
                "isStandalone"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Item name",
              value: args.children,
            })}
          </p.Stack>
        </ListItem>
      ) : null}
      {(hasVariant($state, "isIndicated", "isIndicated") ? true : false) ? (
        <Indicator
          data-plasmic-name={"indicator"}
          data-plasmic-override={overrides.indicator}
          className={classNames("__wab_instance", sty.indicator, {
            [sty.indicatorisIndicated]: hasVariant(
              $state,
              "isIndicated",
              "isIndicated"
            ),
          })}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "listItem",
    "labelContainer",
    "recordButton",
    "variantPinButton",
    "indicator",
  ],

  listItem: ["listItem", "labelContainer", "recordButton", "variantPinButton"],
  labelContainer: ["labelContainer"],
  recordButton: ["recordButton"],
  variantPinButton: ["variantPinButton"],
  indicator: ["indicator"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  listItem: typeof ListItem;
  labelContainer: "div";
  recordButton: typeof IconButton;
  variantPinButton: typeof VariantPinButton;
  indicator: typeof Indicator;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariantsDrawerRow__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicVariantsDrawerRow__VariantsArgs;
  args?: PlasmicVariantsDrawerRow__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicVariantsDrawerRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicVariantsDrawerRow__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicVariantsDrawerRow__ArgProps,
          internalVariantPropNames: PlasmicVariantsDrawerRow__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicVariantsDrawerRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariantsDrawerRow";
  } else {
    func.displayName = `PlasmicVariantsDrawerRow.${nodeName}`;
  }
  return func;
}

export const PlasmicVariantsDrawerRow = Object.assign(
  // Top-level PlasmicVariantsDrawerRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listItem: makeNodeComponent("listItem"),
    labelContainer: makeNodeComponent("labelContainer"),
    recordButton: makeNodeComponent("recordButton"),
    variantPinButton: makeNodeComponent("variantPinButton"),
    indicator: makeNodeComponent("indicator"),

    // Metadata about props expected for PlasmicVariantsDrawerRow
    internalVariantProps: PlasmicVariantsDrawerRow__VariantProps,
    internalArgProps: PlasmicVariantsDrawerRow__ArgProps,
  }
);

export default PlasmicVariantsDrawerRow;
/* prettier-ignore-end */