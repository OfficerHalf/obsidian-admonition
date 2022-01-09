import { MarkdownPostProcessorContext, Plugin_2 } from "obsidian";
import { IconName } from "src/util";

export interface Admonition {
    type: string;
    title?: string;
    icon: AdmonitionIconDefinition;
    color: string;
    command: boolean;
    injectColor: boolean;
    noTitle: boolean;
    copy: boolean;
}

export interface INestedAdmonition {
    type: string;
    start: number;
    end: number;
    src: string;
}

export interface ISettingsData {
    userAdmonitions: Record<string, Admonition> /* {
        [admonitionType: string]: Admonition;
    } */;
    syntaxHighlight: boolean;
    copyButton: boolean;
    autoCollapse: boolean;
    defaultCollapseType: "open" | "closed";
    syncLinks: boolean;
    version: string;
    enableMarkdownProcessor: boolean;
    injectColor: boolean;
    parseTitles: boolean;
    allowMSSyntax: boolean;
}

export type AdmonitionIconDefinition = {
    type?: "font-awesome" | "rpg" | "image";
    name?: IconName | RPGIconName | string;
};

export type AdmonitionIconName = AdmonitionIconDefinition["name"];
export type AdmonitionIconType = AdmonitionIconDefinition["type"];

export declare class ObsidianAdmonitionPlugin extends Plugin_2 {
    admonitions: { [admonitionType: string]: Admonition };
    data: ISettingsData;
    get admonitionArray(): Admonition[];
    turnOnSyntaxHighlighting(types?: string[]): void;
    turnOffSyntaxHighlighting(types?: string[]): void;
    enableMarkdownProcessor(): void;
    disableMarkdownProcessor(): void;
    saveSettings(): Promise<void>;
    loadSettings(): Promise<void>;
    addAdmonition(admonition: Admonition): Promise<void>;
    removeAdmonition(admonition: Admonition): Promise<void>;
    onload(): Promise<void>;
    onunload(): Promise<void>;
    postprocessor(
        type: string,
        src: string,
        el: HTMLElement,
        ctx: MarkdownPostProcessorContext
    ): void;
    unregisterCommandsFor(admonition: Admonition): void;
    registerCommandsFor(admonition: Admonition): void;
    getAdmonitionElement(
        type: string,
        title: string,
        icon: AdmonitionIconDefinition,
        color?: string,
        collapse?: string,
        id?: string
    ): HTMLElement;
    getAdmonitionElementAsync(
        type: string,
        title: string,
        icon: AdmonitionIconDefinition,
        color?: string,
        collapse?: string,
        id?: string
    ): Promise<HTMLElement>;
}

export type RPGIconName =
    | "acid"
    | "acorn"
    | "alien-fire"
    | "all-for-one"
    | "alligator-clip"
    | "ammo-bag"
    | "anchor"
    | "angel-wings"
    | "ankh"
    | "anvil"
    | "apple"
    | "aquarius"
    | "arcane-mask"
    | "archer"
    | "archery-target"
    | "arena"
    | "aries"
    | "arrow-cluster"
    | "arrow-flights"
    | "arson"
    | "aura"
    | "aware"
    | "axe-swing"
    | "axe"
    | "ball"
    | "barbed-arrow"
    | "barrier"
    | "bat-sword"
    | "battered-axe"
    | "batteries"
    | "battery-0"
    | "battery-25"
    | "battery-50"
    | "battery-75"
    | "battery-100"
    | "battery-black"
    | "battery-negative"
    | "battery-positive"
    | "battery-white"
    | "batwings"
    | "beam-wake"
    | "bear-trap"
    | "beer"
    | "beetle"
    | "bell"
    | "biohazard"
    | "bird-claw"
    | "bird-mask"
    | "blade-bite"
    | "blast"
    | "blaster"
    | "bleeding-eye"
    | "bleeding-hearts"
    | "bolt-shield"
    | "bomb-explosion"
    | "bombs"
    | "bone-bite"
    | "bone-knife"
    | "book"
    | "boomerang"
    | "boot-stomp"
    | "bottle-vapors"
    | "bottled-bolt"
    | "bottom-right"
    | "bowie-knife"
    | "bowling-pin"
    | "brain-freeze"
    | "brandy-bottle"
    | "bridge"
    | "broadhead-arrow"
    | "broadsword"
    | "broken-bone"
    | "broken-bottle"
    | "broken-heart"
    | "broken-shield"
    | "broken-skull"
    | "bubbling-potion"
    | "bullets"
    | "burning-book"
    | "burning-embers"
    | "burning-eye"
    | "burning-meteor"
    | "burst-blob"
    | "butterfly"
    | "campfire"
    | "cancel"
    | "cancer"
    | "candle-fire"
    | "candle"
    | "cannon-shot"
    | "capitol"
    | "capricorn"
    | "carrot"
    | "castle-emblem"
    | "castle-flag"
    | "cat"
    | "chain"
    | "cheese"
    | "chemical-arrow"
    | "chessboard"
    | "chicken-leg"
    | "circle-of-circles"
    | "circular-saw"
    | "circular-shield"
    | "cloak-and-dagger"
    | "clockwork"
    | "clover"
    | "clovers-card"
    | "clovers"
    | "cluster-bomb"
    | "coffee-mug"
    | "cog-wheel"
    | "cog"
    | "cold-heart"
    | "compass"
    | "corked-tube"
    | "crab-claw"
    | "cracked-helm"
    | "cracked-shield"
    | "croc-sword"
    | "crossbow"
    | "crossed-axes"
    | "crossed-bones"
    | "crossed-pistols"
    | "crossed-sabres"
    | "crossed-swords"
    | "crown-of-thorns"
    | "crown"
    | "crowned-heart"
    | "crush"
    | "crystal-ball"
    | "crystal-cluster"
    | "crystal-wand"
    | "crystals"
    | "cubes"
    | "cut-palm"
    | "cycle"
    | "daggers"
    | "daisy"
    | "dead-tree"
    | "death-skull"
    | "decapitation"
    | "defibrillate"
    | "demolish"
    | "dervish-swords"
    | "desert-skull"
    | "diamond"
    | "diamonds-card"
    | "diamonds"
    | "dice-five"
    | "dice-four"
    | "dice-one"
    | "dice-six"
    | "dice-three"
    | "dice-two"
    | "dinosaur"
    | "divert"
    | "diving-dagger"
    | "double-team"
    | "doubled"
    | "dragon-breath"
    | "dragon-wing"
    | "dragon"
    | "dragonfly"
    | "drill"
    | "dripping-blade"
    | "dripping-knife"
    | "dripping-sword"
    | "droplet-splash"
    | "droplet"
    | "droplets"
    | "duel"
    | "egg-pod"
    | "egg"
    | "eggplant"
    | "emerald"
    | "energise"
    | "explosion"
    | "explosive-materials"
    | "eye-monster"
    | "eye-shield"
    | "eyeball"
    | "fairy-wand"
    | "fairy"
    | "fall-down"
    | "falling"
    | "fast-ship"
    | "feather-wing"
    | "feathered-wing"
    | "fedora"
    | "fire-bomb"
    | "fire-breath"
    | "fire-ring"
    | "fire-shield"
    | "fire-symbol"
    | "fire"
    | "fireball-sword"
    | "fish"
    | "fizzing-flask"
    | "flame-symbol"
    | "flaming-arrow"
    | "flaming-claw"
    | "flaming-trident"
    | "flask"
    | "flat-hammer"
    | "flower"
    | "flowers"
    | "fluffy-swirl"
    | "focused-lightning"
    | "food-chain"
    | "footprint"
    | "forging"
    | "forward"
    | "fox"
    | "frost-emblem"
    | "frostfire"
    | "frozen-arrow"
    | "gamepad-cross"
    | "gavel"
    | "gear-hammer"
    | "gear-heart"
    | "gears"
    | "gecko"
    | "gem-pendant"
    | "gem"
    | "gemini"
    | "glass-heart"
    | "gloop"
    | "gold-bar"
    | "grappling-hook"
    | "grass-patch"
    | "grass"
    | "grenade"
    | "groundbreaker"
    | "guarded-tower"
    | "guillotine"
    | "halberd"
    | "hammer-drop"
    | "hammer"
    | "hand-emblem"
    | "hand-saw"
    | "hand"
    | "harpoon-trident"
    | "health-decrease"
    | "health-increase"
    | "health"
    | "heart-bottle"
    | "heart-tower"
    | "heartburn"
    | "hearts-card"
    | "hearts"
    | "heat-haze"
    | "heavy-fall"
    | "heavy-shield"
    | "helmet"
    | "help"
    | "hive-emblem"
    | "hole-ladder"
    | "honeycomb"
    | "hood"
    | "horn-call"
    | "horns"
    | "horseshoe"
    | "hospital-cross"
    | "hot-surface"
    | "hourglass"
    | "hydra-shot"
    | "hydra"
    | "ice-cube"
    | "implosion"
    | "incense"
    | "insect-jaws"
    | "interdiction"
    | "jetpack"
    | "jigsaw-piece"
    | "kaleidoscope"
    | "kettlebell"
    | "key-basic"
    | "key"
    | "kitchen-knives"
    | "knife-fork"
    | "knife"
    | "knight-helmet"
    | "kunai"
    | "lantern-flame"
    | "large-hammer"
    | "laser-blast"
    | "laser-site"
    | "lava"
    | "leaf"
    | "leo"
    | "level-four-advanced"
    | "level-four"
    | "level-three-advanced"
    | "level-three"
    | "level-two-advanced"
    | "level-two"
    | "lever"
    | "libra"
    | "light-bulb"
    | "lighthouse"
    | "lightning-bolt"
    | "lightning-storm"
    | "lightning-sword"
    | "lightning-trio"
    | "lightning"
    | "lion"
    | "lit-candelabra"
    | "load"
    | "locked-fortress"
    | "love-howl"
    | "maggot"
    | "magnet"
    | "mass-driver"
    | "match"
    | "meat-hook"
    | "meat"
    | "medical-pack"
    | "metal-gate"
    | "microphone"
    | "mine-wagon"
    | "mining-diamonds"
    | "mirror"
    | "monster-skull"
    | "montains"
    | "moon-sun"
    | "mp5"
    | "muscle-fat"
    | "muscle-up"
    | "musket"
    | "nails"
    | "nodular"
    | "noose"
    | "nuclear"
    | "ocarina"
    | "ocean-emblem"
    | "octopus"
    | "omega"
    | "on-target"
    | "ophiuchus"
    | "overhead"
    | "overmind"
    | "palm-tree"
    | "pawn"
    | "pawprint"
    | "perspective-dice-five"
    | "perspective-dice-four"
    | "perspective-dice-one"
    | "perspective-dice-random"
    | "perspective-dice-six-two"
    | "perspective-dice-six"
    | "perspective-dice-three"
    | "pill"
    | "pills"
    | "pine-tree"
    | "ping-pong"
    | "pisces"
    | "plain-dagger"
    | "player-despair"
    | "player-dodge"
    | "player-king"
    | "player-lift"
    | "player-pain"
    | "player-pyromaniac"
    | "player-shot"
    | "player-teleport"
    | "player-thunder-struck"
    | "player"
    | "podium"
    | "poison-cloud"
    | "potion"
    | "pyramids"
    | "queen-crown"
    | "quill-ink"
    | "rabbit"
    | "radar-dish"
    | "radial-balance"
    | "radioactive"
    | "raven"
    | "reactor"
    | "recycle"
    | "regeneration"
    | "relic-blade"
    | "repair"
    | "reverse"
    | "revolver"
    | "rifle"
    | "ringing-bell"
    | "roast-chicken"
    | "robot-arm"
    | "round-bottom-flask"
    | "round-shield"
    | "rss"
    | "rune-stone"
    | "sagittarius"
    | "sapphire"
    | "satellite"
    | "save"
    | "scorpio"
    | "scroll-unfurled"
    | "scythe"
    | "sea-serpent"
    | "seagull"
    | "shark"
    | "sheep"
    | "sheriff"
    | "shield"
    | "ship-emblem"
    | "shoe-prints"
    | "shot-through-the-heart"
    | "shotgun-shell"
    | "shovel"
    | "shuriken"
    | "sickle"
    | "sideswipe"
    | "site"
    | "skull-trophy"
    | "skull"
    | "slash-ring"
    | "small-fire"
    | "snail"
    | "snake"
    | "snorkel"
    | "snowflake"
    | "soccer-ball"
    | "spades-card"
    | "spades"
    | "spawn-node"
    | "spear-head"
    | "speech-bubble"
    | "speech-bubbles"
    | "spider-face"
    | "spikeball"
    | "spiked-mace"
    | "spiked-tentacle"
    | "spinning-sword"
    | "spiral-shell"
    | "splash"
    | "spray-can"
    | "sprout-emblem"
    | "sprout"
    | "stopwatch"
    | "suckered-tentacle"
    | "suits"
    | "sun-symbol"
    | "sun"
    | "sunbeams"
    | "super-mushroom"
    | "supersonic-arrow"
    | "surveillance-camera"
    | "syringe"
    | "target-arrows"
    | "target-laser"
    | "targeted"
    | "taurus"
    | "telescope"
    | "tentacle"
    | "tesla"
    | "thorn-arrow"
    | "thorny-vine"
    | "three-keys"
    | "tic-tac-toe"
    | "toast"
    | "tombstone"
    | "tooth"
    | "torch"
    | "tower"
    | "trail"
    | "trefoil-lily"
    | "trident"
    | "triforce"
    | "trophy"
    | "turd"
    | "two-dragons"
    | "two-hearts"
    | "uncertainty"
    | "underhand"
    | "unplugged"
    | "vase"
    | "venomous-snake"
    | "vest"
    | "vial"
    | "vine-whip"
    | "virgo"
    | "water-drop"
    | "wifi"
    | "wireless-signal"
    | "wolf-head"
    | "wolf-howl"
    | "wooden-sign"
    | "wrench"
    | "wyvern"
    | "x-mark"
    | "zebra-shield"
    | "zigzag-leaf";
