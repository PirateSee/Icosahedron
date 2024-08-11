ServerEvents.recipes(e => {
	//obliteration
	//e.recipes.remove({output:''})

	//leather tanning
	e.campfireCooking('minecraft:leather', 'minecraft:rabbit_hide').id('ico:leather_from_rabbit')
	e.campfireCooking('2x minecraft:leather', 'cold_sweat:hoglin_hide').id('ico:leather_from_hoglin')
	
	
	//melting
	//e.recipes.melterMelting(Fluid.of('minecraft:water', 1000),"minecraft:ice").processingTime(500).minimumHeat(1)
	
	//e.recipes.melterMelting(Fluid.of('minecraft:water', 1000),"minecraft:packed_ice").processingTime(750).minimumHeat(1)
	
	//e.recipes.melterMelting(Fluid.of('minecraft:water', 1000),"minecraft:blue_ice").processingTime(1000).minimumHeat(2)

	//replace blocksyouneed_luna:wrought_iron_ingot with kubejs:wrought_iron_ingot

	//e.recipes.createoreexcavation.vein('minecraft').placement(23,2,1)

    e.shaped('kubejs:wrought_iron_block', [
		'III',
		'III',
        'III'
	], {
        I: 'kubejs:wrought_iron_ingot'
	}).id('ico:wrought_iron_block')
    e.shapeless('9x kubejs:wrought_iron_ingot', 'kubejs:wrought_iron_block').id('ico:wrought_iron_block_unpacking')

    e.shaped('kubejs:pig_iron_block', [
		'III',
		'III',
        'III'
	], {
        I: 'kubejs:pig_iron_ingot'
	}).id('ico:pig_iron_block')
    e.shapeless('9x kubejs:pig_iron_ingot', 'kubejs:pig_iron_block').id('ico:pig_iron_block_unpacking')

	e.recipes.create.compacting('kubejs:carbon_steel_block', '9x kubejs:carbon_steel_ingot').id('ico:carbon_steel_block')
    e.shapeless('9x kubejs:carbon_steel_ingot', 'kubejs:carbon_steel_block').id('ico:carbon_steel_block_unpacking')
	/*e.custom({
		"type":"vintageimprovements:vibrating",
		"ingredients": [
			{
				"item": "kubejs:carbon_steel_block"
			}
		],
		"results": [
			{
				"item": "kubejs:carbon_steel_ingot",
				"count": 9
			}
		],
		"processingTime": 400
	}).id('ico:carbon_steel_block_unpacking')*/

	//slag
	e.custom({
		"type": "createsifter:sifting",
		"ingredients": [
			{
				"item": "createsifter:brass_mesh"
			},
			{
				"item": 'kubejs:soft_slag_dust'
			}
		],
		"results": [
			{
				"item": 'kubejs:zinc_grit',
				"chance": 0.02
			},
			{
				"item": 'kubejs:iron_grit',
				"chance": 0.04
			},
            {
                "item": 'mna:vinteum_dust',
                "chance": 0.25
            },
			{
				"item": 'immersive_weathering:sand_layer_block',
				"chance": 0.6
			},
            {
				"item": 'minecraft:flint',
				"chance": 0.8
			},
			{
				"item": 'create:experience_nugget',
				"chance": 0.05
			}
		],
		"processingTime": 400,
		"minimumSpeed": 32.0
	})

    e.recipes.create.milling('3x kubejs:soft_slag_dust', 'kubejs:slag')
    e.recipes.create.crushing([Item.of('minecraft:quartz').withChance(0.2), Item.of('mna:vinteum_dust').withChance(0.4), Item.of('createaddition:electrum_nugget').withChance(0.2), "minecraft:flint", Item.of('create:experience_nugget').withChance(0.1)], 'kubejs:slag')

	e.custom({
		"type":"vintageimprovements:centrifugation",
		"ingredients": [ 
			{
				"fluid": 'kubejs:slag_runoff',
                "amount": 1000
			}
		],
		"results": [ 
			{
				"item": 'kubejs:slag'
			},
			{
				"item": 'minecraft:flint'
			},
            {
                "item": 'supplementaries:ash'
            },
            {
                "fluid": "kubejs:sulfur",
                "amount": 100
            },
            {
                "fluid": "kubejs:coal_tar",
                "amount": 100
            }
		],
		"processingTime": 1500
	})

	e.recipes.create.compacting('blocksyouneed_luna:soot', 'immersive_weathering:soot')

	//extracting

	//e.recipes.createoreexcavation.vein()

	/*e.recipes.create.crushing(['minecraft:cobblestone', Item.of('minecraft:andesite').withChance(0.3), Item.of('kubejs:limonite_ore').withChance(0.2), Item.of('minecraft:copper_ore').withChance(0.05), Item.of('minecraft:gold_ore').withChance(0.02)], 'kubejs:simple_minerals')
	e.recipes.create.crushing(['minecraft:sandstone', Item.of('minecraft:terracotta').withChance(0.4), Item.of('minecraft:gold_nugget').withChance(0.02), Item.of('minecraft:gold_ore').withChance(0.1)], 'kubejs:sandy_slate')
	e.recipes.create.crushing(['minecraft:gravel', Item.of('minecraft:prismarine_shard').withChance(0.02), Item.of('minecraft:coal').withChance(0.07), Item.of('kubejs:salpherite_ore').withChance(0.15)], 'kubejs:aquastone')
	e.recipes.create.crushing(['minecraft:diorite', Item.of('minecraft:snowball').withChance(0.2), Item.of('create:copper_nugget').withChance(0.08), Item.of('minecraft:copper_ore').withChance(0.15)], 'kubejs:frigid_pebbles')
	//e.recipes.create.crushing(['minecraft:cobbled_deepslate', Item.of('kubejs:pentlandite_ore').withChance(0.08), Item.of('kubejs:hematite_ore').withChance(0.2), Item.of('kubejs:malachite_ore').withChance(0.35)], 'kubejs:igneous_rock')

	e.recipes.create.crushing(['minecraft:netherrack', Item.of('minecraft:crimson_fungus').withChance(0.7), Item.of('minecraft:gold_nugget').withChance(0.06), Item.of('kubejs:hematite_ore').withChance(0.4)], 'kubejs:crimson_extract')
	e.recipes.create.crushing(['minecraft:netherrack', Item.of('minecraft:warped_fungus').withChance(0.7), Item.of('minecraft:gold_nugget').withChance(0.06), Item.of('kubejs:malachite_ore').withChance(0.5)], 'kubejs:warped_extract')
	e.recipes.create.crushing(['minecraft:blackstone', Item.of('kubejs:sulfur').withChance(0.07), Item.of('minecraft:gold_nugget').withChance(0.12), Item.of('kubejs:malachite_ore').withChance(0.25), Item.of('kubejs:hematite_ore').withChance(0.18), Item.of('kubejs:bauxite_ore').withChance(0.1)], 'kubejs:scorched_tailings')

	e.recipes.create.crushing(['minecraft:end_stone', Item.of('create:brass_nugget').withChance(0.08), Item.of('createaddition:electrum_nugget').withChance(0.12)], 'kubejs:anomalous_clump')*/

	e.recipes.createoreexcavation.vein('{"text": "Limonite Pebbles"}', 'kubejs:limonite_ore').placement(128, 16, 63857192).biomeWhitelist('forge:overworld/in').id('ico:limonite_pebbles')
	e.recipes.createoreexcavation.drilling(['kubejs:limonite_ore', 'minecraft:cobblestone', Item.of('kubejs:smooth_pebbles').withChance(0.5)], 'ico:limonite_pebbles', 240).id('ico:limonite_pebbles_drill')

	e.recipes.createoreexcavation.vein('{"text": "Frozen Malachite"}', 'kubejs:malachite_ore').placement(64, 16, 53871362).biomeWhitelist('forge:is_cold/overworld').id('ico:frozen_copper').priority(3)
	e.recipes.createoreexcavation.drilling(['minecraft:cobblestone', 'kubejs:frosted_slate', Item.of('kubejs:smooth_pebbles').withChance(0.1), Item.of('create:copper_nugget').withChance(0.02)], 'ico:frozen_copper', 240).id('ico:frozen_copper_drill')
	
	e.recipes.createoreexcavation.vein('{"text": "Aquatic Salpherite"}', 'kubejs:sphalerite_ore').placement(64, 16, 8291831).biomeWhitelist('forge:ocean').id('ico:aquatic_sphalerite')
	e.recipes.createoreexcavation.drilling(['minecraft:sand', Item.of('minecraft:prismarine_shard').withChance(0.75), Item.of('kubejs:sphalerite_ore').withChance(0.5)], 'ico:aquatic_sphalerite', 240).id('ico:aquatic_sphalerite_drill')

	//nether
	e.recipes.createoreexcavation.vein('{"text": "Bauxite Tailings"}', 'kubejs:bauxite_ore').placement(128, 16, 2162738).biomeWhitelist('forge:the_nether/in').id('ico:bauxite_tailings')
	e.recipes.createoreexcavation.drilling(['minecraft:netherrack', 'kubejs:scorched_tailings', Item.of('kubejs:sulfur').withChance(0.02)], 'ico:bauxite_tailings', 240).id('ico:bauxite_tailings_drill').drill('kubejs:compressed_iron_drill')

    //end
    e.recipes.createoreexcavation.vein('{"text": "Ender Wolframite"}', 'kubejs:wolframite_ore').placement(128, 16, 17922462).biomeWhitelist('forge:end/in_the').id('ico:ender_wolframite')
	e.recipes.createoreexcavation.drilling(['minecraft:end_stone', Item.of('kubejs:wolframite_ore').withChance(0.5), Item.of('kubejs:uraninite_ore').withChance(0.05)], 'ico:ender_wolframite', 240).id('ico:ender_wolframite_drill').drill('kubejs:netherite_drill')

	//extracted material refinement
	e.recipes.create.crushing(['cobbled_deepslate', Item.of('minecraft:lapis_lazuli').withChance(0.3), Item.of('minecraft:redstone').withChance(0.5)], 'kubejs:smooth_pebbles')
	e.recipes.create.crushing(['quark:shale', 'minecraft:snowball', 'kubejs:malachite_ore', Item.of('kubejs:malachite_ore').withChance(0.5)], 'kubejs:frosted_slate')
	e.recipes.create.crushing(['create:scoria', Item.of('kubejs:hematite_ore').withChance(0.1), Item.of('kubejs:bauxite_ore').withChance(0.5)], 'kubejs:scorched_tailings')

	//corundum

	let corundum_processing = (color) => {
		e.recipes.create.crushing(["quark:" + color + "_corundum_cluster", Item.of("quark:" + color + "_corundum_cluster").withChance(0.75), Item.of("quark:" + color + "_corundum_cluster").withChance(0.75)], "quark:" + color + "_corundum").id("crushing_" + color + "_corundum")
		e.recipes.create.compacting("quark:" + color + "_corundum", "3x quark:" + color + "_corundum_cluster").id("compacting_" + color + "_corundum")
	}
	
	corundum_processing("red")
	corundum_processing("orange")
	corundum_processing("yellow")
	corundum_processing("green")
	corundum_processing("blue")
	corundum_processing("indigo")
	corundum_processing("violet")
	corundum_processing("white")
	corundum_processing("black")

	
	//mna

	e.remove({id:'mna:vinteum_manaweaver_wand'})
	e.remove({id:'mna:chimerite_manaweaver_wand'})
	e.remove({id:'mna:stone_runes/rune_blank'})

	e.shaped('mna:guide_book', [
		' AI', 
		' BV', 
		' AI'
	], {
		A: 'mna:arcane_compound',
		I: 'mna:vinteum_ingot',
		B: 'minecraft:writable_book',
		V: 'mna:vellum'
	}).id('ico:guide_book')

	e.shaped('mna:manaweaver_wand', [
		'TI ', 
		'DFD', 
		' S '
	], {
		T: '#ico:tool/file',
		I: 'mna:vinteum_ingot',
		D: 'mna:vinteum_dust',
		F: 'mna:ritual_focus_minor',
		S: 'minecraft:stick'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:manaweaver_wand')

	e.shaped('mna:manaweaver_wand_advanced', [
		'TCW', 
		'DFD', 
		' S '
	], {
		W: '#ico:tool/screwdriver',
		T: '#ico:tool/file',
		C: 'mna:chimerite_gem',
		D: 'mna:purified_vinteum_dust',
		F: 'mna:ritual_focus_lesser',
		S: 'betterend:leather_wrapped_stick'
	}).damageIngredient(Item.of('#ico:tool/file')).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:manaweaver_wand_advanced')

	e.shaped('mna:stone_rune_blank', [
		'ASD', 
		'SSS', 
		'DSA'
	], {
		A: 'mna:arcane_compound',
		D: 'mna:arcane_ash',
		S: '#forge:stone'
	}).id('ico:stone_rune_blank')

	e.shapeless('mna:purified_vinteum_dust', ['mna:vinteum_dust', 'mna:vinteum_dust', 'mna:arcane_compound','minecraft:glowstone_dust']).id('ico:purified_vinteum_dust')

	e.recipes.create.mechanical_crafting('mna:wellspring_pillar', [
		'SRS', 
		'PCa', 
		'MBM',
		' L ',
		' L ',
		'FLE',
		'ASW'
	], {
		S: 'mna:decoration/arcane_sandstone',
		C: 'mna:decoration/chimerite_arcane_sandstone_chiseled',
		M: 'mna:rune_ritual_metal',
		L: 'mna:decoration/chimerite_arcane_sandstone_straight',
		B: 'mna:chimerite_block',
		R: 'mna:eldrin_rift',
		F: 'mna:rune_fire',
		A: 'mna:rune_air',
		E: 'mna:rune_earth',
		W: 'mna:rune_water',
		P: 'mna:rune_projection',
		a: 'mna:rune_arcane'
	}).id('ico:wellspring_pillar')

	e.recipes.create.mixing(Fluid.of('kubejs:mana_tea', 500), [Fluid.of('minecraft:water', 500), 'minecraft:sugar', '#botania:mystical_flowers']).heated()
	e.recipes.create.filling('mna:mana_coffee', ['mna:clay_mug',Fluid.of('kubejs:mana_tea', 250)])

    //simple radio
    e.shaped('simpleradio:walkie_talkie', [
		'IT', 
		'CR',
		'C '
	], {
		T: '#ico:tool/screwdriver',
		C: 'minecraft:raw_copper',
        I: 'minecraft:iron_nugget',
        R: 'minecraft:redstone'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:walkie_talkie')

    e.shaped('simpleradio:transceiver', [
		'IT', 
		'CR',
		'C '
	], {
		T: '#ico:tool/screwdriver',
		
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:transceiver')

    e.shaped('simpleradio:transmitting_module', [
		'SCT', 
		'RRR',
	], {
		T: '#ico:tool/screwdriver',
		C: 'kubejs:carbon_steel_ingot',
        R: 'kubejs:redstone_cable',
        S: '#forge:rods/all_metal'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:transmitting_module')

    e.shaped('simpleradio:receiving_module', [
		'ECT', 
		'RRR',
	], {
		T: '#ico:tool/screwdriver',
		C: 'kubejs:carbon_steel_sheet',
        R: 'kubejs:redstone_cable',
        E: 'create:electron_tube'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:recieving_module')

    e.shaped('simpleradio:listener_module', [
		'ECT', 
		'RRR',
	], {
		T: '#ico:tool/screwdriver',
		C: 'kubejs:carbon_steel_ingot',
        R: 'kubejs:redstone_cable',
        E: 'create:brass_casing'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:listener_module')

    e.shaped('simpleradio:speaker_module', [
		'ECT', 
		'RRR',
	], {
		T: '#ico:tool/screwdriver',
		C: 'kubejs:carbon_steel_sheet',
        R: 'kubejs:redstone_cable',
        E: 'minecraft:note_block'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:speaker_module')

    e.shaped('simpleradio:transceiver', [
		' UT', 
		'RLE',
        'CSC'
	], {
		T: '#ico:tool/screwdriver',
		R: 'simpleradio:transmitting_module',
        E: 'simpleradio:receiving_module',
        L: 'simpleradio:listener_module',
        S: 'simpleradio:speaker_module',
        U: 'kubejs:logic_circuit',
        C: 'kubejs:carbon_steel_ingot'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:transceiver')

    e.shaped('simpleradio:radio', [
		'CCT', 
		'SUE'
	], {
		T: '#ico:tool/screwdriver',
        E: 'simpleradio:receiving_module',
        S: 'simpleradio:speaker_module',
        U: 'kubejs:logic_circuit',
        C: 'kubejs:carbon_steel_sheet'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:radio')

    e.shaped('simpleradio:microphone', [
		' WT', 
		'LWR',
        'nNn'
	], {
		T: '#ico:tool/screwdriver',
        R: 'simpleradio:transmitting_module',
        L: 'simpleradio:listener_module',
        N: 'kubejs:nickel_ingot',
        n: 'kubejs:nickel_ingot_sheet',
        W: '#minecraft:wool'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:microphone')

    e.shaped('simpleradio:speaker', [
		'  T', 
		'SnE',
        'nNn'
	], {
		T: '#ico:tool/screwdriver',
        E: 'simpleradio:receiving_module',
        S: 'simpleradio:speaker_module',
        N: 'kubejs:nickel_ingot',
        n: 'kubejs:nickel_sheet'        
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:speaker_radio')

    e.shaped('simpleradio:radiosmither', [
		' RT', 
		'SWS',
        ' C '
	], {
		T: '#ico:tool/screwdriver',
        S: 'kubejs:carbon_steel_sheet',
        W: 'kubejs:pig_iron_block',
        C: 'kubejs:carbon_steel_ingot',
        R: 'kubejs:logic_circuit'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:radiosmither')

    e.shaped('simpleradio:antenna', [
		'CT', 
		'C '
	], {
		T: '#ico:tool/screwdriver',
        C: 'kubejs:carbon_steel_rod'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:antenna')

    //no more tablet
    e.recipes.create.milling('mekanism:dust_emerald', 'kubejs:emerald_tablet').id('ico:anger_the_gods')
})