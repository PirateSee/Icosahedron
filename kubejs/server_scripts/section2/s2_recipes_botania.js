ServerEvents.recipes(e => {  

    e.remove({id:'botania:mana_infusion/manasteel'})
    e.remove({id:'botania:mana_infusion/manasteel_block'})

    e.remove({id:'botania:runic_altar/water'})
    e.remove({id:'botania:runic_altar/fire'})
    e.remove({id:'botania:runic_altar/earth'})
    e.remove({id:'botania:runic_altar/air'})

    e.custom({
        "type": "botania:mana_infusion",
        "input": {
            "item": 'kubejs:cadmium_coated_ingot'
        },
        "mana": 3000,
        "output": {
        "item": "botania:manasteel_ingot"
        }
    })

    e.recipes.create.compacting('kubejs:rune_backing', ['botania:manasteel_ingot', 'botania:mana_powder', 'botania:livingrock'])

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
                "tag": "minecraft:wool_carpets"
            },
            {
                "tag": "minecraft:wool_carpets"
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
})