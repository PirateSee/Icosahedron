ServerEvents.recipes(e => {
    //e.remove({id:''})
    e.remove({id:'create_connected:crafting/kinetics/sequences_pulse_generator'})
    e.remove({id:'create_connected:crafting/kinetics/fluid_vessel'})
    e.remove({id:'create_connected:crafting/kinetics/item_silo'})
    e.remove({id:'supplementaries:sack'})
    e.remove({id:'quark:oddities/crafting/backpack'})
    e.remove({id:'create:crafting/kinetics/encased_chain_drive'})
    e.remove({id:'create:crafting/kinetics/gearshift'})
    e.remove({id:'create:crafting/kinetics/adjustable_chain_gearshift'})
    e.remove({id:'create_connected:crafting/kinetics/parallel_gearbox'})
    e.remove({id:'create_connected:crafting/kinetics/overstress_clutch'})
    e.remove({id:'create_connected:crafting/kinetics/centrifugal_clutch'})
    e.remove({id:'create_connected:crafting/kinetics/freewheel_clutch'})
    e.remove({id:'create_connected:crafting/kinetics/brake'})
    e.remove({id:'create_connected:crafting/kinetics/brass_gearbox'})
    e.remove({id:'create:crafting/kinetics/speedometer'})
    e.remove({id:'create:crafting/kinetics/clutch'})
    e.remove({id:'create:crafting/schematics/schematic_table'})
    e.remove({id:'immersive_aircraft:hull_reinforcement'})
    e.remove({id:'immersive_aircraft:hull'})
    e.remove({id:'create:crafting/schematics/schematicannon'})
    e.remove({id:'immersive_aircraft:warship'})
    e.remove({id:'immersive_aircraft:biplane'})
    e.remove({id:'pneumaticcraft:flux_compressor'})
    e.remove({id:'pneumaticcraft:air_cannon'})
    e.remove({id:'pneumaticcraft:heat_sink'})
    e.remove({id:'pneumaticcraft:electrostatic_compressor'})
    e.remove({id:'pneumaticcraft:pneumatic_dynamo'})
    e.remove({id:'pneumaticcraft:thermal_compressor'})
    e.remove({id:'pneumaticcraft:tube_junction'})
    e.remove({id:'pneumaticcraft:vacuum_trap'})
    e.remove({id:'pneumaticcraft:manual_compressor'})
    e.remove({id:'pneumaticcraft:crop_support'})
    e.remove({id:'pneumaticcraft:air_grate_module'})
    e.remove({id:'pneumaticcraft:charging_module'})
    e.remove({id:'pneumaticcraft:flow_detector_module'})
    e.remove({id:'create:crafting/kinetics/chute'})
    e.remove({id:'create:crafting/kinetics/smart_chute'})
    e.remove({id:'create_connected:crafting/kinetics/encased_chain_cogwheel'})
    e.remove({id:'pneumaticcraft:logistics_module'})
    e.remove({id:'pneumaticcraft:pressure_gauge_module'})
    e.remove({id:'pneumaticcraft:redstone_module'})
    e.remove({id:'pneumaticcraft:regulator_tube_module'})
    e.remove({id:'pneumaticcraft:safety_tube_module'})
    e.remove({id:'pneumaticcraft:thermostat_module'})
    e.remove({id:'pneumaticcraft:elevator_base_1'})
    e.remove({id:'pneumaticcraft:elevator_base_2'})
    e.remove({id:'pneumaticcraft:elevator_caller'})
    e.shaped('pneumaticcraft:flux_compressor', [
        'sgp', 
        'rtT',
        'dcp'
    ], {
        r: 'minecraft:redstone_block',
        d: 'minecraft:redstone',
        s: '#ico:tool/screwdriver',
        g: 'pneumaticcraft:compressed_iron_gear',
        t: 'pneumaticcraft:turbine_rotor',
        c: 'compressedcreativity:compressed_iron_casing',
        p: 'pneumaticcraft:printed_circuit_board',
        T: 'pneumaticcraft:advanced_pressure_tube'

    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:flux_compressor')
    e.shaped('pneumaticcraft:air_cannon', [
        'sch', 
        ' tp',
        'rCr'
    ], {
        c: 'pneumaticcraft:cannon_barrel',
        s: '#ico:tool/screwdriver',
        h: '#ico:tool/hammer',
        t: 'pneumaticcraft:stone_base',
        p: 'pneumaticcraft:pressure_tube',
        r: 'pneumaticcraft:reinforced_stone_slab',
        C: 'compressedcreativity:compressed_iron_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:air_cannon')
    e.shaped('pneumaticcraft:electrostatic_compressor', [
        'ipi', 
        'pCp',
        'sch'
    ], {
        s: '#ico:tool/screwdriver',
        h: '#ico:tool/hammer',
        i: 'minecraft:iron_bars',
        p: 'pneumaticcraft:plastic',
        c: 'pneumaticcraft:advanced_air_compressor',
        C: 'compressedcreativity:compressed_iron_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:electrostatic_compressor')
    e.shaped('pneumaticcraft:heat_sink', [
        '  d', 
        'iii',
        'cCc'
    ], {
        i: 'minecraft:iron_bars',
        c: 'pneumaticcraft:ingot_iron_compressed',
        C: 'minecraft:copper_ingot',
        d: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:let_that_sink_in')
    e.shaped('pneumaticcraft:pneumatic_dynamo', [
        'sph', 
        'cCc',
        'iPi'
    ], {
        p: 'pneumaticcraft:advanced_pressure_tube',
        c: 'pneumaticcraft:compressed_iron_gear',
        i: 'pneumaticcraft:ingot_iron_compressed',
        P: 'pneumaticcraft:printed_circuit_board',
        s: '#ico:tool/screwdriver',
        h: '#ico:tool/hammer',
        C: 'compressedcreativity:compressed_iron_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:pneumatic_dynamo')
    e.shaped('pneumaticcraft:thermal_compressor', [
        'ipi', 
        'scl',
        'iCi'
    ], {
        i: 'pneumaticcraft:ingot_iron_compressed',
        p: 'pneumaticcraft:pressure_tube',
        l: 'minecraft:heavy_weighted_pressure_plate',
        c: 'pneumaticcraft:air_compressor',
        s: '#ico:tool/screwdriver',
        C: 'compressedcreativity:compressed_iron_casing'

    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermal_compressor')
    e.shaped('pneumaticcraft:tube_junction', [
        'bpb', 
        'pCp',
        'bpb'
    ], {
        b: 'pneumaticcraft:reinforced_brick_wall',
        p: 'pneumaticcraft:pressure_tube',
        C: 'compressedcreativity:compressed_iron_casing'
    }).id('ico:tube_junction')
    e.shaped('pneumaticcraft:vacuum_trap', [
        'iti', 
        'rep',
        'sSh'
    ], {
        e: 'minecraft:ender_eye',
        s: '#ico:tool/screwdriver',
        h: '#ico:tool/hammer',
        i: 'pneumaticcraft:ingot_iron_compressed',
        t: 'minecraft:iron_trapdoor',
        r: 'pneumaticcraft:reinforced_brick_wall',
        S: 'pneumaticcraft:reinforced_stone_slab',
        p: 'pneumaticcraft:pressure_tube'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:vacuum_trap')
    e.shaped('pneumaticcraft:manual_compressor', [
        'rir', 
        'sph',
        'cCc'
    ], {
        r: 'minecraft:red_dye',
        p: 'pneumaticcraft:pressure_tube',
        i: 'pneumaticcraft:ingot_iron_compressed',
        c: 'pneumaticcraft:compressed_iron_gear',
        C: 'compressedcreativity:compressed_iron_casing',
        h: '#ico:tool/hammer',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:manual_compressor')
    e.shaped('pneumaticcraft:crop_support', [
        'ihi', 
        'i i',
        '   '
    ], {
        i: 'pneumaticcraft:ingot_iron_compressed',
        h: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:crop_support')
    e.shaped('pneumaticcraft:air_grate_module', [
        ' is', 
        'ipi',
        ' i '
    ], {
        i: 'minecraft:iron_bars',
        p: 'pneumaticcraft:pressure_tube',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:recipe_id')
    e.shaped('pneumaticcraft:charging_module', [
        'hcs', 
        'cpc',
        ' c '
    ], {
        c: 'pneumaticcraft:charging_station',
        p: 'pneumaticcraft:pressure_tube',
        s: '#ico:tool/screwdriver',
        h: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:charging_module')
    e.shaped('pneumaticcraft:flow_detector_module', [
        ' ts', 
        'tpt',
        ' t '
    ], {
        t: 'pneumaticcraft:turbine_blade',
        p: 'pneumaticcraft:pressure_tube',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:flow_detector_module')
    e.shaped('create:chute', [
        'hp ', 
        ' i ',
        ' p '
    ], {
        i: 'minecraft:iron_ingot',
        p: 'create:iron_sheet',
        h: '#ico:tool/hammer'

    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:chute')
    e.shaped('create:smart_chute', [
        'hb ', 
        ' c ',
        ' e '
    ], {
        b: 'create:brass_sheet',
        c: 'create:chute',
        e: 'create:electron_tube',
        h: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:smart_chute')
    e.shaped('create_connected:encased_chain_cogwheel', [
        'ecs',
        '   ',
        '   '
    ], {
        s: '#ico:tool/saw',
        e: 'create:encased_chain_drive',
        c: 'create:cogwheel'
    }).damageIngredient(Item.of('#ico:tool/saw')).id('ico:encased_chain_cogwheel')
    e.shaped('pneumaticcraft:pressure_gauge_module', [
        ' ms', 
        'rpr',
        ' f '
    ], {
        r: 'minecraft:redstone',
        m:'pneumaticcraft:pressure_gauge',
        s: '#ico:tool/screwdriver',
        p: 'pneumaticcraft:pressure_tube',
        f: 'kubejs:compressed_framing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:pressure_gauge_module')
    e.shaped('pneumaticcraft:redstone_module', [
        ' rs', 
        'pfp',
        ' R '
    ], {
        r: 'minecraft:redstone',
        p: 'pneumaticcraft:pressure_tube',
        f: 'kubejs:compressed_framing',
        R: 'minecraft:repeater',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:redstone_module')
    e.shaped('pneumaticcraft:regulator_tube_module', [
        '  s', 
        'SpS',
        ' f '
    ], {
        S: 'pneumaticcraft:safety_tube_module',
        p: 'pneumaticcraft:pressure_tube',
        s: '#ico:tool/screwdriver',
        f: 'kubejs:compressed_framing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:regulator_tube_module')
    e.shaped('pneumaticcraft:safety_tube_module', [
        ' gs', 
        'lpl',
        ' f '
    ], {
        s: '#ico:tool/screwdriver',
        l: 'minecraft:lever',
        p: 'pneumaticcraft:pressure_tube',
        g: 'pneumaticcraft:pressure_gauge',
        f: 'kubejs:compressed_framing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:safety_tube_module')
    e.shaped('pneumaticcraft:thermostat_module', [
        ' ms', 
        ' h ',
        'pfp'
    ], {
        m: 'pneumaticcraft:manometer',
        s: '#ico:tool/screwdriver',
        h: 'pneumaticcraft:heat_pipe',
        p: 'pneumaticcraft:pressure_tube',
        f: 'kubejs:compressed_framing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermostat_module')
    e.shaped('pneumaticcraft:elevator_base', [
        'hsS', 
        'cCc',
        'prp'
    ], {
        S: '#ico:tool/screwdriver',
        h: '#ico:tool/hammer',
        s: 'pneumaticcraft:compressed_stone',
        c: 'pneumaticcraft:pneumatic_cylinder',
        C: 'compressedcreativity:compressed_iron_casing',
        p: 'pneumaticcraft:plastic',
        r:  'kubejs:compressed_iron_sheet'

    }).damageIngredient(Item.of('#ico:tool/screwdriver')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:elevator_base')
    e.shaped('pneumaticcraft:elevator_caller', [
        'bps', 
        'pcp',
        'bpb'
    ], {
        s: '#ico:tool/screwdriver',
        b: 'minecraft:stone_button',
        p: 'pneumaticcraft:plastic',
        c: 'compressedcreativity:compressed_iron_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:elevator_caller')
    e.shaped('pneumaticcraft:programmer', [
        'kms', 
        'pPp',
        'c c'
    ], {
        s: '#ico:tool/screwdriver',
        k: 'ducky-periphs:keyboard_block',
        m: 'computercraft:monitor_advanced',
        p: 'pneumaticcraft:plastic',
        P: 'pneumaticcraft:printed_circuit_board',
        c: 'kubejs:carbon_steel_rod'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:programmer')
    //piratesee didn't wanted to do Bipplane and Warship so i had to 😭
    e.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [ 
        '   e   ',
        'ppHEHpp',
        ' cpPpc ',
        '   s   ',
        '  php  ',
        ], {
          s: '#create:seats',
          e: 'immersive_aircraft:enhanced_propeller',
          p: 'pneumaticcraft:plastic',
          H: 'immersive_aircraft:hull_reinforcement',
          h: 'immersive_aircraft:hull',
          c: 'kubejs:carbon_steel_rod',
          P: 'kubejs:high_pressure_plate',
          E: 'immersive_aircraft:engine'
      }).id('ico:biplane')
      e.recipes.create.mechanical_crafting('immersive_aircraft:warship', [ 
        ' hrscsrh ',
        'pssssssss',
        'hchjhjhch',
        'pssssssss',
        ' hreAerh ',
        '   pSC   ',
        '   HHH   '
        ], {
          h: 'kubejs:high_pressure_plate',
          r: 'kubejs:rubber',
          s: 'immersive_aircraft:sail',
          c: 'kubejs:carbon_steel_rod',
          p: 'immersive_aircraft:propeller',
          j: 'minecraft:copper_block',
          e: 'immersive_aircraft:engine',
          A: 'immersive_aircraft:cargo_airship',
          S: '#create:seats',
          C: 'immersive_aircraft:heavy_crossbow',
          H: 'immersive_aircraft:hull_reinforcement'
      }).id('ico:warship')
      //end of suffering
      e.shaped('create:schematicannon', [
        ' wh', 
        'lwl',
        'ses'
    ], {
        w: 'createbigcannons:wrought_iron_cannon_chamber',
        h: '#ico:tool/hammer',
        l: '#minecraft:logs',
        s: 'minecraft:smooth_stone',
        e: 'createbigcannons:wrought_iron_cannon_end'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:schematicannon')
    e.shaped('immersive_aircraft:hull', [
        'lal', 
        'www',
        'lal'
    ], {
        l: '#minecraft:logs',
        a: 'create:andesite_casing',
        w: 'kubejs:wrought_iron_sheet',
    }).id('ico:hull')
    e.shaped('immersive_aircraft:hull_reinforcement', [
        'ccc', 
        'hhh',
        'ccc'
    ], {
        c: 'kubejs:carbon_steel_ingot',
        h: 'immersive_aircraft:hull'
    }).id('ico:hull_reinforcement')
    e.shaped('create:schematic_table', [
        'SSS', 
        'hsf',
        ' s '
    ], {
        s: 'minecraft:smooth_stone',
        S: '#minecraft:wooden_slabs',
        h: '#ico:tool/hammer',
        f: '#ico:tool/file'
    }).damageIngredient(Item.of('#ico:tool/file')).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:schematic_table')
    e.shapeless('create:clutch', ['create:andesite_casing','create:shaft','minecraft:redstone','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:clutch')
    e.shaped('create:speedometer', [
        ' cs', 
        ' a ',
        '   '
    ], {
        a: 'create:andesite_casing',
        c: 'minecraft:compass',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:speedometer')
    e.shaped('create_connected:brass_gearbox', [
        ' cs', 
        'crc',
        ' c '
    ], {
        c: 'create:cogwheel',
        r: 'create:rotation_speed_controller',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:brass_gearbox')

    e.shapeless('create_connected:brake', ['create:andesite_casing','create:shaft','minecraft:redstone','minecraft:obsidian','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:brake')
    e.shapeless('create_connected:freewheel_clutch', ['create:andesite_casing','create:shaft','create:iron_sheet','create:cogwheel','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:freewheel_clutch')
    e.shapeless('create_connected:centrifugal_clutch', ['create:andesite_casing','create:shaft','create:iron_sheet','create:speedometer','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:centrifugal_clutch')
    e.shapeless('create_connected:overstress_clutch', ['create:andesite_casing','create:shaft','create:iron_sheet','create:electron_tube','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:overstress_clutch')
    e.shapeless('create_connected:parallel_gearbox', ['create:gearbox','create:large_cogwheel','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:parallel_gearbox')
    e.shapeless('create:adjustable_chain_gearshift', ['create:encased_chain_drive','create:electron_tube','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:adjustable_chain_gearshift')
    e.shapeless('create:gearshift', ['create:andesite_casing','create:cogwheel','minecraft:redstone','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:gearshift')
    e.shapeless('create:encased_chain_drive', ['create:andesite_casing','minecraft:iron_nugget','minecraft:iron_nugget','minecraft:iron_nugget','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:encased_chain_drive')
    
    e.shaped('quark:backpack', [ 
        'hmh',
        'hch',
        'mim'
        ], {
          m: 'born_in_chaos_v1:monster_skin',
          h: 'minecraft:leather',
          c: '#c:chests',
          i: 'minecraft:iron_ingot'
      }).id('ico:backpack')
})