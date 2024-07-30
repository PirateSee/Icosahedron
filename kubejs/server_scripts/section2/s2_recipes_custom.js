ServerEvents.recipes(e => {  
	//new recipes
  
	//organic
	e.recipes.create.cutting("kubejs:tunnel_flap", "minecraft:dried_kelp")

	//stone
	e.shaped('kubejs:blast_brick_block', [
		'BB', 
		'BB'  
	], {
		B: 'kubejs:blast_brick'
	}).id('ico:blast_brick_block')
	
  
	//andesite
	e.shaped('kubejs:andesite_framing', [
		'AIT', 
		'IA '  
	], {
		I: 'minecraft:iron_nugget',
		A: 'create:andesite_alloy',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:andesite_framing')

	e.shaped('kubejs:filter_framing', [
		'IT', 
		'SA'  
	], {
		A: 'kubejs:andesite_framing', 
		S: '#minecraft:planks',
		I: 'create:iron_sheet',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:filter_framing')

	e.shaped('kubejs:unfinished_andesite_filter', [
		'SFS'
	], {
		F: 'kubejs:filter_framing', 
		S: 'kubejs:andesite_rod'
	}).id('ico:unfinished_andesite_filter')

	//wooden

	e.shaped('kubejs:wooden_slide', [
		'ST', 
		'W ',
		'I '
	], {
		S: 'create:shaft',
		W: '#forge:stripped_logs',
		I: 'minecraft:iron_ingot',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:wooden_slide')

	//copper
	e.shaped('kubejs:copper_framing', [
		'AIT', 
		'IA '  
	], {
		I: 'minecraft:iron_nugget',
		A: 'create:copper_sheet',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:copper_framing')

	//metal

	e.shaped('kubejs:sawblade', [
		'iIi', 
		'IAI'
	], {
		I: 'create:iron_sheet',
		i: 'minecraft:iron_nugget',
		A: 'create:andesite_alloy'
	}).id('ico:sawblade')

	e.shaped('kubejs:drill_bit', [
		'iIi',
		'IGI', 
		'GAG'  
	], {
		I: 'kubejs:wrought_iron_sheet',
		i: 'minecraft:iron_nugget',
		G: 'kubejs:wrought_iron_ingot',
		A: 'create:andesite_alloy'
	}).id('ico:drill_bit')
	
	//create processes

	e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "create:andesite_alloy"
		},
		"result": {
			"item": "kubejs:andesite_rod",
			"count": 2
		}
	})

	e.recipes.createCompacting('kubejs:kelp_sheet','6x dried_kelp')

	e.recipes.createCutting('create:belt_connector','kubejs:kelp_sheet')
	e.recipes.createCutting('kubejs:kelp_strap','create:belt_connector')

	let inter = 'kubejs:incomplete_andesite_filter' // making a variable to store the transitional item makes the code more readable
	e.recipes.create.sequenced_assembly([
		Item.of('createsifter:andesite_mesh').withChance(75.0), // this is the item that will appear in JEI as the result
	],
	'kubejs:unfinished_andesite_filter', [
		e.recipes.createCutting(inter, inter),
		e.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1)
	
	//blast brick
	
	e.custom({
		"type": "create:mixing",
		"ingredients": [
			{
			  "item": "minecraft:clay_ball"
			},
			{
			  "item": "kubejs:andesite_alloy_dust"
			},
			{
			  "item": "supplementaries:ash",
			  "count": 2
			}
		],
		"results": [
			{
			  "item": "kubejs:blast_brick_dust",
			  "count": 1
			}
		],
		"heatRequirement": "lowheated"
	})
	
	e.smelting('kubejs:blast_brick', 'kubejs:blast_brick_dust')
	e.blasting('kubejs:blast_brick', 'kubejs:blast_brick_dust')
	
	e.recipes.createMilling('kubejs:blast_brick_dust', 'kubejs:blast_brick')
	
	e.shaped('kubejs:unfired_ingot_mold', [
		' B ', 
		'BIB',
		' B '
	], {
		B: 'kubejs:blast_brick_dust',
		I: '#c:ingots',
	}).id('ico:unfired_ingot_mold')
	
	e.shaped('kubejs:unfired_nugget_mold', [
		' B ', 
		'BIB',
		' B '
	], {
		B: 'kubejs:blast_brick_dust',
		I: '#c:nuggets',
	}).id('ico:unfired_nugget_mold')
	
	e.smelting('kubejs:ingot_mold', 'kubejs:unfired_ingot_mold')
	e.blasting('kubejs:nugget_mold', 'kubejs:unfired_nugget_mold')

	//sealant
	e.recipes.createMixing('kubejs:sealant', ['2x supplementaries:daub', '6x minecraft:mud'])

	//magic
	e.recipes.createMilling('5x minecraft:red_dye', 'kubejs:cadmium')
})