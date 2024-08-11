ServerEvents.recipes(e => {
    //base resources
    e.remove({id: 'ae2:transform/fluix_crystals'})
    e.remove({id: 'create:compat/ae2/mixing/fluix_crystal'})
    e.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'})
    e.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'})

    e.remove({id: 'ae2:materials/annihilationcore'})
    e.remove({id: 'ae2:materials/formationcore'})
    e.remove({id: 'ae2:decorative/quartz_glass'})

    //blocks
    e.remove({id: 'ae2:network/parts/quartz_fiber'})
    e.remove({id: 'ae2:network/cables/glass_fluix'})
    e.remove({id: 'ae2:network/blocks/storage_drive'})
    e.remove({id: 'ae2:network/blocks/inscribers'})
    e.remove({id: 'ae2:network/blocks/controller'})
    e.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
    e.remove({id: 'ae2:network/parts/panels_semi_dark_monitor'})
    e.remove({id: 'ae2:network/parts/terminals'})
    e.remove({id: 'ae2:network/parts/terminals_pattern_acess'})
    e.remove({id: 'ae2:network/parts/terminals_crafting'})
    e.remove({id: 'ae2:network/parts/terminals_pattern_encoding'})

    e.remove({id: 'ae2:network/blocks/energy_cell'})
    e.remove({id: 'ae2:network/blocks/dense_energy_cell'})
    e.remove({id: 'ae2:network/parts/cable_anchor'})

    e.remove({id: 'ae2:network/parts/monitors_storage'})
    e.remove({id: 'ae2:network/parts/level_emitter'})

    e.remove({id: 'ae2:network/crafting/cpu_crafting_accelerator'})
    e.remove({id: 'ae2:network/crafting/cpu_crafting_monitor'})
    e.remove({id: 'ae2:network/crafting/1k_cpu_crafting_storage'})
    e.remove({id: 'ae2:network/crafting/4k_cpu_crafting_storage'})
    e.remove({id: 'ae2:network/crafting/16k_cpu_crafting_storage'})
    e.remove({id: 'ae2:network/crafting/64k_cpu_crafting_storage'})
    e.remove({id: 'ae2:network/crafting/256k_cpu_crafting_storage'})

    e.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    e.remove({id: 'ae2:network/blocks/interfaces_interface'})
    e.remove({id: 'ae2:network/crafting/molecular_assembler'})

    e.remove({id: 'ae2:network/blocks/io_port'})
    e.remove({id: 'ae2:network/blocks/spatial_io_port'})
    e.remove({id: 'ae2:network/blocks/spatial_io_pylon'})

    e.remove({id: 'ae2:network/parts/annihilation_plane_alt'})
    e.remove({id: 'ae2:network/parts/annihilation_plane_alt2'})

    e.remove({id: 'ae2:network/parts/formation_plane'})
    e.remove({id: 'ae2:network/parts/formation_plane_alt'})

    //cells
    e.remove({id: "ae2:network/cells/item_cell_housing"})
    e.remove({id: "ae2:network/cells/fluid_cell_housing"})
    e.remove({id: "appbot:mana_cell_housing"})
    e.remove({id: "appmek:chemical_cell_housing"})
    e.remove({id: "ae2:network/crafting/patterns_blank"})
    
    e.remove({id: "ae2:network/cells/view_cell_storage"})
    e.remove({id: "ae2:network/cells/view_cell"})

    e.remove({id: "ae2:network/cells/item_storage_cell_1k_storage"})
    e.remove({id: "ae2:network/cells/item_storage_cell_1k"})
    e.remove({id: "ae2:network/cells/item_storage_cell_4k_storage"})
    e.remove({id: "ae2:network/cells/item_storage_cell_4k"})
    e.remove({id: "ae2:network/cells/item_storage_cell_16k_storage"})
    e.remove({id: "ae2:network/cells/item_storage_cell_16k"})
    e.remove({id: "ae2:network/cells/item_storage_cell_64k_storage"})
    e.remove({id: "ae2:network/cells/item_storage_cell_64k"})
    e.remove({id: "ae2:network/cells/item_storage_cell_256k_storage"})
    e.remove({id: "ae2:network/cells/item_storage_cell_256k"})

    e.remove({id: "ae2:network/cells/fluid_storage_cell_1k_storage"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_1k"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_4k_storage"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_4k"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_16k_storage"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_16k"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_64k_storage"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_64k"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_256k_storage"})
    e.remove({id: "ae2:network/cells/fluid_storage_cell_256k"})

    e.remove({id: "appbot:mana_storage_cell_1k"})
    e.remove({id: "appbot:mana_storage_cell_4k"})
    e.remove({id: "appbot:mana_storage_cell_16k"})
    e.remove({id: "appbot:mana_storage_cell_64k"})
    e.remove({id: "appbot:mana_storage_cell_256k"})

    e.remove({id: "appmek:chemical_storage_cell_1k"})
    e.remove({id: "appmek:chemical_storage_cell_4k"})
    e.remove({id: "appmek:chemical_storage_cell_16k"})
    e.remove({id: "appmek:chemical_storage_cell_64k"})
    e.remove({id: "appmek:chemical_storage_cell_256k"})

    e.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
    e.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
    e.remove({id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
    e.remove({id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
    e.remove({id: 'ae2:network/cells/item_storage_components_cell_256k_part'})

    //upgrades
    e.remove({id: 'ae2:materials/basiccard'})
    e.remove({id: 'ae2:materials/cardredstone'})
    e.remove({id: 'ae2:materials/cardcapacity'})
    e.remove({id: 'ae2:materials/cardvoid'})
    e.remove({id: 'ae2:materials/cardcrafting'})
    e.remove({id: 'ae2:materials/advancedcard'})
    e.remove({id: 'ae2:materials/cardfuzzy'})
    e.remove({id: 'ae2:materials/cardspeed'})
    e.remove({id: 'ae2:materials/cardinverter'})
    e.remove({id: 'ae2:materials/carddistribution'})
    e.remove({id: 'ae2:materials/cardenergy'})

    //equipment
    e.remove({id: 'ae2:tools/network_memory_card'})
    e.remove({id: 'ae2:tools/network_tool'})
    e.remove({id: 'ae2:tools/matter_cannon'})
    e.remove({id: 'ae2:tools/network_color_applicator'})
    e.remove({id: 'ae2:tools/misctools_entropy_manipulator'})
    e.remove({id: 'ae2:tools/misctools_charged_staff'})

    //wireless
    e.remove({id: 'ae2:network/wireless_part'})

    //begone
    e.remove({id: 'ae2:network/crystal_resonance_generator'})
    e.remove({id: 'ae2:network/vibration_chamber'})
    e.remove({id: 'ae2:network/blocks/crystal_processing_charger'})
    e.remove({id: 'ae2:network/blocks/crank'})

    e.remove({id: 'ae2:tools/nether_quartz_sword'})
    e.remove({id: 'ae2:tools/certus_quartz_sword'})
    e.remove({id: 'ae2:tools/fluix_sword'})
    e.remove({id: 'ae2:tools/nether_quartz_pickaxe'})
    e.remove({id: 'ae2:tools/certus_quartz_pickaxe'})
    e.remove({id: 'ae2:tools/fluix_pickaxe'})
    e.remove({id: 'ae2:tools/nether_quartz_hoe'})
    e.remove({id: 'ae2:tools/certus_quartz_hoe'})
    e.remove({id: 'ae2:tools/fluix_hoe'})
    e.remove({id: 'ae2:tools/nether_quartz_shovel'})
    e.remove({id: 'ae2:tools/certus_quartz_shovel'})
    e.remove({id: 'ae2:tools/fluix_shovel'})
    e.remove({id: 'ae2:tools/nether_quartz_axe'})
    e.remove({id: 'ae2:tools/certus_quartz_axe'})
    e.remove({id: 'ae2:tools/fluix_axe'})

    e.remove({id: 'ae2:tools/fluix_upgrade_smithing_template'})

    //base resources
    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "betterend:crystal_shards"
            },
            {
                "item": "botania:quartz_mana"
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:fluix_crystal"
        }
    }).id('ico:fluix_crstals_transform')

    e.recipes.create.mixing('2x ae2:fluix_crystal', ['ae2:charged_certus_quartz_crystal', 'betterend:crystal_shards', 'botania:quartz_mana', Fluid.of('water', 1000)]).id('ico:fluix_crstals_mix')
    
    e.recipes.create.mixing('ae2:silicon', ['ae2:certus_quartz_dust', 'ae2:sky_dust', 'minecraft:redstone']).heated().id('ico:silicon')

    e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
            {
				"item": "minecraft:quartz",
			},
            {
				"item": "kubejs:tungsten_ingot",
			},
			{
				"item": "ae2:logic_processor",
			},
			{
				"item": "ae2:fluix_dust",
			}
		],
		"pressure": 4,
		"results": [
			{
		  	    "item": "ae2:annihilation_core"
			}
		]
	}).id("ico:annihilation_core")

    e.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
            {
				"tag": "forge:gems/certus_quartz",
			},
            {
				"item": "kubejs:tungsten_ingot",
			},
			{
				"item": "ae2:logic_processor",
			},
			{
				"item": "ae2:fluix_dust",
			}
		],
		"pressure": 4,
		"results": [
			{
		  	    "item": "ae2:formation_core"
			}
		]
	}).id("ico:formation_core")

    e.recipes.create.compacting('ae2:quartz_glass', [Fluid.of('kubejs:molten_glass', 100), 'ae2:certus_quartz_dust'])

    e.recipes.create.compacting('kubejs:fluix_sheet', '2x ae2:fluix_crystal')

    //blocks

    //wire
    let inter = 'kubejs:incomplete_heat_pipe'
	e.recipes.create.sequenced_assembly([
		Item.of('2x ae2:quartz_fiber').withChance(16.0)
	], 'ae2:certus_quartz_dust', [
		e.recipes.createDeploying(inter, [inter, 'kubejs:tempered_glass']),
        e.recipes.createDeploying(inter, [inter, 'minecraft:quartz']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:quartz_fiber")

    e.recipes.createDeploying('ae2:fluix_glass_cable', ['ae2:quartz_fiber', 'ae2:fluix_crystal'])

    e.recipes.createDeploying('ae2:fluix_covered_cable', ['ae2:fluix_glass_cable', '#minecraft:wool'])

    //network
    e.shaped('ae2:drive', [
		' ET',
		'FEF',
        'USU'
	], {
        E: 'ae2:engineering_processor',
		F: 'ae2:fluix_glass_cable',
		U: 'kubejs:tungsten_ingot',
        S: 'mekanism:advanced_control_circuit',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:drive')

    e.shaped('ae2:inscriber', [
		'SUS',
		'FLT',
        'SUS'
	], {
		F: 'ae2:fluix_crystal',
		U: 'kubejs:tungsten_ingot',
        S: 'mekanism:ingot_steel',
        L: 'kubejs:laser_emitter',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:inscriber')

    e.recipes.create.mechanical_crafting('ae2:controller', [
		'UIIIU',
        'IFGFI',
        'IGCGI',
        'IFGFI',
        'UIIIU'
	], {
		F: 'ae2:fluix_crystal',
		U: 'kubejs:tungsten_ingot',
        I: 'betterend:thallasium_ingot',
        G: 'ae2:quartz_glass',
        C: 'mekanism:elite_control_circuit'
	}).id('ico:controller')

    e.shaped('ae2:energy_acceptor', [
		' ET',
		'ICI',
        'IGI'
	], {
		E: 'createaddition:portable_energy_interface',
        I: 'betterend:thallasium_ingot',
        C: 'kubejs:lithium_ion_cell',
        G: 'ae2:quartz_glass',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:energy_acceptor')

    e.shaped('ae2:pattern_provider', [
		' KT',
		'FCA',
        'III'
	], {
        I: 'betterend:thallasium_ingot',
        F: 'ae2:formation_core',
        A: 'ae2:annihilation_core',
        C: 'create:mechanical_crafter',
        K: 'ae2:calculation_processor',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:pattern_provider')

    e.shaped('ae2:interface', [
		' KT',
		'FCA',
        'III'
	], {
        I: 'betterend:thallasium_ingot',
        F: 'ae2:formation_core',
        A: 'ae2:annihilation_core',
        C: '#forge:glass',
        K: 'ae2:logic_processor',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:interface')

    e.shaped('ae2:molecular_assembler', [
		' GT',
		'FCA',
        'IGI'
	], {
        I: 'kubejs:tungsten_ingot',
        F: 'ae2:formation_core',
        A: 'ae2:annihilation_core',
        C: 'create:mechanical_crafter',
        G: 'ae2:quartz_glass',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:molecular_assembler')

    e.recipes.createDeploying('ae2:annihilation_plane', ['kubejs:fluix_sheet', 'ae2:annihilation_core'])
    e.recipes.createDeploying('ae2:formation_plane', ['kubejs:fluix_sheet', 'ae2:formation_core'])

    e.shaped('ae2:spatial_pylon', [
		' GT',
		'CAC',
        'GFG'
	], {
        F: 'kubejs:fluix_sheet',
        A: 'mekanism:alloy_reinforced',
        G: 'ae2:quartz_glass',
        C: 'ae2:fluix_glass_cable',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:spatial_pylon')

    e.shaped('ae2:spatial_io_port', [
		' AT',
		'CPC',
        'GEG'
	], {
        E: 'ae2:engineering_processor',
        A: 'mekanism:ultimate_control_circuit',
        G: 'kubejs:tungsten_ingot',
        C: 'ae2:fluix_glass_cable',
        P: 'ae2:io_port',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:spatial_io_port')

    e.shaped('ae2:io_port', [
		' AT',
		'CPC',
        'GEG'
	], {
        E: 'ae2:logic_processor',
        A: 'mekanism:basic_control_circuit',
        G: 'kubejs:tungsten_ingot',
        C: 'ae2:drive',
        P: 'ae2:fluix_glass_cable',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:io_port')

    //monitor
    inter = 'kubejs:incomplete_screen'
	e.recipes.create.sequenced_assembly([
		Item.of('2x ae2:semi_dark_monitor').withChance(16.0)
	], 'create:electron_tube', [
        e.recipes.createDeploying(inter, [inter, 'minecraft:glowstone']),
        e.recipes.createDeploying(inter, [inter, 'ae2:quartz_glass']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:semi_dark_monitor")

    inter = 'kubejs:incomplete_screen'
	e.recipes.create.sequenced_assembly([
		Item.of('ae2:terminal').withChance(16.0)
	], '#ae2:illuminated_panel', [
        e.recipes.createDeploying(inter, [inter, 'ae2:formation_core']),
        e.recipes.createDeploying(inter, [inter, 'ae2:annihilation_core']),
		e.recipes.createPressing(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'ae2:logic_processor']),
        e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:printed_circuit_board']),
	]).transitionalItem(inter).loops(1).id("ico:terminal")

    inter = 'kubejs:incomplete_screen'
	e.recipes.create.sequenced_assembly([
		Item.of('ae2:crafting_terminal').withChance(16.0)
	], 'ae2:terminal', [
        e.recipes.createDeploying(inter, [inter, 'ae2:molecular_assembler']),
		e.recipes.createPressing(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'ae2:calculation_processor']),
	]).transitionalItem(inter).loops(1).id("ico:crafting_terminal")

    e.recipes.createDeploying('ae2:pattern_encoding_terminal', ['ae2:crafting_terminal', 'ae2:engineering_processor'])

    inter = 'kubejs:incomplete_screen'
	e.recipes.create.sequenced_assembly([
		Item.of('ae2:pattern_acess_terminal').withChance(16.0)
	], '#ae2:illuminated_panel', [
        e.recipes.createDeploying(inter, [inter, '#ae2:pattern_provider']),
		e.recipes.createPressing(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'ae2:engineering_processor']),
	]).transitionalItem(inter).loops(1).id("ico:pattern_acess_terminal")

    e.recipes.create.mechanical_crafting('ae2:energy_cell', [
		'C   C',
        ' GFG ',
        'IFAFI',
        ' GFG ',
        'C   C'
	], {
		F: 'ae2:fluix_dust',
        I: 'kubejs:lithium_ion_cell',
        A: 'createaddition:accumulator',
        G: 'ae2:quartz_glass',
        C: '#forge:gems/certus_quartz'
	}).id('ico:energy_cell')

    e.recipes.create.mechanical_crafting('ae2:dense_energy_cell', [
        'EEE',
        'EAE',
        'EEE'
	], {
		A: 'ae2:calculation_processor',
        E: 'ae2:energy_cell',
	}).id('ico:dense_energy_cell')

    e.recipes.create.cutting('4x ae2:cable_anchor', '#ae2:metal_ingots')

    e.recipes.createDeploying('ae2:level_emitter', ['ae2:calculation_processor', 'create:electron_tube'])
    e.recipes.createDeploying('ae2:storage_monitor', ['#ae2:illuminated_panel', 'ae2:level_emitter'])

    //craft
    e.recipes.createDeploying('ae2:crafting_accelerator', ['ae2:crafting_unit', 'ae2:engineering_processor'])
    e.recipes.createDeploying('ae2:crafting_monitor', ['ae2:storage_monitor', 'ae2:engineering_processor'])
    e.recipes.createDeploying('ae2:1k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('ae2:4k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('ae2:16k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('ae2:64k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('ae2:256k_crafting_storage', ['ae2:crafting_unit', 'ae2:cell_component_256k'])

    //cells

    e.shaped('ae2:item_cell_housing', [
		' UT',
		'GCG',
        'BBB'
	], {
        G: 'ae2:quartz_glass',
		B: 'kubejs:carbon_steel_sheet',
        C: '#forge:gems/certus_quartz',
        U: 'kubejs:tungsten_ingot',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:item_cell_housing')

    e.shaped('ae2:fluid_cell_housing', [
		' UT',
		'GCG',
        'BBB'
	], {
        G: 'ae2:quartz_glass',
		B: 'kubejs:cupronickel_sheet',
        C: '#forge:gems/certus_quartz',
        U: 'kubejs:tungsten_ingot',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:fluid_cell_housing')

    e.shaped('appbot:mana_cell_housing', [
		' UT',
		'GCG',
        'BBB'
	], {
        G: 'ae2:quartz_glass',
		B: 'botania:manasteel_ingot',
        C: 'botania:gaia_ingot',
        U: 'kubejs:tungsten_ingot',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mana_cell_housing')

    e.shaped('appmek:chemical_cell_housing', [
		' UT',
		'GCG',
        'BBB'
	], {
        G: 'ae2:quartz_glass',
		B: 'mekanism:ingot_osmium',
        C: '#forge:gems/certus_quartz',
        U: 'kubejs:tungsten_ingot',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:chemical_cell_housing')

    e.shaped('ae2:blank_pattern', [
		'  T',
		'GCG',
        'BBB'
	], {
        G: 'ae2:quartz_glass',
		B: 'kubejs:wrought_iron_ingot',
        C: '#forge:gems/certus_quartz',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:blank_pattern')

    e.shaped('ae2:view_cell', [
		'  T',
		'GCG',
        'BBB'
	], {
        G: 'ae2:quartz_glass',
		B: 'kubejs:pig_iron_ingot', 
        C: '#forge:gems/certus_quartz',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:view_cell')

    e.recipes.create.mechanical_crafting('ae2:cell_component_1k', [
        'GICIG',
        'GCLCG',
        'GICIG'
	], {
		L: 'ae2:logic_processor',
        I: 'ae2:sky_dust',
        G: 'ae2:quartz_glass',
        C: '#forge:gems/certus_quartz'
	}).id('ico:cell_component_1k')

    e.recipes.create.mechanical_crafting('ae2:cell_component_4k', [
        'GILIG',
        'GEFEG',
        'GIEIG'
	], {
		L: 'ae2:calculation_processor',
        I: 'kubejs:cupronickel_ingot',
        G: 'ae2:quartz_glass',
        E: 'ae2:cell_component_1k',
        F: 'ae2:sky_stone_tank'
	}).id('ico:cell_component_4k')

    e.recipes.create.mechanical_crafting('ae2:cell_component_16k', [
        'GILIG',
        'GEFEG',
        'GIEIG'
	], {
		L: 'ae2:calculation_processor',
        I: 'kubejs:cupronickel_ingot',
        G: 'ae2:quartz_glass',
        E: 'ae2:cell_component_4k',
        F: 'ae2:sky_stone_tank'
	}).id('ico:cell_component_16k')

    e.recipes.create.mechanical_crafting('ae2:cell_component_64k', [
        'GILIG',
        'GEFEG',
        'GIEIG'
	], {
		L: 'ae2:calculation_processor',
        I: 'kubejs:tungsten_ingot',
        G: 'ae2:quartz_glass',
        E: 'ae2:cell_component_16k',
        F: 'ae2:fluix_dust'
	}).id('ico:cell_component_64k')

    e.recipes.create.mechanical_crafting('ae2:cell_component_256k', [
        'GILIG',
        'GEFEG',
        'GIEIG'
	], {
		L: 'ae2:calculation_processor',
        I: 'kubejs:refined_tungsten',
        G: 'ae2:quartz_glass',
        E: 'ae2:cell_component_64k',
        F: 'ae2:fluix_dust'
	}).id('ico:cell_component_256k')

    e.recipes.createDeploying('ae2:item_storage_cell_1k', ['ae2:item_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('ae2:item_storage_cell_4k', ['ae2:item_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('ae2:item_storage_cell_16k', ['ae2:item_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('ae2:item_storage_cell_64k', ['ae2:item_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('ae2:item_storage_cell_256k', ['ae2:item_cell_housing', 'ae2:cell_component_256k'])

    e.recipes.createDeploying('ae2:fluid_storage_cell_1k', ['ae2:fluid_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_4k', ['ae2:fluid_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_16k', ['ae2:fluid_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_64k', ['ae2:fluid_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('ae2:fluid_storage_cell_256k', ['ae2:fluid_cell_housing', 'ae2:cell_component_256k'])

    e.recipes.createDeploying('appbot:mana_storage_cell_1k', ['appbot:mana_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_4k', ['appbot:mana_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_16k', ['appbot:mana_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_64k', ['appbot:mana_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('appbot:mana_storage_cell_256k', ['appbot:mana_cell_housing', 'ae2:cell_component_256k'])

    e.recipes.createDeploying('appmek:chemical_storage_cell_1k', ['appmek:chemical_cell_housing', 'ae2:cell_component_1k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_4k', ['appmek:chemical_cell_housing', 'ae2:cell_component_4k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_16k', ['appmek:chemical_cell_housing', 'ae2:cell_component_16k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_64k', ['appmek:chemical_cell_housing', 'ae2:cell_component_64k'])
    e.recipes.createDeploying('appmek:chemical_storage_cell_256k', ['appmek:chemical_cell_housing', 'ae2:cell_component_256k'])

    //cards
    e.recipes.createDeploying('ae2:redstone_card', ['ae2:basic_card', 'minecraft:redstone_torch'])
    e.recipes.createDeploying('ae2:capacity_card', ['ae2:basic_card', '#forge:gems/certus_quartz'])
    e.recipes.createDeploying('ae2:void_card', ['ae2:basic_card', 'ae2:calculation_processor'])
    e.recipes.createDeploying('ae2:crafting_card', ['ae2:basic_card', 'quark:crafter'])

    e.recipes.createDeploying('ae2:fuzzy_card', ['ae2:advanced_card', '#minecraft:wool'])
    e.recipes.createDeploying('ae2:speed_card', ['ae2:advanced_card', 'ae2:fluix_crystal'])
    e.recipes.createDeploying('ae2:inverter_card', ['ae2:advanced_card', 'minecraft:redstone_torch'])
    e.recipes.createDeploying('ae2:energy_card', ['ae2:advanced_card', 'ae2:dense_energy_cell'])
    e.recipes.createDeploying('ae2:equal_distribution_card', ['ae2:advanced_card', 'ae2:calculation_processor'])

    //tools
    inter = 'kubejs:incomplete_screen'
	e.recipes.create.sequenced_assembly([
		Item.of('ae2:memory_card').withChance(16.0)
	], 'ae2:calculation_processor', [
        e.recipes.createDeploying(inter, [inter, 'minecraft:gold_ingot']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:redstone_cable']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:memory_card")

    e.shapeless('ae2:network_tool', ['ae2:calculation_processor', 'pneumaticcraft:printed_circuit_board', '#ae2:quartz_wrench', '#ae2:illuminated_panel']).id('ico:network_tool')

    e.recipes.create.mechanical_crafting('ae2:matter_cannon', [
        'SFSB',
        'KC  ',
        'S   '
    ], {
        C: 'ae2:energy_cell',
        K: 'ae2:cell_component_4k',
        F: 'ae2:formation_core',
        S: 'mekanism:ingot_steel',
        B: 'pneumaticcraft:cannon_barrel'
    }).id('ico:matter_cannon')

    e.recipes.create.mechanical_crafting('ae2:color_applicator', [
        '  S  ',
        ' FS  ',
        'SSC  ',
        '   K ',
        '    S'
    ], {
        C: 'ae2:energy_cell',
        K: 'ae2:cell_component_4k',
        F: 'ae2:formation_core',
        S: 'mekanism:ingot_steel',
    }).id('ico:color_applicator')

    e.shaped('ae2:charged_staff', [
		'C ',
		' I'
	], {
        C: 'ae2:charged_certus_quartz_crystal',
        I: '#forge:rods/all_metal'
	}).id('ico:charged_staff')

    e.recipes.create.mechanical_crafting('ae2:entropy_manipulator', [
        'F   ',
        'EC  ',
        '  S ',
        '   S'
    ], {
        C: 'ae2:energy_cell',
        F: 'ae2:fluix_crystal',
        E: 'ae2:engineering_processor',
        S: 'mekanism:ingot_steel',
    }).id('ico:entropy_manipulator')

    //wireless
    e.shaped('ae2:wireless_receiver', [
		' PT',
		'UOU',
        ' U '
	], {
        U: 'kubejs:tungsten_ingot',
        P: 'ae2:fluix_pearl',
        O: 'mekanism:polonium_pellet',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:wireless_receiver')

    //alternate
    e.recipes.create.mixing('2x ae2:sky_dust', ['ae2:sky_dust', '6x betterend:violecite']).id('ico:sky_stone_violecite')
    e.recipes.create.mixing('2x ae2:sky_dust', ['ae2:sky_dust', '6x betterend:umbralith']).id('ico:sky_stone_umbralith')

    e.recipes.create.milling('4x betterend:crystal_shards', 'betterend:aurora_crystal').id('ico:aurora_crystal_milling')

    e.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "minecraft:compass",
            "count": 1
        },
        "result": {
            "item": "ae2:meteorite_compass",
            "count": 1
        },
        "energy": 16000,
        "maxChargeRate": 400
    }).id("ico:meteorite_compass_tesla")
})