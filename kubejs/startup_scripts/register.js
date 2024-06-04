StartupEvents.registry('fluid', e => {	
	//misc
	e.create('creosote_oil').bucketColor(0xBBAFB9)
    e.create('coal_tar').bucketColor(0xBBAFB9)
	e.create('blaze_icing').displayName('Blaze Icing')
   		.stillTexture('icosahedron:block/blaze_icing')
		.flowingTexture('icosahedron:block/flowing_blaze_icing')
	e.create('molten_glass').bucketColor(0xBBAFB9).displayName('Molten Quartz Glass')
	e.create('slag_runoff').bucketColor(0xBBAFB9).displayName('Slag Runoff')
	e.create('sulfur').bucketColor(0xBBAFB9).displayName('Aqueous Sulfur')
		.stillTexture('icosahedron:block/fluid/aq_sulfur')
		.flowingTexture('icosahedron:block/fluid/flowing_aq_sulfur')

	//oil
	e.create('ethylene').bucketColor(0xBBAFB9).displayName('Ethylene')
	e.create('dirty_plastic').bucketColor(0xBBAFB9).displayName('Unrefined Plastic')
	e.create('styrene').bucketColor(0xBBAFB9).displayName('Styrene')

	//magic
	e.create('condensed_essence').bucketColor(0xBBAFB9).displayName('Condensed Essence')
	e.create('sourceberry_juice').bucketColor(0xBBAFB9).displayName('Sourceberry Juice')
	e.create('gilding_slush').bucketColor(0xBBAFB9).displayName('Gilding Slush')

	//slurry
	e.create('pentlandite_slurry').bucketColor(0xBBAFB9).displayName('Pentlandite Slurry')
	e.create('hematite_slurry').bucketColor(0xBBAFB9).displayName('Hematite Slurry')
	e.create('malachite_slurry').bucketColor(0xBBAFB9).displayName('Malachite Slurry')
	e.create('bauxite_slurry').bucketColor(0xBBAFB9).displayName('Bauxite Slurry')

	//molten
	e.create('molten_pig_iron').bucketColor(0xBBAFB9).displayName('Molten Pig Iron')
		.stillTexture('icosahedron:block/fluid/molten_pig_iron')
		.flowingTexture('icosahedron:block/fluid/molten_pig_iron_flowing')
	e.create('molten_wrought_iron').bucketColor(0xBBAFB9).displayName('Molten Wrought Iron')
		.stillTexture('icosahedron:block/fluid/molten_wrought_iron')
		.flowingTexture('icosahedron:block/fluid/molten_wrought_iron_flowing')

	e.create('molten_nickel').bucketColor(0xBBAFB9).displayName('Molten Nickel')
		.stillTexture('icosahedron:block/fluid/molten_nickel_still')
        .flowingTexture('icosahedron:block/fluid/molten_nickel_flowing')
	e.create('molten_iron').bucketColor(0xBBAFB9).displayName('Molten Iron')
		.stillTexture('icosahedron:block/fluid/molten_iron_still')
		.flowingTexture('icosahedron:block/fluid/molten_iron_flowing')
	e.create('molten_copper').bucketColor(0xBBAFB9).displayName('Molten Copper')
	e.create('molten_aluminum').bucketColor(0xBBAFB9).displayName('Alumina Solution')
		.stillTexture('icosahedron:block/fluid/molten_aluminum')
		.flowingTexture('icosahedron:block/fluid/molten_aluminum_flowing')

	//alloy
	e.create('molten_brass').bucketColor(0xBBAFB9).displayName('Molten Brass')
	e.create('molten_pressure_alloy').bucketColor(0xBBAFB9).displayName('Molten Pressure Alloy')
		.stillTexture('icosahedron:block/fluid/molten_pressure_alloy')
		.flowingTexture('icosahedron:block/fluid/molten_pressure_alloy_flowing')
})

StartupEvents.registry('item', e => {
	
	//ore processing

	//crude
    e.create('impure_copper_grit').texture('icosahedron:item/ore/crude/dirty_copper_grit')
	e.create('copper_grit').texture('icosahedron:item/ore/crude/pure_copper_grit')
	
    e.create('impure_gold_grit').texture('icosahedron:item/ore/crude/dirty_gold_grit')
	e.create('gold_grit').texture('icosahedron:item/ore/crude/pure_gold_grit')
    e.create('small_copper_grit').texture('icosahedron:item/ore/crude/small_pure_copper_grit')

	e.create('impure_zinc_grit').texture('icosahedron:item/ore/crude/dirty_zinc_grit')
	e.create('zinc_grit').texture('icosahedron:item/ore/crude/pure_zinc_grit')
	e.create('small_zinc_grit').texture('icosahedron:item/ore/crude/small_pure_zinc_grit')

	e.create('impure_iron_grit').texture('icosahedron:item/ore/crude/dirty_iron_grit')
	e.create('iron_grit').texture('icosahedron:item/ore/crude/pure_iron_grit')
	e.create('small_iron_grit').texture('icosahedron:item/ore/crude/small_pure_iron_grit')

	//gemstone	
	e.create('rough_nether_quartz').texture('icosahedron:item/ore/gemstone/rough_quartz')
	e.create('rough_emerald').texture('icosahedron:item/ore/gemstone/rough_emerald')

    e.create('aquatrine').texture('icosahedron:item/ore/gemstone/aquatrine')
	e.create('rough_aquatrine').texture('icosahedron:item/ore/gemstone/rough_aquatrine')
	
	e.create('unrefined_amethyst').texture('icosahedron:item/ore/gemstone/rough_amethyst')
	e.create('cleaned_unrefined_amethyst').texture('icosahedron:item/ore/gemstone/cleaned_rough_amethyst')
	e.create('unpolished_amethyst').texture('icosahedron:item/ore/gemstone/unpolished_amethyst')
	
	e.create('unrefined_diamond').texture('icosahedron:item/ore/gemstone/rough_diamond')
	e.create('cleaned_unrefined_diamond').texture('icosahedron:item/ore/gemstone/cleaned_rough_diamond')
	e.create('unpolished_diamond').texture('icosahedron:item/ore/gemstone/unpolished_diamond')

	e.create('icosahedron').texture('icosahedron:item/ore/gemstone/ico_gem')

	//advanced	
	/*e.create('clean_crushed_raw_nickel').texture('icosahedron:item/ore/crude/clean_crushed_raw_nickel')
	e.create('ingot_mold_with_nickel').texture('icosahedron:item/ore/ingot_mold_with_nickel')

	e.create('clean_crushed_raw_iron').texture('icosahedron:item/ore/crude/clean_crushed_raw_iron')
	e.create('ingot_mold_with_iron').texture('icosahedron:item/ore/ingot_mold_with_iron')*/

	//complex
	e.create('tungsten_crystal')
	e.create('tungsten_shard')
	e.create('tungsten_clump')
	e.create('tungsten_dirty_dust')
	e.create('tungsten_dust')

	//components

    //organics
    e.create('kelp_sheet').texture('icosahedron:item/kelp_sheet')
    e.create('kelp_strap').texture('icosahedron:item/kelp_strap')

	//e.create('tunnel_flap').texture('icosahedron:item/component/funnel_flap')
	e.create('sealant').texture('icosahedron:item/component/sealant')

	e.create('dragon_sinew_mesh','createsifter:mesh').texture('icosahedron:item/dragon_sinew_mesh')
	
	//wood
	e.create('wooden_slide').texture('icosahedron:item/component/wooden_slide')
	e.create('tool_handle').texture('icosahedron:item/tool/tool_handle')
	e.create('advanced_tool_handle').texture('icosahedron:item/tool/advanced_tool_handle')
	
	//stone
	e.create('slag').texture('icosahedron:item/ore/slag')
	e.create('soft_slag_dust').texture('icosahedron:item/ore/soft_slag_dust')
	e.create('blast_brick_dust').texture('icosahedron:item/blast_brick_dust')
	e.create('blast_brick').texture('icosahedron:item/component/blast_brick')
	
	e.create('unfired_ingot_mold').texture('icosahedron:item/unfired_ingot_mold')
	e.create('ingot_mold').texture('icosahedron:item/ingot_mold')
	
	e.create('unfired_nugget_mold').texture('icosahedron:item/unfired_nugget_mold')
	e.create('nugget_mold').texture('icosahedron:item/nugget_mold')
	
	//carbon
	e.create('coal_powder').texture('icosahedron:item/coal_powder').burnTime(1600)
	//e.create('charcoal_powder').texture('icosahedron:item/charcoal_powder')

	e.create('coal_coke').texture('icosahedron:item/coal_coke').burnTime(2400)
	
    //andesite
    e.create('andesite_framing').texture('icosahedron:item/component/andesite_framing')
    e.create('filter_framing').texture('icosahedron:item/andesite_filter_framing')
    e.create('andesite_rod').texture('icosahedron:item/component/andesite_rod')
    e.create('unfinished_andesite_filter').texture('icosahedron:item/component/unfinished_andesite_mesh')
	
	e.create('andesite_alloy_dust').texture('icosahedron:item/andesite_alloy_dust')
	
	//copper
	e.create('copper_framing').texture('icosahedron:item/component/copper_framing')
	e.create('enriched_copper').texture('icosahedron:item/component/enriched_copper')
	
	//brass
	e.create('brass_framing').texture('icosahedron:item/component/brass_framing')
	e.create('brass_filter_framing').texture('icosahedron:item/brass_filter_framing')
	e.create('unfinished_brass_filter').texture('icosahedron:item/unfinished_brass_mesh')
	
	//metal
	e.create('sawblade').texture('icosahedron:item/sawblade')
	e.create('drill_bit').texture('icosahedron:item/drill_bit').displayName('Iron Drill')

	e.create('pressure_alloy').texture('icosahedron:item/ore/pressure_alloy')
	e.create('lubricated_bearing').texture('icosahedron:item/component/lubricated_bearing')
	
	//wrought/pig iron
	e.create('pig_iron_ingot').texture('icosahedron:item/ore/pig_iron_ingot')
	
	e.create('wrought_iron_ingot').texture('icosahedron:item/ore/wrought_iron_ingot')
	e.create('wrought_iron_sheet').texture('icosahedron:item/ore/wrought_iron_sheet')
	e.create('wrought_iron_rod').texture('icosahedron:item/ore/wrought_iron_rod')
	e.create('wrought_iron_spring').texture('icosahedron:item/ore/wrought_iron_spring')
	
	e.create('ingot_mold_with_wrought_iron').texture('icosahedron:item/ore/ingot_mold_with_wrought_iron')
	e.create('ingot_mold_with_pig_iron').texture('icosahedron:item/ore/ingot_mold_with_pig_iron')

	//all molds

	e.create('ingot_mold_with_iron').texture('icosahedron:item/ore/ingot_mold_with_iron')
	e.create('ingot_mold_with_copper').texture('icosahedron:item/ore/ingot_mold_with_copper')
	e.create('ingot_mold_with_nickel').texture('icosahedron:item/ore/ingot_mold_with_nickel')
	e.create('ingot_mold_with_aluminum').texture('icosahedron:item/ore/ingot_mold_with_aluminum')
	e.create('ingot_mold_with_brass').texture('icosahedron:item/ore/ingot_mold_with_brass')

	//carbon steel
	e.create('carbon_steel_ingot').texture('icosahedron:item/ore/carbon_steel_ingot')
	e.create('hot_carbon_steel').texture('icosahedron:item/ore/hot_carbon_steel')
	e.create('carbon_steel_sheet').texture('icosahedron:item/ore/carbon_steel_sheet')
	e.create('hot_carbon_steel_sheet').texture('icosahedron:item/ore/hot_carbon_steel_sheet')
	e.create('carbon_steel_rod').texture('icosahedron:item/ore/carbon_steel_rod')
	e.create('hot_carbon_steel_rod').texture('icosahedron:item/ore/hot_carbon_steel_rod')

	e.create('double_iron').texture('icosahedron:item/ore/double_iron')
	e.create('pressed_iron').texture('icosahedron:item/ore/pressed_iron')

	//bronze
	e.create('bronze_ingot').texture('icosahedron:item/ore/brass_ingot')

	//aluminum
	e.create('aluminum_ingot').texture('icosahedron:item/ore/aluminum_ingot')
	e.create('aluminum_nugget').texture('icosahedron:item/ore/aluminum_nugget')
	e.create('aluminum_sheet').texture('icosahedron:item/ore/aluminum_sheet')

	//nickel
	e.create('nickel_ingot').texture('icosahedron:item/ore/nickel_ingot')
	e.create('nickel_nugget').texture('icosahedron:item/ore/nickel_nugget')
	e.create('enriched_nickel').texture('icosahedron:item/ore/enriched_nickel')

	//tin
	e.create('tin_ingot').texture('icosahedron:item/ore/tin_ingot')
	
	//compressed
	e.create('compressed_iron_sheet').texture('icosahedron:item/component/compressed_alloy_sheet')
	e.create('high_pressure_plate').displayName("High-Pressure Plate").texture('icosahedron:item/component/high_pressure_plate')
	e.create('compressed_framing').texture('icosahedron:item/component/compressed_framing')

	e.create('unfinished_advanced_pressure_tube').texture('icosahedron:item/unfinished_advanced_pressure_tube')

	//tungsten
	e.create('tungsten_ingot').texture('icosahedron:item/ore/tungsten_ingot')
	e.create('tungsten_nugget').texture('icosahedron:item/ore/tungsten_nugget')
	e.create('tungsten_sheet').texture('icosahedron:item/ore/tungsten_sheet')

	//coppronickel
	e.create('cupronickel_ingot').texture('icosahedron:item/ore/cupronickel_ingot')
	e.create('cupronickel_sheet').texture('icosahedron:item/ore/cupronickel_sheet')
	e.create('cupronickel_rod').texture('icosahedron:item/ore/cupronickel_rod')
	e.create('cupronickel_wire').texture('icosahedron:item/ore/cupronickel_wire')

	//electric
	e.create('logic_circuit').texture('icosahedron:item/component/logic_circuit')
	e.create('redstone_cable').texture('icosahedron:item/component/redstone_cable')
	e.create('lcd_display').texture('icosahedron:item/component/lcd_display').displayName('LCD Screen')
	e.create('oled_display').texture('icosahedron:item/component/oled_display').displayName('OLED Display')
	e.create('laser_emitter').texture('icosahedron:item/component/laser_emitter')

	e.create('sturdy_sheet_dust').texture('icosahedron:item/sturdy_sheet_dust')
    e.create('lithium_ion_cell').texture('icosahedron:item/component/lithium_ion_cell').displayName('Lithium-Ion Cell')

	//magic
	e.create('cadmium').texture('icosahedron:item/ore/cadmium')
	
	e.create('transmutation_catalyst').texture('icosahedron:item/magic/transmutation_catalyst')
	e.create('transmutation_chip').texture('icosahedron:item/magic/transmutation_tablet')

	e.create('cadmium_coated_ingot').texture('icosahedron:item/magic/cadmium_coated_ingot')
	e.create('rune_backing').texture('icosahedron:item/magic/rune_backing')

	e.create('ornate_gold').texture('icosahedron:item/magic/ornate_gold')
	e.create('dripping_source_gem').texture('icosahedron:item/magic/dripping_source_gem')
	e.create('gilded_amethyst').texture('icosahedron:item/magic/gilded_amethyst')
	e.create('glyph_backing').texture('icosahedron:item/magic/glyph_backing')
	e.create('blank_essence').texture('icosahedron:item/magic/source_catcher')

	//oil
	e.create('plasticizer').texture('icosahedron:item/component/plasticizer')
	e.create('rubber').texture('icosahedron:item/component/rubber')
	e.create('polystyrene').texture('icosahedron:item/component/polystyrene')

	//processed ores
	e.create('unprocessed_nickel').texture('icosahedron:item/ore/unprocessed_nickel')
	e.create('sulfur').texture('icosahedron:item/ore/sulfur').displayName('Crude Sulfur')
	e.create('sphalerite_grit').texture('icosahedron:item/ore/salpherite_grit')
	e.create('crushed_pentlandite').texture('icosahedron:item/ore/crushed_pentlandite')
	e.create('crushed_hematite').texture('icosahedron:item/ore/crushed_hematite')
	e.create('crushed_malachite').texture('icosahedron:item/ore/crushed_malachite')
	e.create('crushed_bauxite').texture('icosahedron:item/ore/crushed_bauxite')
	
	//mekanism
	e.create('andesite_pressure_alloy').texture('icosahedron:item/ore/andesite_pressure_alloy')
	e.create('diamond_plated_alloy').texture('icosahedron:item/ore/diamond_plated_alloy')
	e.create('steel_framing').texture('icosahedron:item/component/steel_framing')
	
	e.create('magnetized_iron').texture('icosahedron:item/component/magnetized_iron')
	e.create('machine_plating').texture('icosahedron:item/component/machine_plating')

	e.create('uninfused_basic_circuit').texture('icosahedron:item/component/uninfused_basic_circuit')
	e.create('uninfused_advanced_circuit').texture('icosahedron:item/component/uninfused_advanced_circuit')
	e.create('uninfused_elite_circuit').texture('icosahedron:item/component/uninfused_elite_circuit')
	e.create('uninfused_ultimate_circuit').texture('icosahedron:item/component/uninfused_ultimate_circuit')

	//other
    e.create('heavyweight').texture('icosahedron:item/heavyweight')
	e.create('supply_pass').displayName("Supply Cache Access Pass").texture('icosahedron:item/supply_pass')

	//tools
	
	//simple
	e.create('simple_file').maxDamage(48).texture('icosahedron:item/tool/simple_file')
	e.create('simple_hammer').maxDamage(64).texture('icosahedron:item/tool/simple_hammer')
	e.create('simple_saw').maxDamage(48).texture('icosahedron:item/tool/simple_saw')
	e.create('simple_screwdriver').maxDamage(32).texture('icosahedron:item/tool/simple_screwdriver')
	
	e.create('simple_multitool').maxDamage(256).texture('icosahedron:item/tool/simple_multitool')
	
	//advanced
	e.create('advanced_file').maxDamage(256).texture('icosahedron:item/tool/advanced_file')
	e.create('advanced_hammer').maxDamage(512).texture('icosahedron:item/tool/advanced_hammer')
	e.create('advanced_saw').maxDamage(256).texture('icosahedron:item/tool/advanced_saw')
	e.create('advanced_screwdriver').maxDamage(128).texture('icosahedron:item/tool/advanced_screwdriver')
	
	e.create('advanced_multitool').maxDamage(2648).texture('icosahedron:item/tool/advanced_multitool')

	e.create('blowtorch').maxDamage(64).texture('icosahedron:item/tool/blowtorch')
	
	//complex
	
	e.create('complex_file').maxDamage(512).texture('icosahedron:item/tool/complex_file')
	e.create('complex_hammer').maxDamage(1024).texture('icosahedron:item/tool/complex_hammer')
	e.create('complex_saw').maxDamage(512).texture('icosahedron:item/tool/complex_saw')
	e.create('complex_screwdriver').maxDamage(256).texture('icosahedron:item/tool/complex_screwdriver')
	
	e.create('complex_multitool').maxDamage(4396).texture('icosahedron:item/tool/complex_multitool')

	e.create('hyper_blowtorch').maxDamage(128).texture('icosahedron:item/tool/hyper_blowtorch')
	e.create('antimatter_manipulator').maxDamage(6).texture('icosahedron:item/tool/antimatter_manipulator')

	//ore extraction
	e.create('smooth_pebbles').maxStackSize(16).texture('icosahedron:item/ore/extracted/basic_pebbles') //common, trace basic
	e.create('frosted_slate').maxStackSize(16).texture('icosahedron:item/ore/extracted/frosted_slate') //snowy, cold
	e.create('scorched_tailings').maxStackSize(16).texture('icosahedron:item/ore/extracted/scorched_tailings') //nether, sulfur

	/*e.create('sandy_slate') //desert
	e.create('aquastone') //ocean
	e.create('frigid_pebbles') //cold
	e.create('igneous_rock') //rare
	e.create('warped_extract') //warped forest
	e.create('crimson_extract') //crimson forest
	e.create('scorched_tailings') //rare nether
	e.create('anomalous_clump') //rare end*/
	
	//drills
	e.create('compressed_iron_drill').texture('icosahedron:item/compressed_drill_bit')
	e.create('netherite_drill').texture('icosahedron:item/netherite_drill')

	//origin icons

	//function
	e.create('random_tool_alpha')

	//sequenced assembly

	e.create('incomplete_electron_tube', 'create:sequenced_assembly').texture('icosahedron:item/component/incomplete_electron_tube')
	e.create('incomplete_andesite_filter', 'create:sequenced_assembly').texture('icosahedron:item/component/incomplete_andesite_mesh')
	e.create('incomplete_fluid_pipe', 'create:sequenced_assembly').texture('icosahedron:item/component/incomplete_fluid_pipe')
	e.create('incomplete_logic_circuit', 'create:sequenced_assembly').texture('icosahedron:item/component/incomplete_logic_circuit')
	e.create('unprosessed_pressed_iron', 'create:sequenced_assembly').texture('icosahedron:item/unprocessed_pressed_iron')
	e.create('incomplete_turbine_rotor', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_turbine_rotor')
	e.create('incomplete_heat_pipe', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_heat_pipe')
	e.create('incomplete_memory_stick', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_memory_stick')
	e.create('incomplete_pcb', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_pcb').displayName('Incomplete PCB')
	e.create('incomplete_logistics_core', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_memory_stick')
	e.create('incomplete_pneumatic_cylinder', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_pneumatic_cylinder')
	e.create('incomplete_capacitor', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_capacitor')
	e.create('incomplete_machine_plating', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_machine_plating')
	e.create('incomplete_electrolytic_core', 'create:sequenced_assembly').texture('icosahedron:item/incomplete_electrolytic_core')
	

	//reflection based
	const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
	const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')
	const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')

	const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')
	const SLURRY = new $SlurryDeferredRegister('kubejs')

	INFUSETYPE.register('nickel', 0xC2C5A4)
	//INFUSETYPE.register('copper', 0xD96E24)
	INFUSETYPE.register('cupronickel', 0xD96E24)

	SLURRY.register('tungsten', builder => builder.tint(0x3D5C4E))

	INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())
	SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
})

StartupEvents.registry("block", (event) => {
	
	let ore_decor = (id, hard, resist, harvest_level) => {
		function capitalName(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		event.create(id + "_ore")
			.displayName(capitalName(id))
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/' + id)

		event.create("polished_" + id)
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/polished_' + id)

		event.create("polished_" + id + "_slab", "slab")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/polished_' + id)

		event.create("polished_" + id + "_stairs", "stairs")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/polished_' + id)

		event.create("polished_" + id + "_bricks")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/polished_' + id + '_bricks')

		event.create("polished_" + id + "_brick_slab", "slab")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/polished_' + id + '_bricks')

		event.create("polished_" + id + "_brick_stairs", "stairs")
			.mapColor("stone").stoneSoundType()
			.hardness(hard).resistance(resist).requiresTool(true)
			.tagBlock("mineable/pickaxe").tagBlock("needs_" + harvest_level + "_tool")
			.tagItem("ico:" + id + "_blocks")
			.textureAll('icosahedron:block/polished_' + id + '_bricks')
	}

	ore_decor('limonite', 3.5, 3, 'stone') //crude iron
	ore_decor('sphalerite', 3.5, 3, 'stone') //crude zinc
	ore_decor('hematite', 4, 3, 'iron') //advanced nether iron
	ore_decor('malachite', 4, 3, 'iron') //advanced nether copper
	ore_decor('bauxite', 4, 3, 'iron') //advanced nether aluminum
	ore_decor('pentlandite', 4, 3, 'iron') //advanced nickel
	ore_decor('wolframite', 5, 3.5, 'diamond') //complex tungsten

    event.create("sand_aquatrine_ore")
		.mapColor("sand").soundType(SoundType.SAND)
		.hardness(2).resistance(0.6).requiresTool(true)
		.tagBlock("mineable/shovel").tagBlock("needs_diamond_tool")
		.textureAll('icosahedron:block/sand_aquatrine_ore')

    event.create("sandstone_aquatrine_ore")
		.mapColor("sand").soundType(SoundType.SAND)
		.hardness(3.2).resistance(1).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_diamond_tool")
		.textureAll('icosahedron:block/sandstone_aquatrine_ore_side')
        .textureTop('icosahedron:block/sandstone_aquatrine_ore_top')

	//blocks

    //wood
    event.create("treated_wood_planks")
		.mapColor("wood").woodSoundType()
		.hardness(2.2).resistance(3.5)
		.tagBlock("mineable/axe")
		.textureAll('icosahedron:block/treated_wood_planks')

	//decor
    event.create("blast_brick_block")
		.displayName("Blast Bricks")
		.mapColor("podzol").stoneSoundType()
		.hardness(2).resistance(6).requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.textureAll('icosahedron:block/blast_brick_block')

	event.create("quartz_glass")
		.displayName("Quartz Glass")
		.mapColor("none").soundType(SoundType.GLASS)
		.hardness(0.4).resistance(0.4).requiresTool(false)
		.textureAll('icosahedron:block/quartz_glass')
		.defaultCutout()

	event.create("tempered_glass")
		.displayName("Tempered Glass")
		.mapColor("none").soundType(SoundType.GLASS)
		.hardness(0.6).resistance(0.5).requiresTool(false)
		.textureAll('icosahedron:block/tempered_glass')
		.defaultTranslucent()

	//compacting

	event.create("coal_coke_block")
		.mapColor("stone").stoneSoundType()
		.hardness(5).resistance(6).requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.textureAll('icosahedron:block/coal_coke_block')
		.item(i => {i.burnTime(16000)})

	event.create("carbon_steel_block")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/carbon_steel_block')

	event.create("ornate_gold_block")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(3).resistance(2).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/ornate_gold_block')

	//industrial

	event.create("industrial_concrete")
		.mapColor("stone").stoneSoundType()
		.hardness(3).resistance(2).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/industrial_concrete')

	event.create("industrial_concrete_scuffed")
		.displayName("Scuffed Industrial Concrete")
		.mapColor("stone").stoneSoundType()
		.hardness(2.8).resistance(1.8).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/industrial_concrete_scuffed')

	event.create("industrial_concrete_cracked")
		.displayName("Cracked Industrial Concrete")
		.mapColor("stone").stoneSoundType()
		.hardness(2.5).resistance(1.6).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/industrial_concrete_cracked')

	event.create("industrial_concrete_destroyed")
		.displayName("Destroyed Industrial Concrete")
		.mapColor("stone").stoneSoundType()
		.hardness(2).resistance(1.4).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/industrial_concrete_destroyed')

	event.create("industrial_concrete_reinforced")
		.displayName("Reinforced Industrial Concrete")
		.mapColor("stone").stoneSoundType()
		.hardness(3.5).resistance(2.5).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/industrial_concrete_reinforced')

	event.create("industrial_concrete_reinforced_scuffed")
		.displayName("Scuffed Reinforced Industrial Concrete")
		.mapColor("stone").stoneSoundType()
		.hardness(3.3).resistance(2.4).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/industrial_concrete_reinforced_scuffed')

	event.create("old_metal_plate")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(4).resistance(2.5).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/old_metal_plate')

	event.create("old_metal_pillar")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(4).resistance(2.5).requiresTool(true)
		.property(BlockProperties.AXIS)
		.placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
		.model('kubejs:block/old_metal_pillar')
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/old_metal_pillar_side')
		.texture('up', 'icosahedron:block/industrial/old_metal_pillar_top')
		.texture('down', 'icosahedron:block/industrial/old_metal_pillar_top')
		.blockstateJson = {
			"variants": {
				"axis=x": {
					"model": "kubejs:block/old_metal_pillar",
					"x": 90,
					"y": 90
				},
				"axis=y": {
					"model": "kubejs:block/old_metal_pillar"
				},
				"axis=z": {
					"model": "kubejs:block/old_metal_pillar",
					"x": 90
				}
			}
		}

	event.create("old_metal_sheet")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(4).resistance(2.5).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/old_sheet_metal')

	event.create("old_metal_duct")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(4).resistance(2.5).requiresTool(true)
		.property(BlockProperties.AXIS)
		.placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
		.model('kubejs:block/old_metal_duct')
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/old_metal_duct_side')
		.texture('up', 'icosahedron:block/industrial/old_metal_duct_top')
		.texture('down', 'icosahedron:block/industrial/old_metal_duct_top')
		.blockstateJson = {
			"variants": {
				"axis=x": {
					"model": "kubejs:block/old_metal_duct",
					"x": 90,
					"y": 90
				},
				"axis=y": {
					"model": "kubejs:block/old_metal_duct"
				},
				"axis=z": {
					"model": "kubejs:block/old_metal_duct",
					"x": 90
				}
			}
		}

	event.create("steeled_plate")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/steeled_plate')

	event.create("steeled_plate_vent")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/steeled_vent_cover')

	event.create("steeled_sheet")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/steeled_flat')

	event.create("steeled_corrugated_metal")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/steeled_corrigated_metal')

	event.create("steeled_beam")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.property(BlockProperties.AXIS)
		.placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
		.model('kubejs:block/steeled_beam')
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/steeled_beam_side')
		.texture('up', 'icosahedron:block/industrial/steeled_beam_top')
		.texture('down', 'icosahedron:block/industrial/steeled_beam_top')
		.blockstateJson = {
			"variants": {
				"axis=x": {
					"model": "kubejs:block/steeled_beam",
					"x": 90,
					"y": 90
				},
				"axis=y": {
					"model": "kubejs:block/steeled_beam"
				},
				"axis=z": {
					"model": "kubejs:block/steeled_beam",
					"x": 90
				}
			}
		}

	event.create("crystal_bricks")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/crystalbrick_bricks')

	event.create("crystal_block")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/crystalbrick_block')

	event.create("crystal_pillar")
		.mapColor("metal").soundType(SoundType.METAL)
		.hardness(5).resistance(3).requiresTool(true)
		.property(BlockProperties.AXIS)
		.placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
		.model('kubejs:block/crystal_pillar')
		.tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool")
		.textureAll('icosahedron:block/industrial/crystalbrick_pillar_side')
		.texture('up', 'icosahedron:block/industrial/crystalbrick_pillar_top')
		.texture('down', 'icosahedron:block/industrial/crystalbrick_pillar_top')
		.blockstateJson = {
			"variants": {
				"axis=x": {
					"model": "kubejs:block/crystal_pillar",
					"x": 90,
					"y": 90
				},
				"axis=y": {
					"model": "kubejs:block/crystal_pillar"
				},
				"axis=z": {
					"model": "kubejs:block/crystal_pillar",
					"x": 90
				}
			}
		}
})

Platform.mods.kubejs.name = 'Icosahedron'
//Platform.mods.kintsugi.name = 'Kintsugi'
