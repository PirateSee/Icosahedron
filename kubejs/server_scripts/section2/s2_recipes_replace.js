ServerEvents.recipes(e => {
	//removal

	//organics
	e.remove({id:'create:crafting/kinetics/belt_connector'})

	//kinetics
	e.remove({id:'create:crafting/kinetics/cogwheel'})
	e.remove({id:'create:crafting/kinetics/shaft'})
	e.remove({id:'create:cutting/andesite_alloy'})
	
	e.remove({id:'create:crafting/kinetics/large_cogwheel'})

	e.remove({id:'create:crafting/kinetics/water_wheel'})
	//e.remove({id:'create:crafting/kinetics/large_water_wheel'})
	e.remove({id:'create:crafting/kinetics/windmill_bearing'})
	e.remove({id:'create:crafting/kinetics/mechanical_press'})
	e.remove({id:'create:crafting/kinetics/mechanical_saw'})
	e.remove({id:'create:crafting/kinetics/mechanical_drill'})
	e.remove({id:'create:crafting/kinetics/mechanical_mixer'})
	e.remove({id:'create:crafting/kinetics/mechanical_bearing'})
	e.remove({id:'create:crafting/kinetics/millstone'})
	e.remove({id:'createsifter:sifter'})

	e.remove({id:'create:crafting/kinetics/fluid_pipe'})
	e.remove({id:'create:crafting/kinetics/fluid_pipe_vertical'})
	e.remove({id:'create:crafting/kinetics/mechanical_pump'})

	e.remove({id:'create_mechanical_extruder:mechanical_extruder'})

	//logistics
	e.remove({id: 'create:crafting/logistics/andesite_funnel'})
	e.remove({id: 'create:crafting/logistics/andesite_tunnel'})

	//fluids
	e.remove({id:'create:crafting/kinetics/item_drain'})
	e.remove({id:'create:crafting/kinetics/spout'})

	//equipment
	e.remove({id:'create:crafting/appliances/copper_backtank'})
	e.remove({id:'create:crafting/materials/sand_paper'})
	e.remove({id:'create:crafting/materials/red_sand_paper'})

	//other
	e.remove({id:'createlowheated:basic_burner'})
	
	e.remove({id:'minecraft:blast_furnace'})
	
	e.remove({id:'melter:melter_block'})

	e.remove({id:'createsifter:andesite_mesh'})
	e.remove({id:'createsifter:string_mesh'})

	e.remove({id:'breezy:hot_air_balloon'})

	e.remove({id:'immersive_aircraft:boiler'})
	e.remove({id:'immersive_aircraft:engine'})
	e.remove({id:'immersive_aircraft:propeller'})
	e.remove({id:'immersive_aircraft:quadrocopter'})

	//e.remove({id:'create:crafting/appliances/copper_diving_helmet'})
	//e.remove([{ type: 'minecraft:smelting', output: 'minecraft:copper_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:copper_ingot' }])

	//replacement

	e.replaceInput(
	[{ id:"minecraft:iron_helmet" },{ id:"minecraft:iron_chestplate" },{ id:"minecraft:iron_leggings" },{ id:"minecraft:iron_boots" }],
		'minecraft:iron_ingot',
		'create:iron_sheet'
	)

	//replacing recipes

	//kinetics
	//e.shapeless('destroy:coaxial_gear', ['#minecraft:planks', '#ico:tool/file']).damageIngredient(Item.of('#ico:tool/file')).id('ico:coaxial_gear')
	e.shapeless('create:cogwheel', ['#minecraft:planks', 'create:shaft', '#ico:tool/file']).damageIngredient(Item.of('#ico:tool/file')).id('ico:cogwheel')
	e.shapeless('4x create:shaft', ['create:andesite_alloy', '#ico:tool/saw']).damageIngredient(Item.of('#ico:tool/saw')).id('ico:shaft')

	e.recipes.create.cutting('5x create:shaft', 'create:andesite_alloy')
	e.recipes.create.cutting('3x create:shaft', 'kubejs:andesite_rod')
	
	e.shapeless('create:large_cogwheel', ['create:shaft', '#minecraft:planks', '#ico:tool/saw', '#minecraft:planks']).damageIngredient(Item.of('#ico:tool/saw')).id('ico:large_cogwheel')

	e.shaped('create:mechanical_press', [
		' S ', 
		'HCT', 
		' I '  
	], {
		S: 'kubejs:wooden_slide', 
		C: 'create:andesite_casing',
		H: 'create:shaft',
		T: '#ico:tool/screwdriver',
		I: 'minecraft:iron_block'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_press')

	e.shaped('create:mechanical_mixer', [
		' S ', 
		'GCT', 
		' I '
	], {
		S: 'kubejs:wooden_slide', 
		C: 'create:andesite_casing',
		T: '#ico:tool/screwdriver',
		I: 'create:whisk',
		G: 'create:cogwheel'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_mixer')

	e.shaped('create:copper_backtank', [
		'ASA', 
		'TBT', 
		' C '  
	], {
		A: 'create:andesite_alloy', 
		S: 'create:shaft',
		T: 'kubejs:kelp_strap',   
		B: 'minecraft:copper_block',
		C: 'create:mechanical_pump'
	}).id('ico:copper_backtank')

	e.shaped('create:windmill_bearing', [
		'ILI', 
		' OT', 
		' S '  
	], {
		L: '#minecraft:wooden_slabs', 
		S: 'create:shaft',
		O: '#forge:stone',
		I: 'create:iron_sheet',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:windmill_bearing')

	e.shaped('create:mechanical_bearing', [
		'L ', 
		'OT', 
		'S '  
	], {
		L: '#minecraft:wooden_slabs', 
		S: 'create:shaft',
		O: 'create:andesite_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_bearing')

	e.shaped('create:water_wheel', [
		'PPP', 
		'PAP', 
		'PPP'  
	], {
		P: '#minecraft:planks', 
		A: 'create:andesite_casing'
	}).id('ico:water_wheel')

	e.shaped('create:mechanical_saw', [
		' S', 
		' A'  
	], {
		S: 'kubejs:sawblade', 
		A: 'create:andesite_casing'
	}).id('ico:mechanical_saw')

	e.shaped('create:mechanical_drill', [
		' S', 
		' A'  
	], {
		S: 'kubejs:drill_bit', 
		A: 'create:andesite_casing'
	}).id('ico:mechanical_drill')

	e.shaped('create:item_drain', [
		'M ', 
		'CT'  
	], {
		M: 'quark:iron_grate', 
		C: 'create:copper_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:item_drain')

	e.shaped('create_mechanical_extruder:mechanical_extruder', [
		' S ', 
		'GCG', 
		' G '
	], {
		S: 'kubejs:wooden_slide', 
		C: 'create:andesite_casing',
		G: 'minecraft:glass'
	}).id('ico:mechanical_extruder')
	
	e.shaped('createsifter:sifter', [
		'AFA', 
		'CGT', 
		' S '
	], {
		F: 'kubejs:filter_framing', 
		C: 'create:andesite_casing',
		G: 'create:cogwheel',
		T: '#ico:tool/screwdriver',
		A: 'create:andesite_alloy',
		S: '#forge:stone'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:sifter')
	
	e.shaped('create:millstone', [
		'G ', 
		'CT', 
		'S '
	], {
		C: 'create:andesite_casing',
		G: 'create:cogwheel',
		T: '#ico:tool/screwdriver',
		S: '#forge:stone'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:millstone')

	//logistics

	e.shaped('2x create:andesite_funnel', [ 
		'AT', 
		'K '
	], {
		A: 'create:andesite_alloy',
		K: 'minecraft:dried_kelp',
		T: '#ico:tool/hammer',
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:andesite_funnel')

	e.shaped('2x create:andesite_tunnel', [ 
		'AAT', 
		'KK '
	], {
		A: 'create:andesite_alloy',
		K: 'minecraft:dried_kelp',
		T: '#ico:tool/hammer',
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:andesite_tunnel')

	//fluids

	e.shaped('create:empty_blaze_burner', [
		' WT', 
		'WNW',
		' W '
	], {
		W: 'kubejs:wrought_iron_ingot', 
		T: '#ico:tool/screwdriver',
		N: 'minecraft:magma_block'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:empty_blaze_burner')
	
	e.shaped('4x create:fluid_pipe', [
		' T ', 
		'SCS',
		' L '
	], {
		C: 'minecraft:copper_ingot',
		S: 'create:copper_sheet',
		L: 'kubejs:sealant',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:fluid_pipe')
	
	e.shaped('4x create:fluid_pipe', [
		' S ', 
		'LCT',
		' S '
	], {
		C: 'minecraft:copper_ingot',
		S: 'create:copper_sheet',
		L: 'kubejs:sealant',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:fluid_pipe_vertical')
	
	e.shapeless('create:mechanical_pump', ['create:cogwheel', 'create:fluid_pipe', '#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_pump')

	/*let inter = 'kubejs:incomplete_fluid_pipe' // making a variable to store the transitional item makes the code more readable
	e.recipes.create.sequenced_assembly([
		Item.of('create:fluid_pipe').withChance(1.0), // this is the item that will appear in JEI as the result
	], 'create:copper_sheet', [
		e.recipes.createPressing(inter, inter),
		e.recipes.createCutting(inter, inter)
	]).transitionalItem(inter).loops(1)*/
	
	e.shaped('create:spout', [
		'CT', 
		'KL'
	], {
		C: 'create:copper_casing', 
		K: 'minecraft:dried_kelp',
		L: 'kubejs:sealant',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:spout')
	//other

	e.shaped('createlowheated:basic_burner', [
		'AIA', 
		'IAI'  
	], {
		I: 'create:iron_sheet', 
		A: 'create:andesite_alloy'
	}).id('ico:basic_burner')

	e.custom({
		"type": "vintageimprovements:curving",
		"ingredients": [
			{
			  "item": "kubejs:wrought_iron_sheet"
			}
		],
		"results": [
			{
			  "item": "createlowheated:basic_burner"
			}
		]
	})

	e.shaped('minecraft:blast_furnace', [
		'III', 
		'IFI',
		'BBB',
	], {
		I: 'create:iron_sheet', 
		F: 'minecraft:furnace',
		B: 'kubejs:blast_brick_block'
	}).id('ico:blast_furnace')
	
	e.shaped('minecraft:blast_furnace', [
		'IB', 
		'FB',
	], {
		I: 'kubejs:wrought_iron_ingot',
		F: 'minecraft:furnace',
		B: 'kubejs:blast_brick_block'
	}).id('ico:blast_furnace_2')
	
	e.shaped('melter:melter', [
		'I I', 
		'ABA'
	], {
		I: 'create:iron_sheet',
		A: 'create:andesite_alloy',
		B: 'create:basin'
	}).id('ico:melter')
	
	e.shaped('melter:melter', [
		'I', 
		'B'
	], {
		I: 'kubejs:wrought_iron_ingot',
		B: 'create:basin'
	}).id('ico:melter_2')

	e.shapeless('create:sand_paper', ['minecraft:paper', '3x immersive_weathering:sand_layer_block']).id('ico:sand_paper')
	e.shapeless('create:red_sand_paper', ['minecraft:paper', '3x immersive_weathering:red_sand_layer_block']).id('ico:red_sand_paper')

	e.shaped('createsifter:string_mesh', [
		'SFS'
	], {
		F: 'kubejs:filter_framing', 
		S: 'minecraft:string'
	}).id('ico:string_mesh')


	e.shaped('breezy:hot_air_balloon', [
		'WWW',
		'RBR',
		'PCT'
	], {
		W: '#minecraft:wool',
		P: '#minecraft:logss',
		C: 'create:andesite_casing',
		R: '#supplementaries:ropes',
		B: 'createlowheated:basic_burner',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:hot_air_baloon')

	e.shaped('immersive_aircraft:boiler', [
		' PT',
		'PCP',
		'NFN'
	], {
		C: 'minecraft:copper_block',
		F: 'minecraft:blast_furnace',
		N: 'create:fluid_tank',
		P: 'create:fluid_pipe',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:boiler')

	e.shaped('immersive_aircraft:propeller', [
		'IIT',
		' G ',
		' II'
	], {
		G: 'create:gearshift',
		I: 'kubejs:pressed_iron',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:aircraft_propeller')

	e.shaped('immersive_aircraft:engine', [
		' IT',
		'PRP',
		'IBI'
	], {
		I: 'kubejs:pressed_iron',
		B: 'immersive_aircraft:boiler',
		P: 'createdieselgenerators:engine_piston',
		R: 'minecraft:iron_block',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:engine')

	e.shaped('immersive_aircraft:quadrocopter', [
		'PTP',
		'CEC',
		'PSP'
	], {
		E: 'immersive_aircraft:engine',
		P: 'immersive_aircraft:propeller',
		S: 'minecraft:scaffolding',
		C: 'create_connected:encased_chain_cogwheel',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:quadrocopter')
})