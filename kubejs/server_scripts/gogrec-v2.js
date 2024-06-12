ServerEvents.recipes(e => {
    e.remove({id:'pneumaticcraft:programmer'})
    e.shapeless('create:sequenced_gearshift', ['create:brass_casing','kubejs:logic_circuit','create:cogwheel','create:large_cogwheel','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:sequenced_gearshift')
    e.remove({id:'create:crafting/kinetics/sequenced_gearshift'})
    e.shaped('create:rotation_speed_controller', [
        'ps', 
        'bc'
    ], {
        p: 'create:precision_mechanism',
        s: '#ico:tool/screwdriver',
        b: 'create:brass_casing',
        c: 'kubejs:logic_circuit'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:rotation_speed_controller')
    e.remove({id:'create:crafting/kinetics/rotation_speed_controller'})
    e.shaped('2x create:track_station', [
        'as', 
        't '
    ], {
        s: '#ico:tool/screwdriver',
        t: 'create:railway_casing',
        a: 'kubejs:aquatrine'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_station')
    e.remove({id:'create:crafting/kinetics/track_station'})
    e.shaped('create:track_signal', [
        'cs', 
        'b '
    ], {
        c: 'kubejs:logic_circuit',
        s: '#ico:tool/screwdriver',
        b: 'create:railway_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_signal')
    e.remove({id:'create:crafting/kinetics/track_signal'})
    e.shaped('create:track_observer', [
        'ws', 
        'o ',
        't '
    ], {
        w: '#minecraft:wooden_pressure_plates',
        o: 'minecraft:observer',
        s: '#ico:tool/screwdriver',
        t: 'create:railway_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_observer')
    e.remove({id:'create:crafting/kinetics/track_observer'})
    e.remove({id:'create:crafting/kinetics/track_observer_from_other_plates'})
    e.shaped('create:controls', [
        'ls', 
        't ',
        'p '
    ], {
        s: '#ico:tool/screwdriver',
        t: 'create:railway_casing',
        p: 'create:precision_mechanism',
        l: 'minecraft:lever'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:train_controls')
    e.remove({id:'create:crafting/kinetics/controls'})
    e.shaped('railways:track_coupler', [
        'cs', 
        'w ',
        't '
    ], {
        s: '#ico:tool/screwdriver',
        c: 'kubejs:carbon_steel_sheet',
        w: 'kubejs:wrought_iron_spring',
        t: 'create:railway_casing',
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_coupler')
    e.remove({id:'railways:crafting/track_coupler'})
    e.shaped('create:mechanical_roller', [
        'acs', 
        'ew ',
        '   '
    ], {
        s: '#ico:tool/screwdriver',
        a: 'create:andesite_casing',
        c: 'create:chute',
        e: 'create:electron_tube',
        w: 'create:crushing_wheel'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_roller')
    e.remove({id:'create:crafting/kinetics/mechanical_roller'})
    e.shaped('createdieselgenerators:diesel_engine', [
        ' Ss', 
        'ebe',
        'rEr'
    ], {
        s: '#ico:tool/screwdriver',
        S: 'create:shaft',
        e: 'createdieselgenerators:engine_piston',
        b: 'create:brass_block',
        E: 'create:steam_engine',
        r: 'pneumaticcraft:reinforced_bricks'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:diesel_engine')
    e.remove({id:'createdieselgenerators:crafting/diesel_engine'})
    e.shaped('createdieselgenerators:large_diesel_engine', [
        '  s', 
        'beb',
        'rrr'
    ], {
        s: '#ico:tool/screwdriver',
        b: 'create:brass_sheet',
        e: 'createdieselgenerators:diesel_engine',
        r: 'pneumaticcraft:reinforced_bricks'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:large_diesel_engine')
    e.remove({id:'createdieselgenerators:crafting/large_diesel_engine'})
    e.shaped('createdieselgenerators:huge_diesel_engine', [
        ' ds', 
        'heh',
        'pbp'
    ], {
        s: '#ico:tool/screwdriver',
        d: 'createdieselgenerators:diesel_engine',
        h: 'kubejs:high_pressure_plate',
        e: 'create:steam_engine',
        p: 'create:fluid_pipe',
        b: 'create:brass_block'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:huge_diesel_engine')
    e.remove({id:'createdieselgenerators:crafting/huge_diesel_engine'})
    e.shaped('2x create:display_board', [
        ' es', 
        'aca'
    ], {
        s: '#ico:tool/screwdriver',
        e: 'create:electron_tube',
        a: 'create:andesite_alloy',
        c: 'create:cogwheel'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:display_board')
    e.remove({id:'create:crafting/kinetics/display_board'})
    e.shaped('2x create:display_link', [
        'wes', 
        'cb '
    ], {
        s: '#ico:tool/screwdriver',
        w: 'kubejs:redstone_cable',
        e: 'create:electron_tube',
        c: 'vintageimprovements:copper_spring',
        b: 'create:brass_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:display_link')
    e.remove({id:'create:crafting/logistics/display_link'})
    e.shaped('create:content_observer', [
        'cs', 
        'b ',
        'o '
    ], {
        s: '#ico:tool/screwdriver',
        c: 'kubejs:logic_circuit',
        b: 'create:brass_casing',
        o: 'minecraft:observer'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:content_observer')
    e.remove({id:'create:crafting/logistics/content_observer'})
    e.shaped('create:stockpile_switch', [
        'cs', 
        'b ',
        'r '
    ], {
        s: '#ico:tool/screwdriver',
        c: 'kubejs:logic_circuit',
        b: 'create:brass_casing',
        r: 'minecraft:comparator'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:stockpile_switch')
    e.remove({id:'create:crafting/logistics/stockpile_switch'})
    e.shaped('mekanism:chemical_injection_chamber', [
        'mms', 
        'oMo',
        'rcr'
    ], {
        s: '#ico:tool/screwdriver',
        m: 'kubejs:machine_plating',
        o: 'mekanism:ingot_refined_obsidian',
        M: 'mekanism:purification_chamber',
        r: 'mekanism:alloy_reinforced',
        c: 'mekanism:elite_control_circuit'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:chemical_injection_chamber')
    e.remove({id:'mekanism:chemical_injection_chamber'})
    e.shaped('mekanism:chemical_dissolution_chamber', [
        'scS', 
        'oCo',
        'aAa'
    ], {
        S: '#ico:tool/screwdriver',
        s: 'kubejs:sealant',
        c: 'mekanism:basic_chemical_tank',
        o: 'mekanism:ingot_refined_obsidian',
        C: 'mekanism:steel_casing',
        a: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:chemical_dissolution_chamber')
    e.remove({id:'mekanism:chemical_dissolution_chamber'})
    e.shaped('mekanism:chemical_crystallizer', [
        'stS', 
        'fcf',
        'aAa'
    ], {
        S: '#ico:tool/screwdriver',
        s: 'kubejs:sealant',
        t: 'kubejs:tungsten_ingot',
        f: 'mekanism:fluorite_gem',
        c: 'mekanism:steel_casing',
        a: 'mekanism:alloy_atomic',
        A: 'mekanism:ultimate_control_circuit'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:chemical_crystallizer')
    e.remove({id:'mekanism:chemical_crystallizer'})
    e.shaped('pneumaticcraft:security_station', [
        ' ls', 
        'ipi'
    ], {
        s: '#ico:tool/screwdriver',
        l: 'kubejs:laser_emitter',
        i: 'born_in_chaos_v1:dark_metal_ingot',
        p: 'pneumaticcraft:programmer'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:security_station')
    e.remove({id:'pneumaticcraft:security_station'})
    e.recipes.create.mechanical_crafting('pneumaticcraft:solar_compressor', [ 
        'srs',
        'srs',
        ' p ',
        'fcf',
        'hHh'
        ], {
          s: 'pneumaticcraft:solar_cell',
          r: 'kubejs:rubber',
          p: 'pneumaticcraft:advanced_pressure_tube',
          c: 'pneumaticcraft:compressed_iron_block',
          f: 'pneumaticcraft:printed_circuit_board',
          h: 'kubejs:high_pressure_plate',
          H: 'compressedcreativity:compressed_iron_casing'
      }).id('ico:solar_compressor')
      e.remove({id:'pneumaticcraft:solar_compressor'})
      e.recipes.create.mechanical_crafting('mekanism:jetpack', [ 
        'arp pra',
        '  scs  ',
        ' ababa ',
        ' er re '
        ], {
          a: 'mekanism:alloy_reinforced',
          r: 'kubejs:rubber',
          p: 'pneumaticcraft:plastic',
          s: 'mekanism:ingot_steel',
          c: 'mekanism:elite_control_circuit',
          b: 'mekanism:basic_chemical_tank',
          e: 'immersive_aircraft:engine'
      }).id('ico:jetpack')
      e.remove({id:'mekanism:jetpack'})
      e.recipes.create.mechanical_crafting('mekanism:jetpack_armored', [ 
        ' tst ',
        'tojot',
        '  a  '
        ], {
          a: 'mekanism:alloy_atomic',
          t: 'kubejs:tungsten_ingot',
          s: 'mekanism:block_steel',
          o: 'mekanism:ingot_refined_obsidian',
          j: 'mekanism:jetpack'
      }).id('ico:jetpack_armored')
      e.remove({id:'mekanism:jetpack_armored'})
})