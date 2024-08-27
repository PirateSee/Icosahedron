ServerEvents.recipes(e => {  

    e.remove({id: 'botania:diluted_pool'})
    e.remove({id: 'botania:mana_pool'})
    e.remove({id: 'botania:mana_spreader'})
    e.remove({id: 'botania:runic_altar'})
    e.remove({id: 'botania:runic_altar_alt'})
    e.remove({id: 'botania:brewery'})

    e.remove({id: 'mna:arcane_compound'})

    e.remove({id: 'mna:vinteum_coated_iron'})

    e.remove({id: 'botania:mana_infusion/manasteel'})
    e.remove({id: 'botania:mana_infusion/manasteel_block'})
    e.remove({id: 'botania:mana_infusion/mana_powder_dust'})
    e.remove({id: 'botania:mana_infusion/mana_powder_dye'})

    e.remove({id: 'botania:runic_altar/water'})
    e.remove({id: 'botania:runic_altar/fire'})
    e.remove({id: 'botania:runic_altar/earth'})
    e.remove({id: 'botania:runic_altar/air'})

    e.remove({id: 'botania:fel_pumpkin'})
    e.remove({id: 'botania:pump'})

    e.remove({id: 'botania:manasteel_pick'})
    e.remove({id: 'botania:manasteel_shovel'})
    e.remove({id: 'botania:manasteel_axe'})
    e.remove({id: 'botania:manasteel_hoe'})
    e.remove({id: 'botania:manasteel_sword'})
    e.remove({id: 'botania:livingwood_bow'})

    e.remove({id: 'botania:petal_apothecary/orechid'})
    e.remove({id: 'botania:petal_apothecary/orechid_ignem'})

    e.remove({id: 'botania:mana_gun'})

    e.shaped('botania:diluted_pool', [
        '  T',
        'WVW', 
		'WWW'
	], {
		W: 'botania:livingrock', 
		V: 'mna:vinteum_dust',
        T: '#ico:tool/file'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:diluted_pool')

    e.shaped('botania:mana_pool', [
        ' MT',
        'WPW', 
		'WWW'
	], {
		W: 'botania:livingrock', 
		M: 'botania:mana_pearl',
        P: 'botania:diluted_pool',
        T: '#ico:tool/file'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:mana_pool')

    e.shaped('botania:mana_spreader', [
        'LLT',
        'GEG', 
		'LLL'
	], {
        L: '#botania:livingwood_logs',
		E: 'minecraft:emerald',
        G: 'minecraft:gold_ingot',
        T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:mana_spreader')

    e.shaped('botania:brewery', [
        ' BT',
        'WMW', 
		'NSN'
	], {
		W: 'botania:livingrock', 
		M: 'botania:rune_mana',
        B: 'minecraft:brewing_stand',
        S: 'botania:manasteel_block',
        N: 'minecraft:gold_nugget',
        T: '#ico:tool/file'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:brewery')

    e.shapeless('3x mna:arcane_compound', ['#ico:arcane_base', 'mna:vinteum_dust', '#forge:dusts/gold', '#botania:mystical_flowers']).id('ico:arcane_compound_from_flower')
    e.shapeless('3x mna:arcane_compound', ['#ico:arcane_base', 'mna:vinteum_dust', '#forge:dusts/gold', '#mna:ma_flowers']).id('ico:arcane_compound_from_ma_flower')
    e.shapeless('3x mna:arcane_compound', ['#ico:arcane_base', 'mna:vinteum_dust', '#forge:dusts/gold', '2x #botania:petals']).id('ico:arcane_compound_from_petals')

    e.shaped('botania:pump', [
        'WWT',
        'SPS', 
		'WWW'
	], {
		W: 'botania:livingrock', 
		P: 'create:mechanical_pump',
        S: 'botania:manasteel_ingot',
        T: '#ico:tool/file'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:pump')

    e.custom({
		"type": "create:compacting",
		"ingredients": [
			{
			  "item": "minecraft:gold_ingot"
			},
			{
			  "item": "minecraft:copper_ingot",
              "count": 2
			},
			{
			  "item": 'mna:vinteum_dust',
              "count": 2
			}
		],
		"results": [
			{
			  "item": "mna:vinteum_coated_iron",
			  "count": 2
			}
		],
		"heatRequirement": "lowheated"
	})

    e.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'mna:vinteum_coated_iron'
        },
        "mana": 3000,
        "output": {
            "item": "botania:manasteel_ingot"
        }
    }).id('ico:manasteel')

    e.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'mna:arcane_compound'
        },
        "mana": 500,
        "output": {
            "item": "botania:mana_powder"
        }
    }).id('ico:mana_powder')

    e.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'born_in_chaos_v1:phantom_powder'
        },
        "mana": 750,
        "output": {
            "count": 2,
            "item": "botania:mana_powder"
        }
    }).id('ico:mana_powder_2')

    e.recipes.create.mixing('botania:mana_pearl', ['minecraft:ender_pearl', 'botania:mana_powder'])

    e.recipes.create.compacting('3x kubejs:rune_backing', ['2x botania:manasteel_ingot', '3x botania:mana_powder', '4x botania:livingrock'])

    e.shaped('botania:runic_altar', [
		'  T',
        'WPW', 
		'WSW'
	], {
		W: 'botania:livingrock', 
		P: 'botania:mana_pearl',
        S: 'botania:manasteel_ingot',
        T: '#ico:tool/screwdriver'
	}).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:runic_altar')

    e.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "kubejs:rune_backing"
            },
            {
                "tag": "minecraft:wool"
            },
            {
                "tag": "minecraft:wool"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "botania:mana_string"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 1,
            "item": "botania:rune_air"
        }
    }).id('botania:runic_altar/air')

    e.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "kubejs:rune_backing"
            },
            {
                "item": "minecraft:kelp"
            },
            {
                "item": "minecraft:bone_meal"
            },
            {
                "item": "minecraft:sugar_cane"
            },
            {
                "item": "minecraft:fishing_rod"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 1,
            "item": "botania:rune_water"
        }
    }).id('botania:runic_altar/water')

    e.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "kubejs:rune_backing"
            },
            {
                "item": "minecraft:gunpowder"
            },
            {
                "item": "minecraft:blaze_powder"
            },
            {
                "item": "minecraft:nether_wart"
            },
            {
                "item": "minecraft:magma_block"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 1,
            "item": "botania:rune_fire"
        }
    }).id('botania:runic_altar/fire')

    e.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "kubejs:rune_backing"
            },
            {
                "tag": "forge:stone"
            },
            {
                "item": "minecraft:brick"
            },
            {
                "tag": "minecraft:coals"
            },
            {
                "item": "minecraft:coarse_dirt"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 1,
            "item": "botania:rune_earth"
        }
    }).id('botania:runic_altar/earth')

    e.shaped('botania:fel_pumpkin', [
		'NSN',
        'BPR', 
		'NGN'
	], {
		P: 'minecraft:pumpkin',
        S: 'minecraft:string',
        B: 'minecraft:bone',
        G: 'minecraft:gunpowder',
        R: 'minecraft:rotten_flesh',
        N: 'create:cinder_flour'
	}).id('ico:fel_pumpkin')

    e.shaped('botania:mana_gun', [
        'SRT',
        ' LN', 
		'  L'
	], {
        L: '#botania:livingwood_logs',
		R: 'botania:rune_mana',
        N: 'minecraft:tnt',
        S: 'botania:redstone_spreader',
        T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:mana_gun')

    e.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": 'minecraft:ender_eye'
        },
        "mana": 28000,
        "output": {
            "item": "minecraft:ghast_tear"
        }
    }).id('ico:ghast_tear_from_ender_eye')
})