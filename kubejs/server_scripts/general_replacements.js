ServerEvents.recipes(e => {
	//replacing

	e.remove({id:'create:crafting/kinetics/empty_blaze_burner'})
	e.remove({id:'create:crafting/kinetics/filter'})
	e.remove({id:'create:crafting/kinetics/attribute_filter'})
	
	//components
	e.remove({id:'create:item_application/andesite_casing_from_log'})
	e.remove({id:'create:item_application/andesite_casing_from_wood'})
	e.remove({id:'create:item_application/copper_casing_from_log'})
	e.remove({id:'create:item_application/copper_casing_from_wood'})
	e.remove({id:'create:item_application/brass_casing_from_log'})
	e.remove({id:'create:item_application/brass_casing_from_wood'})

	e.remove({id:'compressedcreativity:item_application/compressed_iron_casing_from_wood'})
	e.remove({id:'compressedcreativity:item_application/compressed_iron_casing_from_log'})

	//sifting
	e.remove({id:'createsifter:sifting/dirt_string_mesh_waterlogged'})
    e.remove({id:'createsifter:sifting/gravel_andesite_mesh'})
	e.remove({id:'createsifter:sifting/gravel_advanced_brass_mesh'})
	e.remove({id:'createsifter:sifting/gravel_brass_mesh'})
	e.remove({id:'createsifter:sifting/gravel_zinc_mesh'})
	e.remove({id:'createsifter:sifting/sand_andesite_mesh'})
	e.remove({id:'createsifter:sifting/sand_string_mesh'})
	e.remove({id:'createsifter:sifting/sand_brass_mesh'})
	e.remove({id:'createsifter:sifting/sand_zinc_mesh'})
	e.remove({id:'createsifter:sifting/soul_sand_advanced_brass_mesh'})
	e.remove({id:'createsifter:sifting/soul_sand_brass_mesh'})

	//resources
	e.remove({id:'supplementaries:daub'})

	e.remove({id:'born_in_chaos_v1:diamond_thermite_shard_k'})

	e.remove({mod:'createoreexcavation'})

	//machinery
	e.remove({id:'create:crafting/kinetics/mechanical_piston'})
	e.remove({id:'create:crafting/kinetics/piston_extension_pole'})
	e.remove({id:'create:crafting/kinetics/clockwork_bearing'})
	e.remove({id:'create:crafting/kinetics/rope_pulley'})
	e.remove({id:'create:crafting/kinetics/elevator_pulley'})
	e.remove({id:'create:crafting/kinetics/hose_pulley'})
	e.remove({id:'create:crafting/kinetics/steam_engine'})
	e.remove({id:'create:crafting/kinetics/item_vault'})
	e.remove({id:'create:crafting/kinetics/fluid_tank'})
	e.remove({id:'create:crafting/kinetics/mechanical_harvester'})
	e.remove({id:'create:crafting/kinetics/mechanical_plough'})

	e.remove({id:'create_enchantment_industry:crafting/printer'})
	e.remove({id:'create_enchantment_industry:crafting/disenchanter'})
	e.remove({id:'create_enchantment_industry:crafting/enchanting_guide'})

    e.remove({id:'createconnected:crafting/kinetics/fluid_vessel'})

    e.remove({id:'quark:oddities/crafting/magnet'})

	//kinetics
	e.remove({id:'create:crafting/kinetics/gearbox'})

	//tweaks
	e.remove({id:'create:milling/cobblestone'})

	//obliterate

    e.remove({id: 'vintageimprovements:centrifugation/ender_eye'})

	//equipment
	
	/*e.remove({id:'minecraft:iron_axe'})
	e.remove({id:'minecraft:iron_pickaxe'})
	e.remove({id:'minecraft:iron_sword'})
	e.remove({id:'minecraft:iron_shovel'})
	e.remove({id:'minecraft:iron_hoe'})*/

	e.remove({id:'farmersdelight:iron_knife'})

	//e.remove({id:'minecraft:diamond_axe'})
	e.remove({id:'minecraft:diamond_pickaxe'})
	/*e.remove({id:'minecraft:diamond_sword'})
	e.remove({id:'minecraft:diamond_shovel'})
	e.remove({id:'minecraft:diamond_hoe'})*/

	e.remove({id:'farmersdelight:diamond_knife'})

	/*e.remove({id:'minecraft:golden_axe'})
	e.remove({id:'minecraft:golden_pickaxe'})
	e.remove({id:'minecraft:golden_sword'})
	e.remove({id:'minecraft:golden_shovel'})
	e.remove({id:'minecraft:golden_hoe'})*/

	e.remove({id:'farmersdelight:golden_knife'})

    e.remove({id: 'aether:gravitite_axe'})
    e.remove({id: 'aether:gravitite_pickaxe'})
    e.remove({id: 'aether:gravitite_sword'})
    e.remove({id: 'aether:gravitite_shovel'})
    e.remove({id: 'aether:gravitite_hoe'})

    e.remove({id: 'aether:zanite_axe'})
    e.remove({id: 'aether:zanite_pickaxe'})
    e.remove({id: 'aether:zanite_sword'})
    e.remove({id: 'aether:zanite_shovel'})
    e.remove({id: 'aether:zanite_hoe'})

    e.remove({id: 'aether:veridium_axe'})
    e.remove({id: 'aether:veridium_pickaxe'})
    e.remove({id: 'aether:veridium_sword'})
    e.remove({id: 'aether:veridium_shovel'})
    e.remove({id: 'aether:veridium_hoe'})

    e.remove({id: 'aether:skyjade_axe'})
    e.remove({id: 'aether:skyjade_pickaxe'})
    e.remove({id: 'aether:skyjade_sword'})
    e.remove({id: 'aether:skyjade_shovel'})
    e.remove({id: 'aether:skyjade_hoe'})

    e.remove({id: 'deeperdarker:warden_axe_smithing'})
    e.remove({id: 'deeperdarker:warden_pickaxe_smithing'})
    e.remove({id: 'deeperdarker:warden_sword_smithing'})
    e.remove({id: 'deeperdarker:warden_shovel_smithing'})
    e.remove({id: 'deeperdarker:warden_hoe_smithing'})

    e.remove({id: 'deeperdarker:resonarium_axe_smithing'})
    e.remove({id: 'deeperdarker:resonarium_pickaxe_smithing'})
    e.remove({id: 'deeperdarker:resonarium_sword_smithing'})
    e.remove({id: 'deeperdarker:resonarium_shovel_smithing'})
    e.remove({id: 'deeperdarker:resonarium_hoe_smithing'})


    e.remove({id:'vintageimprovements:scoria_recycling'})
    e.remove({id:'vintageimprovements:sulfur_nuggets_to_item'})
    e.remove({id:'vintageimprovements:sulfur_item_to_nuggets'})
    e.remove({id:'vintageimprovements:sulfur_items_to_block'})
    e.remove({id:'vintageimprovements:sulfur_block_to_items'})
    e.remove({id:'vintageimprovements:pressurizing/sulfur_dioxide'})
    e.remove({id:'vintageimprovements:pressurizing/sulfuric_acid'})
    e.remove({id:'vintageimprovements:pressurizing/sulfur_trioxide'})

    //mesh
    e.remove({id:'createsifter:advanced_brass_mesh'})
    e.remove({id:'createsifter:brass_mesh'})
    e.remove({id:'createsifter:zinc_mesh'})

    //conflict
    e.remove({id:'handcrafted:wood_plate'})
    e.remove({id:'handcrafted:terracotta_plate'})

    e.remove({id:'mekanism:storage_blocks/charcoal'})
    e.remove({id:'betterend:charcoal_block'})
	
	//replacing recipes
	
	e.shaped('create:filter', [
		'WFW'
	], {
		F: 'kubejs:filter_framing',
		W: 'minecraft:wool'
	}).id('ico:filter')

	e.shaped('create:attribute_filter', [
		'WFW'
	], {
		F: 'kubejs:brass_filter_framing',
		W: 'minecraft:wool'
	}).id('ico:attribute_filter')

	//casing
	let casing = (apply,result) => {
	e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"tag": "forge:stripped_logs"
			},
			{
				"item": apply
			}
		],
		"results": [
			{
				"item": result
			}
		]
	})
		
	e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"tag": "forge:stripped_wood"
			},
			{
				"item": apply
			}
		],
		"results": [
			{
			"item": result
			}
		]
	})
	}
	casing('kubejs:andesite_framing','create:andesite_casing')
	casing('kubejs:copper_framing','create:copper_casing')
	//casing('kubejs:brass_framing','create:brass_casing')

	e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": "minecraft:stripped_crimson_stem"
			},
			{
				"item": 'kubejs:compressed_framing'
			}
		],
		"results": [
			{
				"item": 'compressedcreativity:compressed_iron_casing'
			}
		]
	})

	e.recipes.createMixing('supplementaries:daub', [Fluid.of('minecraft:water', 100), 'minecraft:clay', '#supplementaries:straw']).id('ico:daub')

	e.shaped('kubejs:unrefined_diamond', [
	'DDD',
	'DDD',
	'DDD'
	], {
		D: 'born_in_chaos_v1:diamond_termite_shard'
	}).id('ico:diamond_termite_shard')

	e.shaped('createoreexcavation:vein_finder', [
		' EP',
		' RE',
		'S  '
	], {
		P: 'minecraft:ender_pearl',
		R: 'kubejs:andesite_rod',
		S: 'minecraft:stick',
		E: 'minecraft:redstone_dust'
	}).id('ico:vein_finder')

	//machinery

	e.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
		'HBHBH',
		'ssess',
		'PMCMI',
		'PLELT',
		'TSDST',
	], {
		C: 'create:brass_casing',
		B: 'create:brass_block',
		S: 'kubejs:wrought_iron_spring',
		I: 'create:portable_storage_interface',
		P: 'create:fluid_pipe',
		T: 'kubejs:carbon_steel_ingot',
		L: 'kubejs:logic_circuit',
		M: 'create:precision_mechanism',
		D: 'create:mechanical_drill',
		E: 'create:mechanical_bearing',
		s: 'create:sturdy_sheet',
		e: 'create:electron_tube',
		H: 'kubejs:high_pressure_plate'
	})

	e.recipes.create.mechanical_crafting('createoreexcavation:extractor', [
		'HBHBH',
		'ssess',
		'PMCMI',
		'PLELT',
		'TSDST',
	], {
		C: 'create:copper_casing',
		B: 'create:brass_block',
		S: 'kubejs:wrought_iron_spring',
		I: 'create:portable_fluid_interface',
		P: 'create:fluid_pipe',
		T: 'kubejs:carbon_steel_ingot',
		L: 'kubejs:logic_circuit',
		M: 'create:precision_mechanism',
		D: 'create:mechanical_drill',
		E: 'create:hose_pulley',
		s: 'create:sturdy_sheet',
		e: 'create:electron_tube',
		H: 'kubejs:high_pressure_plate'
	})
	
	e.shaped('create:mechanical_piston', [
		' L ', 
		'SOT', 
		' P '  
	], {
		L: '#minecraft:wooden_slabs', 
		S: 'create:shaft',
		P: 'create:piston_extension_pole',
		O: 'create:andesite_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_piston')

	e.shaped('8x create:piston_extension_pole', [
		'WT', 
		'A '
	], {
		W: 'kubejs:wooden_slide', 
		A: 'create:andesite_alloy',
		T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:piston_extension_pole')

	e.shaped('create:clockwork_bearing', [
		'L ', 
		'CT', 
		'P '  
	], {
		L: '#minecraft:wooden_slabs', 
		P: 'create:electron_tube',
		C: 'create:brass_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:clockwork_bearing')

	e.shaped('create:rope_pulley', [
		'RC ', 
		'RRT', 
		'RS '  
	], {
		R: '#supplementaries:ropes', 
		S: 'create:iron_sheet',
		C: 'create:andesite_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:rope_pulley')

	e.shaped('create:hose_pulley', [
		'RC ', 
		'RKT', 
		'RS '  
	], {
		R: '#supplementaries:ropes',
		K: 'minecraft:dried_kelp_block',
		S: 'create:copper_sheet',
		C: 'create:copper_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:hose_pulley')

	e.shaped('create:elevator_pulley', [
		'RC ', 
		'RKT', 
		'RS '  
	], {
		R: '#supplementaries:ropes',
		K: 'minecraft:dried_kelp_block',
		S: 'create:brass_sheet',
		C: 'create:brass_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:elevator_pulley')

	e.shaped('create:steam_engine', [
		'S ', 
		'RT', 
		'C '  
	], {
		S: 'create:brass_sheet',
		R: 'kubejs:carbon_steel_rod',
		C: 'minecraft:copper_block',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:steam_engine')

	e.shaped('2x create:item_vault', [
		'S ', 
		'BT', 
		'S '  
	], {
		S: 'create:iron_sheet',
		B: 'minecraft:barrel',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:item_vault')

	e.shaped('create_connected:item_silo', [
		' T ', 
		'SBS'
	], {
		S: 'create:iron_sheet',
		B: 'minecraft:barrel',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:item_silo')

	e.shaped('4x create:fluid_tank', [
		'SST', 
		'BBE', 
		'SS '  
	], {
		S: 'create:copper_sheet',
		B: 'minecraft:barrel',
		E: 'kubejs:sealant',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:fluid_tank')

    e.shaped('4x create_connected:fluid_vessel', [
		'ET ', 
		'SBS', 
		'SBS'  
	], {
		S: 'create:copper_sheet',
		B: 'minecraft:barrel',
		E: 'kubejs:sealant',
		T: '#ico:tool/hammer'
	}).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:fluid_vessel')

	e.shaped('create:mechanical_harvester', [
		'ASA', 
		'WSW',
		' CT'
	], {
		S: 'create:iron_sheet',
		A: 'create:andesite_alloy',
		W: 'kubejs:wrought_iron_spring',
		C: 'create:andesite_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_harvester')

	e.shaped('create:mechanical_plough', [
		'SSS',
		' CT'
	], {
		S: 'create:iron_sheet',
		C: 'create:andesite_casing',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:mechanical_plough')

	e.shaped('create_enchantment_industry:printer', [
		'ST',
		'KP',
		'ID'
	], {
		S: 'create:spout',
		K: 'minecraft:dried_kelp',
		P: 'kubejs:wrought_iron_spring',
		I: 'kubejs:carbon_steel_sheet',
        D: 'botania:mana_diamond',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:enchanting_printer')

	e.shaped('create_enchantment_industry:disenchanter', [
		'KT',
		'I '
	], {
		I: 'create:item_drain',
		K: '#create:sandpaper',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:disenchanter')

	e.shapeless('create_enchantment_industry:enchanting_guide', ['create:sturdy_sheet', 'pneumaticcraft:plastic', 'minecraft:enchanted_book'])

    e.shaped('quark:magnet', [
		'CIC',
		'MMM',
		'CIC'
	], {
		I: 'minecraft:iron_ingot',
        M: 'kubejs:magnetized_iron',
        C: 'minecraft:cobblestone'
	}).id('ico:magnet')

	//tweaks

	e.recipes.create.milling('minecraft:gravel', '#forge:cobblestone')


	//kinetics

	e.shaped('create:gearbox', [
		' WT',
		'WCW',
		' W '
	], {
		C: 'create:andesite_casing',
		W: 'create:cogwheel',
		T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:gearbox')

    //conflict

    e.shaped('handcrafted:wood_plate', [
        "II"
    ], {
        I: '#minecraft:wooden_slabs'
    }).id('ico:wood_plate')

    e.shaped('handcrafted:terracotta_plate', [
        "II"
    ], {
        I: 'minecraft:terracotta'
    }).id('ico:terracotta_plate')

    e.shapeless('betterend:charcoal_block', 'quark:charcoal_block').id('ico:quark_to_betterend_charcoal_block')
    e.shapeless('mekanism:block_charcoal', 'betterend:charcoal_block').id('ico:betterend_to_mekanism_charcoal_block')
    e.shapeless('quark:charcoal_block', 'mekanism:block_charcoal').id('ico:mekanism_to_quark_charcoal_block')

    e.shapeless('create_connected:copycat_slab', 'copycats:copycat_slab').id('ico:copycats_to_connected_slab')
    e.shapeless('create_connected:copycat_block', 'copycats:copycat_block').id('ico:copycats_to_connected_block')
    e.shapeless('create_connected:copycat_stairs', 'copycats:copycat_stairs').id('ico:copycats_to_connected_stairs')
    e.shapeless('create_connected:copycat_fence', 'copycats:copycat_fence').id('ico:copycats_to_connected_fence')
    e.shapeless('create_connected:copycat_fence_gate', 'copycats:copycat_fence_gate').id('ico:copycats_to_connected_fence_gate')
    e.shapeless('create_connected:copycat_wall', 'copycats:copycat_wall').id('ico:copycats_to_connected_wall')
    e.shapeless('create_connected:copycat_board', 'copycats:copycat_board').id('ico:copycats_to_connected_board')
    e.shapeless('create_connected:copycat_box', 'copycats:copycat_box').id('ico:copycats_to_connected_box')
    e.shapeless('create_connected:copycat_catwalk', 'copycats:copycat_catwalk').id('ico:copycats_to_connected_catwalk')
    e.shapeless('create_connected:copycat_beam', 'copycats:copycat_beam').id('ico:copycats_to_connected_beam')
    e.shapeless('create_connected:copycat_vertical_step', 'copycats:copycat_vertical_step').id('ico:copycats_to_connected_vertical_step')

    //lost knowledge
    e.shaped('minecraft:diamond_pickaxe', [
        'DDD',
        ' S ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'minecraft:stick'
    }).id('ico:lost_miners_knowledge')
})