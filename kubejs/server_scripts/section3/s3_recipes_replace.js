ServerEvents.recipes(e => {
	
	//removal
	
	//kinetics
	e.remove({id:'create:crafting/kinetics/propeller'})
	e.remove({id:'create:crafting/kinetics/encased_fan'})
	e.remove({id:'create:crafting/kinetics/deployer'})
	e.remove({id:'create:crafting/kinetics/mechanical_crafter'})
	e.remove({id:'create:crafting/kinetics/mechanical_arm'})

	e.remove({id:'vintageimprovements:craft/spring_coiling_machine_wheel'})
	e.remove({id:'vintageimprovements:craft/spring_coiling_machine'})
	e.remove({id:'vintageimprovements:craft/belt_grinder'})
	e.remove({id:'vintageimprovements:craft/vacuum_chamber'})
	e.remove({id:'vintageimprovements:craft/centrifuge'})
	e.remove({id:'vintageimprovements:craft/helve_hammer'})
	
	e.remove({id:'createsifter:brass_sifter'})

	e.remove({id:'create:mechanical_crafting/crushing_wheel'})

	//logistics
	e.remove({id: 'create:crafting/logistics/brass_funnel'})
	e.remove({id: 'create:crafting/logistics/brass_tunnel'})

	//components
	e.remove({id:'create:crafting/materials/electron_tube'})
	e.remove({id:'create:crafting/materials/rose_quartz'})
	e.remove({id:'create:sequenced_assembly/precision_mechanism'})

	//computer
	e.remove({id:'computercraft:computer_normal'})
	e.remove({id:'computercraft:cable'})
	e.remove({id:'computercraft:wired_modem'})
	e.remove({id:'computercraft:printer'})
	e.remove({id:'computercraft:disk_drive'})
	e.remove({id:'computercraft:speaker'})
	e.remove({id:'computercraft:monitor_normal'})
    e.remove({id:'computercraft:pocket_computer_normal'})
	
	//electric
	e.remove({id:'create_new_age:shaped/generator_coil'})
	e.remove({id:'create_new_age:shaped/carbon_brushes'})
	e.remove({id:'createaddition:crafting/capacitor_1'})
	e.remove({id:'createaddition:crafting/capacitor_2'})

	//other
	e.remove({id:'create:filling/blaze_cake'})
	e.remove({id:'pneumaticcraft:explosion_crafting/compressed_iron_ingot'})
	e.remove({id:'pneumaticcraft:explosion_crafting/compressed_iron_block'})
	e.remove({id:'pneumaticcraft:pressure_chamber/compressed_iron_ingot'})
	e.remove({id:'pneumaticcraft:pressure_chamber/compressed_iron_block'})
	
	e.remove({id: 'create_connected:sequenced_pulse_generator'})

	//train

	e.remove({id: 'create:sequenced_assembly/sturdy_sheet'})

	//recipes
	
	//kinetics
	
	e.shaped('vintageimprovements:spring_coiling_machine_wheel', [
		' AT', 
		'AIA', 
		' A '
	], {
		A: 'create:andesite_alloy',
		T: '#ico:tool/hammer',
		I: 'kubejs:wrought_iron_ingot'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:spring_coiling_machine_wheel')
	
	e.shaped('vintageimprovements:spring_coiling_machine', [
		'IT', 
		'WB', 
		'IS'
	], {
		W: 'vintageimprovements:spring_coiling_machine_wheel',
		B: 'create:brass_casing',
		S: 'create:shaft',
		T: '#ico:tool/screwdriver',
		I: 'kubejs:wrought_iron_sheet'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:spring_coiling_machine')
	
	e.shaped('vintageimprovements:vacuum_chamber', [
		' T ', 
		'SBS', 
		'IPI'
	], {
		S: 'kubejs:wrought_iron_spring',
		B: 'create:brass_casing',
		P: 'create:mechanical_pump',
		T: '#ico:tool/screwdriver',
		I: 'kubejs:carbon_steel_sheet'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:vacuum_chamber')

	e.shaped('vintageimprovements:centrifuge', [
		'STS', 
		'CBC', 
		'SHS'
	], {
		S: 'kubejs:wrought_iron_spring',
		B: 'create:brass_casing',
		C: 'kubejs:carbon_steel_ingot',
		H: 'create:shaft',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:centrifuge')

	e.shaped('create:propeller', [
		' IT', 
		'IAI',
        ' I'
	], {
		T: '#ico:tool/hammer',
		I: 'kubejs:carbon_steel_sheet',
		A: 'create:andesite_alloy'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:propeller')

	e.shaped('create:encased_fan', [
		'S ', 
		'CT', 
		'P '
	], {
		S: 'create:shaft',
		C: 'create:brass_casing',
		P: 'create:propeller',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:encased_fan')

	e.shaped('create:deployer', [
		' S ', 
		'ECT', 
		' P '
	], {
		S: 'kubejs:wooden_slide',
		C: 'create:brass_casing',
		P: 'create:brass_hand',
		E: 'create:electron_tube',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:deployer')

	e.shaped('2x create:mechanical_crafter', [
		'RE ', 
		'FCT', 
		' A '
	], {
		A: 'minecraft:amethyst_shard',
		C: 'create:brass_casing',
		E: 'create:electron_tube',
		F: 'minecraft:crafting_table',
        R: 'kubejs:redstone_cable',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_crafter')

	e.recipes.create.deploying('vintageimprovements:belt_grinder', ['create:brass_casing', 'vintageimprovements:grinder_belt'])

	e.shaped('create:mechanical_arm', [
		'BBA', 
		'B  ', 
		'MCT'
	], {
		B: 'create:brass_ingot',
		C: 'create:brass_casing',
		A: 'create:brass_hand',
		M: 'create:precision_mechanism',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_arm')

	e.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
		' AAA ',
		'AAWAA',
		'AWSWA',
		'AAWAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		W: 'kubejs:treated_wood_planks',
		S: '#forge:stone'
	})

	e.recipes.create.mechanical_crafting('createsifter:brass_sifter', [
		' A A ',
		'AFCFA',
		'WFSFW',
		' WAW '
	], {
		A: 'create:brass_sheet',
		W: 'kubejs:treated_wood_planks',
		C: 'create:brass_casing',
		S: 'createsifter:sifter',
		F: 'create:shaft'
	})

	e.recipes.create.mechanical_crafting('vintageimprovements:helve_hammer', [
		'   SS',
		'ILLLA',
		'CC SH'
	], {
		C: 'kubejs:carbon_steel_block',
		I: 'kubejs:carbon_steel_ingot',
		L: '#minecraft:logs',
		A: 'create:andesite_casing',
		S: 'kubejs:wrought_iron_spring',
		H: 'create:mechanical_bearing'
	})

	//logistics
	e.shaped('2x create:brass_funnel', [ 
		'E ',
		'AT', 
		'K '
	], {
		A: 'create:brass_ingot',
		K: 'minecraft:dried_kelp',
		E: 'create:electron_tube',
		T: '#ico:tool/hammer',
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:brass_funnel')

	e.shaped('2x create:brass_tunnel', [ 
		'E  ',
		'AAT', 
		'KK '
	], {
		A: 'create:brass_ingot',
		K: 'minecraft:dried_kelp',
		E: 'create:electron_tube',
		T: '#ico:tool/hammer',
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:brass_tunnel')

	//computer
	e.shaped('computercraft:computer_normal', [
		'LTL', 
		'ILI', 
		'ICI'
	], {
		C: 'create:brass_casing',
		L: 'kubejs:logic_circuit',
		I: 'kubejs:wrought_iron_ingot',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:computer')

    e.shaped('computercraft:pocket_computer_normal', [
		'LTL', 
		'ILI', 
		'ICI'
	], {
		C: 'create:precision_mechanism',
		L: 'kubejs:logic_circuit',
		I: 'kubejs:wrought_iron_ingot',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:pocket_computer')

	e.shaped('8x computercraft:cable', [
		' T ',
		'ARA'
	], {
		R: 'kubejs:redstone_cable',
		A: 'create:andesite_alloy',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:cable')

	e.shaped('computercraft:disk_drive', [
		'  T',
		'SRS',
		'SCS'
	], {
		R: 'kubejs:redstone_cable',
		C: 'create:brass_casing',
		S: 'kubejs:wrought_iron_sheet',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:disk_drive')

	e.shaped('computercraft:speaker', [
		'  T',
		'SDS',
		'SCS'
	], {
		D: 'minecraft:note_block',
		C: 'create:brass_casing',
		S: 'kubejs:wrought_iron_sheet',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:speaker')

	e.shaped('computercraft:printer', [
		'  T',
		'SDS',
		'SCS'
	], {
		D: '#c:dyes',
		C: 'create:brass_casing',
		S: 'kubejs:wrought_iron_sheet',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:printer')

	e.shaped('2x computercraft:wired_modem', [
		'SSS',
		'ARA',
		' T '
	], {
		R: 'kubejs:redstone_cable',
		A: 'create:andesite_alloy',
		S: 'kubejs:wrought_iron_sheet',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:wired_modem')

	e.shaped('computercraft:monitor_normal', [
		'RST',
		'SDS'
	], {
		R: 'kubejs:redstone_cable',
		D: 'kubejs:lcd_display',
		S: 'kubejs:wrought_iron_sheet',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:monitor_normal')

	//components
	e.custom({
		"type": "create:item_application",
		"ingredients": [
		  {
			"item": "kubejs:treated_wood_planks"
		  },
		  {
			"item": "kubejs:brass_framing"
		  }
		],
		"results": [
		  {
			"item": "create:brass_casing"
		  }
		]
	  })

	e.custom({
	"type":"vintageimprovements:vacuumizing",
	"ingredients": [
		{
			"item": "minecraft:redstone_block"
		},
		{
			"item": "minecraft:quartz"
		}
	],
		"results": [
		{
			"item": "create:rose_quartz",
			"count": 1
		}
	],
	"processingTime": 400	
	})
	
	e.shaped('create:electron_tube', [
		'QA', 
		'CW', 
		'IT'
	], {
		Q: 'create:polished_rose_quartz',
		C: 'create:copper_sheet',
		T: '#ico:tool/hammer',
		A: 'kubejs:aquatrine',
		W: '#forge:wires/all_metal',
		I: 'create:iron_sheet'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:electron_tube')

	e.recipes.create.mixing(Fluid.of('kubejs:creosote_oil', 400), [Fluid.of('kubejs:coal_tar', 200), Fluid.of('minecraft:water', 200)])

	e.recipes.create.filling('kubejs:treated_wood_planks', [Fluid.of('kubejs:creosote_oil', 100), '#minecraft:planks'])
    e.recipes.create.filling('kubejs:treated_wood_stairs', [Fluid.of('kubejs:creosote_oil', 100), '#minecraft:wooden_stairs'])
    e.recipes.create.filling('kubejs:treated_wood_slab', [Fluid.of('kubejs:creosote_oil', 50), '#minecraft:wooden_slabs'])

	let inter = 'create:incomplete_precision_mechanism'
	e.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(120.0),
		Item.of('create:golden_sheet').withChance(8.0),
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:gold_nugget').withChance(3.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_raw_gold').withChance(2.0),
		Item.of('kubejs:nickel_nugget').withChance(1.0),
		Item.of('minecraft:clock').withChance(1.0)
	], 'kubejs:carbon_steel_sheet', [
		e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
		e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:nickel_nugget']),
	]).transitionalItem(inter).loops(5)
	
	//electric

	e.shaped('create_new_age:carbon_brushes', [
		'ACT', 
		'OSO', 
		'ACA'
	], {
		S: 'create:shaft',
		A: 'create:andesite_alloy',
		C: 'create:copper_sheet',
		O: '#minecraft:coals',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:carbon_brushes')

	e.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
        '  S  ',
        ' CCC ',
        'SCACS',
		' CCC ',
		'  S  '
	], {
        A: 'create:andesite_alloy_block',
		C: 'minecraft:copper_ingot',
		S: 'kubejs:nickel_sheet',
	})

	inter = 'kubejs:incomplete_capacitor'
	e.recipes.create.sequenced_assembly([
		Item.of('createaddition:capacitor').withChance(16.0)
	], 'kubejs:redstone_cable', [
		e.recipes.createDeploying(inter, [inter, 'create:copper_sheet']),
		e.recipes.createDeploying(inter, [inter, '#forge:plates/zinc']),
		e.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1)

	//other
	e.recipes.create.filling('create:blaze_cake', [Fluid.of('kubejs:blaze_icing', 200), 'create:blaze_cake_base'])

	e.custom({
	"type": "pneumaticcraft:explosion_crafting",
	"input": {
		"item": 'kubejs:pressure_alloy'
	},
	"loss_rate": 10,
	"results": [
		{
		"item": "pneumaticcraft:ingot_iron_compressed"
		}
	]
	})

	e.shaped('create_connected:sequenced_pulse_generator', [
		'C T', 
		'CER', 
		'SSS'
	], {
		S: '#forge:stone',
		C: 'create:electron_tube',
		T: '#ico:tool/hammer',
		R: 'minecraft:redstone_torch',
		E: 'kubejs:logic_circuit'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:sequenced_pulse_generator')

	inter = 'kubejs:incomplete_andesite_filter' // making a variable to store the transitional item makes the code more readable
	e.recipes.create.sequenced_assembly([
		Item.of('createsifter:brass_mesh').withChance(75.0), // this is the item that will appear in JEI as the result
	],
	'kubejs:unfinished_brass_filter', [
		e.recipes.createCutting(inter, inter),
		e.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1)

	//train

	inter = 'create:unprocessed_obsidian_sheet'
	e.recipes.create.sequenced_assembly([
		Item.of('create:sturdy_sheet').withChance(120.0),
	], 'kubejs:aluminum_sheet', [
		e.recipes.createDeploying(inter, [inter, 'create:powdered_obsidian']),
		e.recipes.createFilling(inter, [inter, Fluid.of('lava', 500)]),
		e.recipes.createPressing(inter, inter),
		e.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1)

})