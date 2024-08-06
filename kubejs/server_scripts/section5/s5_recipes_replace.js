ServerEvents.recipes(e => {
    //infusion
    e.remove({id:'mekanism:infusion_conversion/carbon/from_charcoal'})
    e.remove({id:'mekanism:infusion_conversion/carbon/from_coal'})
    e.remove({id:'mekanism:infusion_conversion/carbon/from_charcoal_block'})
    e.remove({id:'mekanism:infusion_conversion/carbon/from_coal_block'})
    
    e.remove({id:'mekanism:infusion_conversion/redstone/from_block'})
    e.remove({id:'mekanism:infusion_conversion/redstone/from_dust'})

    e.remove({id:'mekanism:infusion_conversion/refined_obsidian/from_dust'})

    e.remove({id:'mekanism:enriching/enriched/carbon'})

    //machinery
    e.remove({id: 'mekanism:metallurgic_infuser'})

    e.remove({id: 'mekanism:enrichment_chamber'})
    e.remove({id: 'mekanism:crusher'})
    e.remove({id: 'mekanism:energized_smelter'})
    e.remove({id: 'mekanism:precision_sawmill'})

    e.remove({id: 'mekanism:rotary_condensentrator'})

    e.remove({id: 'mekanism:purification_chamber'})
    e.remove({id: 'mekanism:painting_machine'})
    e.remove({id: 'mekanism:osmium_compressor'})
    e.remove({id: 'mekanism:electrolytic_separator'})

    e.remove({id: 'mekanism:chemical_oxidizer'})
    e.remove({id: 'mekanism:chemical_infuser'})
    e.remove({id: 'mekanism:pressurized_reaction_chamber'})

    //storage and multiblock
    e.remove({id: 'mekanism:chemical_tank/basic'})
    e.remove({id: 'mekanism:chemical_tank/advanced'})
    e.remove({id: 'mekanism:chemical_tank/elite'})
    e.remove({id: 'mekanism:chemical_tank/ultimate'})

    e.remove({id: 'mekanism:fluid_tank/basic'})
    e.remove({id: 'mekanism:fluid_tank/advanced'})
    e.remove({id: 'mekanism:fluid_tank/elite'})
    e.remove({id: 'mekanism:fluid_tank/ultimate'})

    e.remove({id: 'mekanism:dynamic_tank'})
    e.remove({id: 'mekanism:dynamic_valve'})

    e.remove({id: 'mekanism:thermal_evaporation/block'})
    e.remove({id: 'mekanism:thermal_evaporation/controller'})
    e.remove({id: 'mekanism:thermal_evaporation/valve'})

    e.remove({id: 'mekanism:structual_glass'})

    e.remove({id: 'mekanism:boiler_casing'})
    e.remove({id: 'mekanism:boiler_valve'})
    e.remove({id: 'mekanism:superheating_element'})
    e.remove({id: 'mekanism:pressure_disperser'})

    e.remove({id: 'mekanismgenerators:turbine/casing'})
    e.remove({id: 'mekanismgenerators:turbine/vent'})
    e.remove({id: 'mekanismgenerators:turbine/rotor'})
    e.remove({id: 'mekanismgenerators:turbine/blade'})
    //e.remove({id: 'mekanism:electromagnetic_coil'})

    e.remove({id: 'mekanismgenerators:reactor/glass'})

    e.remove({id: 'mekanismgenerators:fission_reactor/casing'})
    e.remove({id: 'mekanismgenerators:fission_reactor/port'})
    e.remove({id: 'mekanismgenerators:fission_reactor/logic_adapter'})

    e.remove({id: 'mekanism:sps_casing'})
    e.remove({id: 'mekanism:sps_port'})

    //components
    e.remove({id:'mekanism:steel_casing'})
    e.remove({id:'mekanism:control_circuit/basic'})
    e.remove({id:'mekanism:control_circuit/advanced'})
    e.remove({id:'mekanism:control_circuit/elite'})
    e.remove({id:'mekanism:control_circuit/ultimate'})
    e.remove({id:'mekanism:metallurgic_infusing/alloy/infused'})
    e.remove({id:'mekanism:metallurgic_infusing/alloy/reinforced'})
    e.remove({id:'mekanism:metallurgic_infusing/alloy/ultimate'})
    e.remove({id:'mekanism:metallurgic_infusing/alloy/atomic'})

    e.remove({id:'mekanism:electrolytic_core'})

    e.remove({id:'mekanism:processing/steel/enriched_iron_to_dust'})
    e.remove({id:'mekanism:processing/iron/enriched'})

    e.remove({id: 'mekanism:enriching/enriched/refined_obsidian'})
    e.remove({id: 'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'})

    e.remove({id: 'mekanism:reaction/substrate/water_hydrogen'})
    e.remove({id: 'mekanism:reaction/substrate/water_ethene'})
    e.remove({id: 'mekanism:reaction/substrate/ethene_oxygen'})
    e.remove({id: 'mekanism:hdpe_rod'})

    //equipment
    e.remove({id: 'mekanism:energy_tablet'})

    //infusion
    e.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "kubejs:coal_coke"
            }
        },
        "output": {
            "amount": 20,
            "infuse_type": "mekanism:carbon"
        }
    }).id('ico:carbon_from_coke')

    e.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "item": "kubejs:coal_coke"
            }
        },
        "output": {
            "count": 1,
            "item": "mekanism:enriched_carbon"
        }
    }).id('ico:enriched_carbon')
    
    //machinery
    e.shaped('mekanism:metallurgic_infuser', [ 
        ' OT', 
        'POP',
        'SFS'
        ], {
            O: 'mekanism:ingot_osmium',
            F: 'minecraft:blast_furnace',
            S: 'kubejs:rubber',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:metallurgic_infuser')

    //basic
    e.shaped('mekanism:enrichment_chamber', [ 
        'PPT', 
        'OSO',
        'NCN'
        ], {
            S: 'mekanism:steel_casing',
            C: 'mekanism:basic_control_circuit',
            N: 'mekanism:ingot_steel',
            O: 'mekanism:ingot_osmium',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:enrichment_chamber')

    e.shaped('mekanism:crusher', [ 
        ' OT', 
        'PSP',
        'NCN'
        ], {
            S: 'mekanism:steel_casing',
            C: 'mekanism:basic_control_circuit',
            N: 'mekanism:ingot_steel',
            O: 'minecraft:piston',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:crusher')

    e.shaped('mekanism:energized_smelter', [ 
        'PPT', 
        'OSO',
        'NCN'
        ], {
            S: 'mekanism:steel_casing',
            C: 'mekanism:basic_control_circuit',
            N: 'mekanism:ingot_steel',
            O: 'minecraft:furnace',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:energized_smelter')

    e.shaped('mekanism:precision_sawmill', [ 
        ' FT', 
        'OPO',
        'NCN'
        ], {
            O: 'mekanism:ingot_osmium',
            F: 'create:mechanical_saw',
            C: 'mekanism:basic_control_circuit',
            N: 'mekanism:ingot_steel',
            P: 'mekanism:steel_casing',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:precision_sawmill')

    e.shaped('mekanism:rotary_condensentrator', [ 
        ' CT', 
        'OFO',
        'NPN'
        ], {
            O: 'mekanism:ingot_osmium',
            F: 'mekanism:dynamic_tank',
            C: 'mekanism:basic_chemical_tank',
            N: 'mekanism:ingot_steel',
            P: 'mekanism:steel_casing',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:rotary_condensentrator')

    //advanced
    e.shaped('mekanism:purification_chamber', [ 
        'PPT', 
        'OSO',
        'NCN'
        ], {    
            S: 'mekanism:enrichment_chamber',
            C: 'mekanism:advanced_control_circuit',
            N: 'mekanism:alloy_infused',
            O: 'mekanism:ingot_osmium',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:purification_chamber')

    e.shaped('mekanism:osmium_compressor', [ 
        ' OT', 
        'PSP',
        'NCN'
        ], {    
            S: 'mekanism:steel_casing',
            C: 'mekanism:advanced_control_circuit',
            N: 'mekanism:alloy_infused',
            O: 'mekanism:block_osmium',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:osmium_compressor')

    e.shaped('mekanism:painting_machine', [ 
        'PPT', 
        'OSO',
        'NCN'
        ], {    
            S: 'mekanism:steel_casing',
            C: 'mekanism:advanced_control_circuit',
            N: 'mekanism:alloy_infused',
            O: 'mekanism:dye_base',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:painting_machine')

    e.shaped('mekanism:electrolytic_separator', [ 
        'EOT', 
        'PSP',
        'NCN'
        ], {    
            S: 'mekanism:steel_casing',
            C: 'mekanism:advanced_control_circuit',
            N: 'mekanism:alloy_infused',
            O: 'mekanism:electrolytic_core',
            E: 'kubejs:sealant',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:osmium_celectrolytic_separatorompressor')

    e.shaped('mekanism:chemical_oxidizer', [ 
        'EOT', 
        'PSP',
        'NCN'
        ], {    
            S: 'mekanism:dynamic_valve',
            C: 'mekanism:advanced_control_circuit',
            N: 'mekanism:alloy_infused',
            O: 'mekanism:advanced_chemical_tank',
            E: 'kubejs:sealant',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:chemical_oxidizer')

    e.shaped('mekanism:chemical_infuser', [ 
        'PPT', 
        'OSO',
        'NCN'
        ], {    
            S: 'mekanism:steel_casing',
            C: 'mekanism:advanced_control_circuit',
            N: 'mekanism:alloy_infused',
            O: 'mekanism:advanced_chemical_tank',
            P: 'kubejs:machine_plating',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:chemical_infuser')

    e.recipes.create.mechanical_crafting('mekanism:pressurized_reaction_chamber', [
        'SS  ',
        'OSAO',
        'TSAC',
        'SSAS'
    ], {
        O: 'mekanism:advanced_chemical_tank',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:advanced_control_circuit',
        S: 'mekanism:ingot_steel',
        O: 'mekanism:ingot_osmium',
        T: 'mekanism:steel_casing'
    }).id('ico:pressurized_reaction_chamber')

    //storage
    
    e.shaped('mekanism:dynamic_tank', [ 
        ' FT', 
        'HSH',
        ' F '
        ], {    
            F: 'create:fluid_tank',
            S: 'mekanism:steel_casing',
            H: 'mekanism:ingot_steel',
            T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:dynamic_tank')

    e.shaped('mekanism:dynamic_valve', [ 
        'CPT', 
        'FF ',
        'FF '
        ], {    
            F: 'mekanism:dynamic_tank',
            C: 'mekanism:advanced_control_circuit',
            P: 'create:mechanical_pump',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:dynamic_valve')

    e.recipes.create.mechanical_crafting('mekanism:basic_chemical_tank', [
        ' P ',
        'HFH',
        'OSO',
        'HFH',
        ' P '
    ], {
        F: 'create:fluid_tank',
        S: 'mekanism:steel_casing',
        H: 'mekanism:ingot_steel',
        O: 'mekanism:ingot_osmium',
        P: 'kubejs:high_pressure_plate'
    }).id('ico:basic_chemical_tank')

    e.recipes.create.mechanical_crafting('mekanism:advanced_chemical_tank', [
        ' P ',
        'HFH',
        'OSO',
        'HFH',
        ' P '
    ], {
        F: 'create:fluid_tank',
        S: 'mekanism:basic_chemical_tank',
        H: 'mekanism:ingot_steel',
        O: 'mekanism:ingot_osmium',
        P: 'mekanism:alloy_infused'
    }).id('ico:advanced_chemical_tank')

    e.recipes.create.mechanical_crafting('mekanism:elite_chemical_tank', [
        ' P ',
        'HFH',
        'OSO',
        'HFH',
        ' P '
    ], {
        F: 'create:fluid_tank',
        S: 'mekanism:advanced_chemical_tank',
        H: 'mekanism:ingot_steel',
        O: 'mekanism:ingot_osmium',
        P: 'mekanism:alloy_reinforced'
    }).id('ico:elite_chemical_tank')

    /*e.recipes.create.mechanical_crafting('mekanism:basic_fluid_tank', [
        ' PFP ',
        'HOFOH',
        'HOSOH',
        'HOFOH',
        ' PFP '
        ], {
            F: 'create:fluid_tank',
            S: 'mekanism:steel_casing',
            H: 'mekanism:ingot_steel',
            O: 'kubejs:tempered_glass',
            P: 'kubejs:high_pressure_plate'
    }).id('ico:basic_fluid_tank')*/

    /*e.shaped('2x mekanism:thermal_evaporation_block', [ 
        ' HT', 
        'HSH',
        'RH '
        ], {
            S: 'create:copper_casing',
            H: 'mekanism:ingot_steel',
            R: 'kubejs:rubber',
            T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:thermal_evaporation_block')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x mekanism:thermal_evaporation_block').withChance(16.0)
	], 'create:copper_casing', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_steel']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_steel']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:rubber']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:thermal_evaporation_block")

    /*e.shaped('2x mekanism:thermal_evaporation_valve', [ 
        ' HT', 
        'HSH',
        'RH '
        ], {
            S: 'mekanism:advanced_control_circuit',
            H: 'mekanism:thermal_evaporation_block',
            R: 'create:portable_fluid_interface',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermal_evaporation_valve')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x mekanism:thermal_evaporation_valve').withChance(16.0)
	], 'mekanism:advanced_control_circuit', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:thermal_evaporation_block']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:thermal_evaporation_block']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'create:portable_fluid_interface']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:thermal_evaporation_valve")

    e.shaped('mekanism:thermal_evaporation_controller', [ 
        ' BT', 
        'SCS',
        'BBB'
        ], {
            B: 'mekanism:thermal_evaporation_block',
            C: 'computercraft:advanced_monitor',
            S: 'mekanism:advanced_control_circuit',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermal_evaporation_controller')

    e.recipes.createDeploying('mekanism:structural_glass', ['kubejs:tempered_glass', 'mekanism:ingot_steel'])

    /*e.shaped('6x mekanism:boiler_casing', [ 
        ' HT', 
        ' S ',
        'RH '
        ], {
            S: 'mekanism:steel_block',
            H: 'kubejs:tungsten_ingot',
            R: 'kubejs:rubber',
            T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:boiler_casing')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('6x mekanism:boiler_casing').withChance(16.0)
	], 'mekanism:block_steel', [
		e.recipes.createDeploying(inter, [inter, 'kubejs:tungsten_ingot']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:tungsten_ingot']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:rubber']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:boiler_casing")

    /*e.shaped('2x mekanism:boiler_valve', [ 
        ' HT', 
        'HSH',
        'RH '
        ], {
            S: 'mekanism:advanced_control_circuit',
            H: 'mekanism:boiler_casing',
            R: 'create:portable_fluid_interface',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:boiler_valve')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x mekanism:boiler_valve').withChance(16.0)
	], 'mekanism:advanced_control_circuit', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:boiler_casing']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:boiler_casing']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'create:portable_fluid_interface']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:boiler_valve")

    e.shaped('mekanism:superheating_element', [ 
        ' CT', 
        'CSC',
        'AC '
        ], {
            S: 'mekanism:steel_casing',
            A: 'mekanism:alloy_reinforced',
            C: 'kubejs:cupronickel_sheet',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:superheating_element')

    e.shaped('mekanism:pressure_disperser', [ 
        'IST', 
        'SAS',
        'ISI'
        ], {
            S: 'mekanism:ingot_steel',
            A: 'mekanism:alloy_reinforced',
            I: 'minecraft:iron_bars',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:pressure_disperser')

    /*e.shaped('4x mekanismgenerators:turbine_casing', [ 
        ' HT', 
        ' S ',
        'RH '
        ], {
            S: 'mekanism:block_steel',
            H: 'mekanism:ingot_osmium',
            R: 'kubejs:rubber',
            T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:turbine_casing')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('6x mekanismgenerators:turbine_casing').withChance(16.0)
	], 'mekanism:block_steel', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_osmium']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_osmium']),
        e.recipes.createDeploying(inter, [inter, 'kubejs:rubber']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:turbine_casing")

    /*e.shaped('2x mekanismgenerators:turbine_valve', [ 
        ' HT', 
        'HSH',
        'RH '
        ], {
            S: 'mekanism:advanced_control_circuit',
            H: 'mekanism:boiler_casing',
            R: 'create:portable_fluid_interface',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:turbine_valve')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x mekanismgenerators:turbine_valve').withChance(16.0)
	], 'mekanism:advanced_control_circuit', [
		e.recipes.createDeploying(inter, [inter, 'mekanismgenerators:turbine_casing']),
        e.recipes.createDeploying(inter, [inter, 'mekanismgenerators:turbine_casing']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'create:portable_fluid_interface']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:turbine_valve")

    e.shaped('2x mekanismgenerators:turbine_vent', [ 
        ' HT', 
        'HSH',
        ' H '
        ], {
            S: 'mekanism:advanced_control_circuit',
            H: 'create:iron_bars',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:turbine_vent')

    e.shaped('mekanismgenerators:turbine_blade', [ 
        ' AT', 
        'SRS'
        ], {
            R: 'pneumaticcraft:turbine_rotor',
            A: 'mekanism:alloy_reinforced',
            S: 'mekanism:ingot_steel',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:turbine_blade')

    e.recipes.createDeploying('mekanism:structural_glass', ['kubejs:tempered_glass', 'mekanism:ingot_lead'])

    /*e.shaped('4x mekanismgenerators:fission_reactor_casing', [ 
        ' LT', 
        'LSL',
        'HL '
        ], {
            S: 'mekanism:steel_casing',
            L: 'mekanism:ingot_lead',
            H: 'mekanism:hdpe_sheet',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:fission_reactor_casing')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('4x mekanismgenerators:fission_reactor_casing').withChance(16.0)
	], 'mekanism:steel_casing', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_lead']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:ingot_lead']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:hdpe_sheet']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(2).id("ico:fission_reactor_casing")

    /*e.shaped('2x mekanismgenerators:fission_reactor_port', [ 
        ' CT', 
        'CAC',
        'IC '
        ], {
            C: 'mekanismgenerators:fission_reactor_casing',
            I: 'create:portable_fluid_interface',
            A: 'mekanism:ultimate_control_circuit',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:fission_reactor_port')*/

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x mekanismgenerators:fission_reactor_port').withChance(16.0)
	], 'mekanism:ultimate_control_circuit', [
		e.recipes.createDeploying(inter, [inter, 'mekanismgenerators:fission_reactor_casing']),
        e.recipes.createDeploying(inter, [inter, 'mekanismgenerators:fission_reactor_casing']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'create:portable_fluid_interface']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:fission_reactor_port")

    e.recipes.createDeploying('mekanismgenerators:fission_reactor_logic_adapter', ['mekanismgenerators:fission_reactor_casing', 'pneumaticcraft:printed_circuit_board'])

    e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "mekanism:alloy_reinforced"
		},
		"result": {
			"item": "mekanismgenerators:turbine_rotor",
			"count": 2
		}
	})

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('4x mekanism:sps_casing').withChance(16.0)
	], 'mekanism:pellet_plutonium', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:pellet_polonium']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:hdpe_sheet']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(4).id("ico:sps_casing")

    inter = 'kubejs:incomplete_casing'
	e.recipes.create.sequenced_assembly([
		Item.of('2x mekanism:sps_port').withChance(16.0)
	], 'mekanism:ultimate_control_circuit', [
		e.recipes.createDeploying(inter, [inter, 'mekanism:sps_casing']),
        e.recipes.createDeploying(inter, [inter, 'mekanism:sps_casing']),
        e.recipes.createCutting(inter,inter),
        e.recipes.createDeploying(inter, [inter, 'create:portable_fluid_interface']),
		e.recipes.createPressing(inter,inter),
	]).transitionalItem(inter).loops(1).id("ico:sps_port")

    //components
    e.custom({
		"type": "create:item_application",
		"ingredients": [
			{
				"item": 'mekanism:block_steel'
			},
			{
				"item": 'kubejs:steel_framing'
			}
		],
		"results": [
			{
			"item": 'mekanism:steel_casing'
			}
		]
	}).id('ico:steel_casing')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 160,
			"infuse_type": "kubejs:cupronickel"
		},
		"itemInput": {
			"ingredient": {
				"item": "kubejs:uninfused_basic_circuit"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:basic_control_circuit"
		}
	}).id('ico:basic_control_circuit')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 160,
			"infuse_type": "kubejs:cupronickel"
		},
		"itemInput": {
			"ingredient": {
				"item": "kubejs:uninfused_advanced_circuit"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:advanced_control_circuit"
		}
	}).id('ico:advanced_control_circuit')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 80,
			"infuse_type": "mekanism:diamond"
		},
		"itemInput": {
			"ingredient": {
				"item": "kubejs:uninfused_elite_circuit"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:elite_control_circuit"
		}
	}).id('ico:elite_control_circuit')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 80,
			"infuse_type": "mekanism:refined_obsidian"
		},
		"itemInput": {
			"ingredient": {
				"item": "kubejs:uninfused_ultimate_circuit"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:ultimate_control_circuit"
		}
	}).id('ico:ultimate_control_circuit')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 80,
			"infuse_type": "kubejs:cupronickel"
		},
		"itemInput": {
            "amount": 1,
			"ingredient": {
				"item": "kubejs:andesite_pressure_alloy"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:alloy_infused"
		}
	}).id('ico:infused_alloy')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 160,
			"infuse_type": "mekanism:carbon"
		},
		"itemInput": {
            "amount": 3,
			"ingredient": {
				"item": "kubejs:pressed_iron"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:enriched_iron"
		}
	}).id('ico:enriched_iron')

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 160,
			"infuse_type": "mekanism:carbon"
		},
		"itemInput": {
			"ingredient": {
				"item": "mekanism:enriched_iron"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:dust_steel"
		}
	}).id('ico:steel_dust')

    e.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "item": "mekanism:block_refined_obsidian"
            }
        },
        "output": {
            "count": 1,
            "item": "mekanism:enriched_refined_obsidian"
        }
    }).id("ico:enriched_refined_obsidian")

    e.custom({
		"type": "mekanism:metallurgic_infusing",
		"chemicalInput": {
			"amount": 40,
			"infuse_type": "mekanism:diamond"
		},
		"itemInput": {
			"ingredient": {
				"item": "kubejs:sturdy_sheet_dust"
			}
		},
		"output": {
			"count": 1,
			"item": "mekanism:dust_refined_obsidian"
		}
	}).id('ico:dust_refined_obsidian')

    let inter = 'kubejs:incomplete_electrolytic_core'
	e.recipes.create.sequenced_assembly([
		Item.of('mekanism:electrolytic_core').withChance(16.0)
	], 'create:electron_tube', [
		e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:plastic']),
        e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:plastic']),
        e.recipes.createPressing(inter,inter),
		e.recipes.createDeploying(inter, [inter, 'mekanism:alloy_infused']),
	]).transitionalItem(inter).loops(3).id("ico:electrolytic_core")

    e.custom({
        "type": "mekanism:reaction",
        "duration": 200,
        "fluidInput": {
            "amount": 500,
            "fluid": "pneumaticcraft:plastic"
        },
        "gasInput": {
            "amount": 200,
            "gas": "mekanism:hydrogen_chloride"
        },
        "itemInput": {
            "ingredient": {
                "item": "kubejs:diamond_plated_alloy"
            }
        },
        "itemOutput": {
            "item": "mekanism:alloy_reinforced"
        }
    }).id("ico:alloy_reinforced")

    e.recipes.create.compacting(['mekanism:alloy_atomic', Fluid.of('kubejs:slag_runoff', 100)], ["mekanism:alloy_reinforced", 'kubejs:refined_tungsten', Fluid.of('kubejs:ethylene', 500)]).superheated().id("alloy_atomic")

    e.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
            "amount": 250,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 100,
            "gas": "mekanism:lithium"
        },
        "itemInput": {
            "ingredient": {
                "item": "minecraft:flint"
            }
        },
        "itemOutput": {
            "item": "mekanism:dust_lithium"
        }
    }).id("ico:early_lithium")

    //HDPE
    e.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
            "amount": 250,
            "fluid": "kubejs:styrene"
        },
        "gasInput": {
            "amount": 500,
            "gas": "mekanism:hydrogen"
        },
        "gasOutput": {
            "amount": 250,
            "gas": "kubejs:gaseous_substrate"
        },
        "itemInput": {
            "amount": 6,
            "ingredient": {
                "tag": "forge:fuels/bio"
            }
        }
    }).id("ico:gas_substrate")
    
    e.custom({
        "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": {
            "amount": 500,
            "gas": "kubejs:gaseous_substrate"
        },
        "output": {
            "item": "mekanism:substrate"
        }
    }).id("ico:crystalize_substrate")

    e.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
            "amount": 750,
            "fluid": "kubejs:ethylene"
        },
        "gasInput": {
            "amount": 500,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "item": "mekanism:substrate"
            }
        },
        "gasOutput": {
            "amount": 250,
            "gas": "mekanism:water_vapor"
        },
        "itemOutput": {
            "item": "mekanism:hdpe_pellet"
        }
    }).id("ico:hdpe_pellet")

    e.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": "mekanism:hdpe_sheet"
		},
		"result": {
			"item": "mekanism:hdpe_rod"
		}
	})

    //biomass
    e.recipes.create.mixing('createaddition:biomass', ['4x mekanism:bio_fuel', {fluidTag: 'forge:plantoil', amount: 100}]).heated().id('ico:biomass_from_biofuel')

    //equipment
    e.shaped('mekanism:energy_tablet', [ 
        'RTR', 
        'ACA',
        'RCR'
        ], {    
            C: 'kubejs:lithium_ion_cell',
            A: 'mekanism:alloy_infused',
            R: 'kubejs:redstone_cable',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:energy_tablet')
})