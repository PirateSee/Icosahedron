ServerEvents.recipes(e => {
    //e.remove({id:''})
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
})