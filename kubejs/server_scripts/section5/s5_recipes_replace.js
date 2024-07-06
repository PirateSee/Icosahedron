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

    //storage
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
        ' PFP ',
        'H F H',
        'HOSOH',
        'H F H',
        ' PFP '
    ], {
        F: 'create:fluid_tank',
        S: 'mekanism:steel_casing',
        H: 'mekanism:ingot_steel',
        O: 'mekanism:ingot_osmium',
        P: 'kubejs:high_pressure_plate'
    }).id('ico:basic_chemical_tank')

    e.recipes.create.mechanical_crafting('mekanism:advanced_chemical_tank', [
        ' PFP ',
        'H F H',
        'HOSOH',
        'H F H',
        ' PFP '
    ], {
        F: 'create:fluid_tank',
        S: 'mekanism:basic_chemical_tank',
        H: 'mekanism:ingot_steel',
        O: 'mekanism:ingot_osmium',
        P: 'mekanism:alloy_infused'
    }).id('ico:advanced_chemical_tank')

    e.recipes.create.mechanical_crafting('mekanism:elite_chemical_tank', [
        ' PFP ',
        'H F H',
        'HOSOH',
        'H F H',
        ' PFP '
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

    e.shaped('2x mekanism:thermal_evaporation_block', [ 
        ' HT', 
        'HSH',
        'RH '
        ], {
            S: 'create:copper_casing',
            H: 'mekanism:ingot_steel',
            R: 'kubejs:rubber',
            T: '#ico:tool/hammer'
    }).damageIngredient(Item.of('#ico:tool/hammer')).id('ico:thermal_evaporation_block')

    e.shaped('2x mekanism:thermal_evaporation_valve', [ 
        ' HT', 
        'HSH',
        'RH '
        ], {
            S: 'mekanism:advanced_control_circuit',
            H: 'mekanism:thermal_evaporation_block',
            R: 'create:portable_fluid_interface',
            T: '#ico:tool/screwdriver'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:thermal_evaporation_valve')

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
		Item.of('kubejs:electrolytic_core').withChance(16.0)
	], 'create:electron_tube', [
		e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:plastic']),
        e.recipes.createDeploying(inter, [inter, 'pneumaticcraft:plastic']),
		e.recipes.createDeploying(inter, [inter, 'mekanism:alloy_infused']),
	]).transitionalItem(inter).loops(3)

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

    e.recipes.create.compacting('mekanism:alloy_atomic', ["mekanism:alloy_reinforced", 'kubejs:refined_tungsten', Fluid.of('kubejs:ethylene', 500)]).superheated().id("alloy_atomic")

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