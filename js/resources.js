/**
 * resources.js
 *
 * Copyright (c) 2013 Petar Petrov
 *
 * This work is licensed under the Creative Commons Attribution-NoDerivs 3.0 Unported License. 
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nd/3.0/.
 */

game.resources = [
    /* Graphics. 
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    {name: "boardtileset", type:"image", src: "assets/gfx/tiles.png"},
    {name: "fountain", type:"image", src: "assets/gfx/fountain.png"},
    {name: "spells", type:"image", src: "assets/gfx/spells.png"},
    {name: "wizards_faces", type:"image", src: "assets/gfx/faces.png"},
    {name: "earth_front", type:"image", src: "assets/gfx/Earth_front_56.png"},
    {name: "water_front", type:"image", src: "assets/gfx/Water_front_56.png"},
    {name: "fire_front", type:"image", src: "assets/gfx/Fire_front_56.png"},
    {name: "air_front", type:"image", src: "assets/gfx/Air_front_56.png"},
        
    // Hud
    {name: "dialog", type:"image", src: "assets/gui/dialog.png"},
    {name: "button_ok", type:"image", src: "assets/gui/button_ok.png"},
    {name: "button_cancel", type:"image", src: "assets/gui/button_cancel.png"},
    {name: "button_empty", type:"image", src: "assets/gui/button_empty.png"},

    {name: "icon_chance", type:"image", src: "assets/gui/icon_select_chance.png"},
    {name: "icon_spell", type:"image", src: "assets/gui/icon_select_spell.png"},
    {name: "icon_spell_abyss", type:"image", src: "assets/gui/icon_spell_abyss.png"},
    {name: "icon_spell_change", type:"image", src: "assets/gui/icon_spell_change.png"},
    {name: "icon_spell_clay", type:"image", src: "assets/gui/icon_spell_clay.png"},
    {name: "icon_spell_blind", type:"image", src: "assets/gui/icon_spell_blind.png"},
    {name: "icon_spell_freeze", type:"image", src: "assets/gui/icon_spell_freeze.png"},
    {name: "icon_spell_path", type:"image", src: "assets/gui/icon_spell_path.png"},
    {name: "icon_spell_teleport", type:"image", src: "assets/gui/icon_spell_teleport.png"},

    {name: "icon_move1", type:"image", src: "assets/gui/icon_move1.png"},
    {name: "icon_move2", type:"image", src: "assets/gui/icon_move2.png"},
    {name: "icon_move3", type:"image", src: "assets/gui/icon_move3.png"},
    {name: "icon_move4", type:"image", src: "assets/gui/icon_move4.png"},
    {name: "icon_jump", type:"image", src: "assets/gui/icon_jump.png"},
    {name: "icon_pass", type:"image", src: "assets/gui/icon_pass.png"},

    {name: "slot_empty", type:"image", src: "assets/gui/slot_empty.png"},
    {name: "slot_earth", type:"image", src: "assets/gui/slot_earth.png"},
    {name: "slot_water", type:"image", src: "assets/gui/slot_water.png"},
    {name: "slot_fire", type:"image", src: "assets/gui/slot_fire.png"},
    {name: "slot_air", type:"image", src: "assets/gui/slot_air.png"},

    {name: "manabar", type:"image", src: "assets/gui/mana-bar.png"},
    {name: "dice", type:"image", src: "assets/gui/dice.png"},

    // Menu
    {name: "menu-background", type:"image", src: "assets/gui/menu-background.png"},
    {name: "menu-title", type:"image", src: "assets/gui/menu-title.png"},
    {name: "menu-buttons", type:"image", src: "assets/gui/menu-buttons.png"},

    /* Sound effects. 
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
     * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
     */
    {name: "click", type: "audio", src: "assets/sfx/", channel: 1},
    {name: "rolldice", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "rolldice2", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "teleport", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "freeze", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "blind", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "path", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "change", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "abyss", type: "audio", src: "assets/sfx/", channel : 1},
    {name: "walk_earth", type: "audio", src: "assets/sfx/", channel : 1},
    
    // {name: "observingthestar", type: "audio", src: "assets/muzik/", channel: 1, stream: true}
];
