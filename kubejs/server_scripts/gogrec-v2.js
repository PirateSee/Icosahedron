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
          s: 'born_in_chaos_v1:armor_plate_from_dark_metal',
          c: 'mekanism:elite_control_circuit',
          b: 'mekanism:basic_chemical_tank',
          e: 'immersive_aircraft:engine'
      }).id('ico:jetpack')
      e.remove({id:'mekanism:jetpack'})
      e.recipes.create.mechanical_crafting('mekanism:jetpack_armored', [ 
        'dtstd',
        'tojot',
        '  a  '
        ], {
          a: 'mekanism:alloy_atomic',
          t: 'kubejs:tungsten_ingot',
          s: 'mekanism:block_steel',
          o: 'mekanism:ingot_refined_obsidian',
          j: 'mekanism:jetpack',
          d: 'born_in_chaos_v1:armor_plate_from_dark_metal'
      }).id('ico:jetpack_armored')
      e.remove({id:'mekanism:jetpack_armored'})
      e.shaped('pneumaticcraft:harvesting_drone', [
        ' ts', 
        'tmt',
        'ltp'
    ], {
        t: 'pneumaticcraft:turbine_rotor',
        m: 'create:mechanical_harvester',
        s: '#ico:tool/screwdriver',
        l: 'kubejs:laser_emitter',
        p: 'pneumaticcraft:plastic'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:harvesting_drone')
    e.remove({id:'pneumaticcraft:harvesting_drone'})

    e.shaped('pneumaticcraft:logistics_drone', [
        ' ts', 
        'tmt',
        'ltp'
    ], {
        t: 'pneumaticcraft:turbine_rotor',
        m: 'pneumaticcraft:logistics_core',
        s: '#ico:tool/screwdriver',
        l: 'kubejs:laser_emitter',
        p: 'pneumaticcraft:plastic'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:logistics_drone')
    e.remove({id:'pneumaticcraft:logistics_drone'})

    e.shaped('pneumaticcraft:guard_drone', [
        ' ts', 
        'tmt',
        'ltp'
    ], {
        t: 'pneumaticcraft:turbine_rotor',
        m: 'minecraft:stone_sword',
        s: '#ico:tool/screwdriver',
        l: 'kubejs:laser_emitter',
        p: 'pneumaticcraft:plastic'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:guard_drone')
    e.remove({id:'pneumaticcraft:guard_drone'})

    e.shaped('pneumaticcraft:collector_drone', [
        ' ts', 
        'tmt',
        'ltp'
    ], {
        t: 'pneumaticcraft:turbine_rotor',
        m: 'pneumaticcraft:omnidirectional_hopper',
        s: '#ico:tool/screwdriver',
        l: 'kubejs:laser_emitter',
        p: 'pneumaticcraft:plastic'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:collector_drone')
    e.remove({id:'pneumaticcraft:collector_drone'})

    e.shaped('pneumaticcraft:drone', [
        ' ts', 
        'tmt',
        'ltp'
    ], {
        t: 'pneumaticcraft:turbine_rotor',
        m: 'pneumaticcraft:printed_circuit_board',
        s: '#ico:tool/screwdriver',
        l: 'kubejs:laser_emitter',
        p: 'pneumaticcraft:plastic'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:drone')
    e.remove({id:'pneumaticcraft:drone'})

    e.recipes.create.mechanical_crafting('pneumaticcraft:minigun', [ 
        ' d   ', 
        'ccrbb',
        'tRrbb',
        'clc  '
        ], {
          d: 'born_in_chaos_v1:armor_plate_from_dark_metal',
          c: 'pneumaticcraft:ingot_iron_compressed',
          r: 'kubejs:carbon_steel_rod',
          b: 'pneumaticcraft:cannon_barrel',
          t: 'pneumaticcraft:reinforced_air_canister',
          R: 'kubejs:rubber',
          l: 'create:analog_lever'
      }).id('ico:minigun')
      e.remove({id:'pneumaticcraft:minigun'})

      e.recipes.create.mechanical_crafting('pneumaticcraft:vortex_cannon', [ 
        'ccyc', 
        'tdfb',
        ' c  '
        ], {
          c: 'pneumaticcraft:ingot_iron_compressed',
          f: 'kubejs:compressed_framing',
          y: '#c:yellow_dyes',
          t: 'pneumaticcraft:air_canister',
          d: 'born_in_chaos_v1:pieceofdarkmetal',
          b: 'pneumaticcraft:cannon_barrel'
      }).id('ico:vortex_cannon')
      e.remove({id:'pneumaticcraft:vortex_cannon'})

      e.shaped('create:contraption_controls', [
        'bls', 
        'ec '
    ], {
        b: '#minecraft:buttons',
        s: '#ico:tool/screwdriver',
        l: 'minecraft:lever',
        e: 'create:electron_tube',
        c: 'create:andesite_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:contraption_controls')
    e.remove({id:'create:crafting/kinetics/contraption_controls'})

    e.shaped('createbigcannons:basin_foundry_lid', [
        '  h', 
        'gcg',
        'aaa'
    ], {
        a: 'create:andesite_alloy',
        h: '#ico:tool/hammer',
        g: 'minecraft:gold_nugget',
        c: 'create:copper_sheet'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:basin_foundry_lid')
    e.remove({id:'createbigcannons:basin_foundry_lid'})

    e.shaped('createbigcannons:wrought_iron_cannon_end', [
        ' w ', 
        'ppp',
        ' g '
    ], {
        w: 'kubejs:wrought_iron_ingot',
        p: 'kubejs:wrought_iron_sheet',
        g: 'minecraft:gunpowder'
    }).id('ico:wrought_iron_cannon_end')
    e.remove({id:'createbigcannons:wrought_iron_cannon_end'})

    e.shaped('createbigcannons:wrought_iron_cannon_chamber', [
        ' w ', 
        'wgw',
        ' w '
    ], {
        w: 'kubejs:wrought_iron_sheet',
        g: 'minecraft:gunpowder'
    }).id('ico:wrought_iron_cannon_chamber')
    e.remove({id:'createbigcannons:wrought_iron_cannon_chamber'})

    e.shaped('createbigcannons:cannon_mount', [
        'hSs', 
        'gwr',
        'Sc '
    ], {
        s: '#ico:tool/screwdriver',
        S: 'create:shaft',
        g: 'minecraft:gunpowder',
        h: 'kubejs:wrought_iron_sheet',
        r: 'minecraft:redstone_torch',
        c: 'create:andesite_casing',
        w: 'kubejs:wrought_iron_ingot'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:cannon_mount')
    e.remove({id:'createbigcannons:cannon_mount'})

    e.shaped('createbigcannons:yaw_controller', [
        ' Ss', 
        'gcg',
        ' s '
    ], {
        S: 'create:shaft',
        s: '#ico:tool/screwdriver',
        g: 'minecraft:gunpowder',
        c: 'create:andesite_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:yaw_controller')
    e.remove({id:'createbigcannons:yaw_controller'})

    e.shaped('createbigcannons:cannon_loader', [
        ' gs', 
        'Sc ',
        ' e '
    ], {
        e: 'create:piston_extension_pole',
        g: 'minecraft:gunpowder',
        c: 'create:andesite_casing',
        S: 'create:shaft',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:cannon_loader')
    e.remove({id:'createbigcannons:cannon_loader'})

    e.shaped('createbigcannons:worm_head', [
        'wbw', 
        ' e '
    ], {
        w: 'kubejs:wrought_iron_sheet',
        b: 'minecraft:iron_bars',
        e: 'create:piston_extension_pole'
    }).id('ico:worm_head')
    e.remove({id:'createbigcannons:worm_head'})

    e.shaped('createbigcannons:ram_head', [
        's', 
        'e',
    ], {
        s: '#minecraft:wooden_slabs',
        e: 'create:piston_extension_pole'
    }).id('ico:ram_head')
    e.remove({id:'createbigcannons:ram_head'})

    e.shaped('createbigcannons:cannon_drill', [
        ' Ps', 
        'pcp',
        ' e '
    ], {
        s: '#ico:tool/screwdriver',
        P: 'kubejs:wrought_iron_sheet',
        p: 'create:fluid_pipe',
        c: 'create:andesite_casing',
        e: 'create:piston_extension_pole'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:cannon_drill')
    e.remove({id:'createbigcannons:cannon_drill'})

    e.shaped('createbigcannons:cannon_builder', [
        'pwp', 
        'Scs',
        ' e '
    ], {
        p: 'kubejs:wrought_iron_sheet',
        w: 'kubejs:wrought_iron_ingot',
        S: 'create:shaft',
        c: 'create:andesite_casing',
        s: '#ico:tool/screwdriver',
        e: 'create:piston_extension_pole'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:cannon_builder')
    e.remove({id:'createbigcannons:cannon_builder'})

    e.shaped('mekanism:resistive_heater', [
        ' as', 
        'bcb',
        'IeI'
    ], {
        a: 'mekanism:advanced_control_circuit',
        s: '#ico:tool/screwdriver',
        b: 'minecraft:iron_bars',
        c: 'mekanism:steel_casing',
        I: 'mekanism:ingot_steel',
        e: 'mekanism:energy_tablet'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:resistive_heater')
    e.remove({id:'mekanism:resistive_heater'})

    e.shaped('mekanism:fuelwood_heater', [
        ' ps', 
        'bcb',
        'IfI'
    ], {
        b: 'minecraft:iron_bars',
        c: 'mekanism:steel_casing',
        I: 'mekanism:ingot_steel',
        f: 'minecraft:blast_furnace',
        s: '#ico:tool/screwdriver',
        p: 'mekanism:basic_control_circuit'
    }).id('ico:fuelwood_heater')
    e.remove({id:'mekanism:fuelwood_heater'})

    e.shapeless('antiqueatlas:empty_antique_atlas', ['minecraft:book', 'minecraft:compass', 'supplementaries:antique_ink']).id('ico:empty_antique_atlal')
    e.remove({id:'antiqueatlas:empty_atlas'})
    e.remove({id:'antiqueatlas:empty_atlas_new'})


    e.remove([{ type: 'minecraft:smelting', output: "mna:vinteum_dust"}, { type: 'minecraft:blasting', output: "mna:vinteum_dust" }])

    e.recipes.create.crushing(['mna:vinteum_dust', Item.of('2x mna:vinteum_dust').withChance(0.5) , Item.of('mna:vinteum_dust').withChance(0.25) , Item.of('mna:chimerite_gem').withChance(0.07)],'mna:vinteum_ore').id('ico:vinteum_ore_crushing')

    e.recipes.create.crushing(['mna:vinteum_dust', Item.of('2x mna:vinteum_dust').withChance(0.5) , Item.of('mna:vinteum_dust').withChance(0.25) , Item.of('mna:chimerite_gem').withChance(0.07)],'mna:raw_vinteum').id('ico:vinteum_raw_ore_crushing')

    e.recipes.create.crushing(['kubejs:unrefined_diamond', Item.of('kubejs:unrefined_diamond').withChance(0.75), Item.of('mna:chimerite_gem').withChance(0.35) , Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.12)],'minecraft:diamond_ore').id('ico:diamond_ore_crush1')
    e.recipes.create.crushing(['2x kubejs:unrefined_diamond', Item.of('kubejs:unrefined_diamond').withChance(0.75), Item.of('mna:chimerite_gem').withChance(0.35) , Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobbled_deepslate').withChance(0.12)],'minecraft:deepslate_diamond_ore').id('ico:diamond_ore_crush2')


    e.recipes.create.crushing(['kubejs:rough_emerald', Item.of('kubejs:rough_emerald').withChance(0.75), Item.of('mna:chimerite_gem').withChance(0.4) , Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.12)],'minecraft:emerald_ore').id('ico:diamond_emerald_crush1')
    e.recipes.create.crushing(['2x kubejs:rough_emerald', Item.of('kubejs:rough_emerald').withChance(0.75), Item.of('mna:chimerite_gem').withChance(0.4) , Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobbled_deepslate').withChance(0.12)],'minecraft:deepslate_emerald_ore').id('ico:diamond_emerald_crush2')


    e.remove({id:'create:crushing/diamond_ore'})
    e.remove({id:'create:crushing/deepslate_diamond_ore'})
    e.remove({id:'create:crushing/emerald_ore'})
    e.remove({id:'create:crushing/deepslate_emerald_ore'})

    e.remove({id:'mekanism:qio_drive_array'})
    e.remove({id:'mekanism:qio_dashboard'})
    e.remove({id:'mekanism:qio_exporter'})
    e.remove({id:'mekanism:qio_importer'})
    e.remove({id:'mekanism:qio_redstone_adapter'})
    e.remove({id:'mekanism:portable_qio_dashboard'})
    e.remove({id:'mekanism:qio_drive_base'})
    e.remove({id:'mekanism:qio_drive_hyper_dense'})
    e.remove({id:'mekanism:qio_drive_time_dilating'})
    e.remove({id:'mekanism:qio_drive_supermassive'})
    e.remove({id:'botania:ender_eye_block'})
    e.remove({id:'mekanism:personal_chest'})
    e.remove({id:'mekanism:personal_barrel'})
    e.remove({id:'mekanismgenerators:heat_generator'})
    e.remove({id:'mekanismgenerators:bio_generator'})
    e.remove({id:'mekanismgenerators:gas_burning_generator'})
    e.remove({id:'mekanismgenerators:wind_generator'})
    e.remove({id:'mekanism:dimensional_stabilizer'})



    e.shaped('botania:mana_distributor', [
        ' mf', 
        ' l ',
        'mlm'
    ], {
        m: 'botania:manasteel_ingot',
        f: '#ico:tool/file',
        l: 'botania:livingrock'
    }).damageIngredient(Item.of('#ico:tool/file')).id('ico:ana_distributor')

    e.remove({id:'botania:mana_distributor'})

    e.shaped('mekanism:logistical_sorter', [
        '  f', 
        'sps',
        'scs'
    ], {
        s: 'mekanism:ingot_steel',
        f: '#ico:tool/screwdriver',
        p: 'create:smart_fluid_pipe',
        c: 'mekanism:basic_control_circuit'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:logistical_sorter')

    e.remove({id:'mekanism:logistical_sorter'})

    e.recipes.create.mechanical_crafting('mekanism:solar_neutron_activator', [ 
        'hah', 
        'ttt',
        'ece',
        'sSs'
        ], {
          h: 'mekanism:hdpe_sheet',
          a: 'mekanismgenerators:advanced_solar_generator',
          t: 'kubejs:tungsten_ingot',
          e: 'mekanism:alloy_atomic',
          c: 'mekanism:ultimate_control_circuit',
          s: 'mekanism:ingot_steel',
          S: 'mekanism:steel_casing'
      }).id('ico:solar_neutron_activator')

      e.remove({id:'mekanism:solar_neutron_activator'})

      e.recipes.create.mechanical_crafting('mekanism:isotopic_centrifuge', [ 
        'lel', 
        'lTl',
        'cSc',
        'tet'
        ], {
          l: 'mekanism:ingot_lead',
          e: 'mekanism:alloy_atomic',
          T: 'mekanism:basic_chemical_tank',
          c: 'mekanism:ultimate_control_circuit',
          S: 'mekanism:steel_casing',
          t: 'kubejs:tungsten_ingot'
      }).id('ico:isotopic_centrifuge')

      e.remove({id:'mekanism:isotopic_centrifuge'})

      e.shaped('mekanism:electric_pump', [
        ' is', 
        'oSo',
        'opo'
    ], {
        s: '#ico:tool/screwdriver',
        i: 'mekanism:alloy_infused',
        o: 'mekanism:ingot_osmium',
        S: 'mekanism:steel_casing',
        p: 'create:mechanical_pump'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:electric_pump')

    e.remove({id:'mekanism:electric_pump'})

    e.shaped('mekanism:industrial_alarm', [
        ' rs', 
        'iwi'
    ], {
        s: '#ico:tool/screwdriver',
        r: 'minecraft:redstone_lamp',
        i: 'mekanism:ingot_lead',
        w: 'kubejs:redstone_cable'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:industrial_alarm')

    e.remove({id:'mekanism:industrial_alarm'})

    e.shapeless('mekanism:laser_tractor_beam', ['mekanism:laser_amplifier', 'create:encased_fan', '#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:laser_tractor_beam')

    e.remove({id:'mekanism:laser_tractor_beam'})

    e.shaped('mekanism:laser_amplifier', [
        ' dS', 
        'sbs',
        ' d '
    ], {
        S: '#ico:tool/screwdriver',
        d: 'minecraft:diamond',
        s: 'mekanism:ingot_steel',
        b: 'mekanism:basic_energy_cube'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:laser_amplifier')

    e.remove({id:'mekanism:laser_amplifier'})

    e.shaped('mekanism:laser', [ 
        'rtS', 
        'dsl',
        'rt '
        ], {
          r: 'mekanism:alloy_reinforced',
          t: 'mekanism:energy_tablet',
          d: 'minecraft:diamond',
          s: 'mekanism:steel_casing',
          l: 'kubejs:laser_emitter',
          S: '#ico:tool/screwdriver'
      }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:laser')

      e.remove({id:'mekanism:laser'})

      e.shaped('mekanism:security_desk', [
        ' ls', 
        'ici',
        'oCo'
    ], {
        l: 'kubejs:lcd_display',
        s: '#ico:tool/screwdriver',
        i: 'mekanism:ingot_steel',
        c: 'mekanism:basic_control_circuit',
        o: 'mekanism:ingot_osmium',
        C: 'mekanism:steel_casing'

    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:security_desk')

    e.remove({id:'mekanism:security_desk'})

    e.recipes.create.mechanical_crafting('mekanism:flamethrower', [ 
        ' hrr ', 
        'btcal',
        'abb  '
        ], {
          a: 'mekanism:alloy_infused',
          h: 'mekanism:hdpe_sheet',
          r: 'mekanism:hdpe_rod',
          b: 'mekanism:ingot_bronze',
          t: 'mekanism:basic_chemical_tank',
          c: 'mekanism:advanced_control_circuit',
          l: 'createdieselgenerators:lighter'
      }).id('ico:flamethrower')

      e.remove({id:'mekanism:flamethrower'})

      e.shaped('mekanism:seismic_reader', [
        '  s', 
        'iti',
        'ili'
    ], {
        s: '#ico:tool/screwdriver',
        i: 'mekanism:ingot_steel',
        t: 'mekanism:energy_tablet',
        l: 'minecraft:lapis_lazuli'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:seismic_reader')

    e.remove({id:'mekanism:seismic_reader'})

    e.shaped('mekanism:seismic_vibrator', [
        ' cs', 
        'lSl',
        'ipi'
    ], {
        c: 'mekanism:basic_control_circuit',
        s: '#ico:tool/screwdriver',
        l: 'minecraft:lapis_lazuli',
        S: 'mekanism:steel_casing',
        i: 'mekanism:ingot_steel',
        p: 'create:mechanical_press'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:seismic_vibrator')

    e.remove({id:'mekanism:seismic_vibrator'})

    e.recipes.create.mechanical_crafting('mekanism:modification_station', [ 
        ' hrh', 
        'siti',
        'pcCc'
        ], {
          h: 'mekanism:hdpe_sheet',
          r: 'mekanism:hdpe_rod',
          s: 'mekanism:security_desk',
          i: 'mekanism:ingot_steel',
          t: 'kubejs:tungsten_ingot',
          p: 'mekanism:pellet_polonium',
          c: 'mekanism:ultimate_control_circuit',
          C: 'mekanism:steel_casing'
      }).id('ico:modification_station')

      e.remove({id:'mekanism:modification_station'})

    /*e.shaped('quark:ender_watcher', [
        'oro', 
        'rer',
        'oro'
    ], {
        o: 'minecraft:obsidian',
        r: 'minecraft:redstone',
        e: 'minecraft:ender_pearl'
    }).id('ico:ender_watcher')

    e.remove({id:'quark:automation/crafting/ender_watcher'})*/

    e.shaped('create_new_age:heat_pipe', [
        ' h ', 
        'ctc'
    ], {
        h: '#ico:tool/hammer',
        c: 'create:copper_sheet',
        t: 'kubejs:nickel_ingot'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:heat_pipe')

    e.remove({id:'create_new_age:shaped/heat_pipe'})
    e.remove({id:'create_new_age:shaped/heat_pipe_mirror'})

    e.shaped('create_new_age:stirling_engine', [
        '  s', 
        'rfr',
        'hth'
    ], {
        s: '#ico:tool/screwdriver',
        r: 'create:shaft',
        f: 'create:flywheel',
        h: 'create_new_age:heat_pipe',
        t: 'kubejs:nickel_ingot'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:stirling_engine')

    e.remove({id:'create_new_age:shaped/stirling_engine'})

    e.shaped('create_new_age:basic_solar_heating_plate', [
        'gs', 
        'mt',
        'ht'
    ], {
        g: 'kubejs:tempered_glass',
        s: '#ico:tool/screwdriver',
        m: 'kubejs:magnetized_iron',
        t: 'kubejs:nickel_ingot',
        h: 'create_new_age:heat_pipe'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:basic_solar_heating_plate')

    e.remove({id:'create_new_age:shaped/basic_solar_plate'})

    e.shaped('create_new_age:advanced_solar_heating_plate', [
        'ws', 
        'S '
    ], {
        w: 'pneumaticcraft:solar_wafer',
        s: '#ico:tool/screwdriver',
        S: 'create_new_age:basic_solar_heating_plate'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:advanced_solar_heating_plate')

    e.remove({id:'create_new_age:shaped/advanced_solar_plate'})

    e.shaped('create_new_age:reactor_fuel_acceptor', [
        '  s', 
        'rfr',
        'rfr'
    ], {
        f: 'create:brass_funnel',
        r: 'create_new_age:reactor_casing',
        s: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:reactor_fuel_acceptor')

    e.remove({id:'create_new_age:reactor/reactor_fuel_acceptor'})

    e.shaped('create_new_age:reactor_heat_vent', [
        ' cs', 
        'rqr'
    ], {
        c: 'create:copper_sheet',
        s: '#ico:tool/screwdriver',
        r: 'create_new_age:reactor_casing',
        q: 'create_new_age:heat_pipe'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:reactor_heat_vent')

    e.remove({id:'create_new_age:reactor/reactor_heat_vent'})

    /*e.shaped('exposure:interplanar_projector', [
        'grg', 
        'rer',
        'grg'
    ], {
        g: 'minecraft:tinted_glass',
        r: 'minecraft:redstone',
        e: 'minecraft:ender_pearl'
    }).id('ico:interplanar_projector')

    e.remove({id:'exposure:interplanar_projector'})*/
    e.remove({id:'immersive_aircraft:gyrodyne'})

})
