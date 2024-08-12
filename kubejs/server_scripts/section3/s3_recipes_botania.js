ServerEvents.recipes(e => {
    e.remove({id: 'botania:terra_plate'})
    e.remove({id: 'botania:incense_plate'})
    e.remove({id: 'botania:mana_fluxfield'})
    e.remove({id: 'botania:natura_pylon'})
    e.remove({id: 'botania:elven_spreader'})
    e.remove({id: 'botania:elven_trade/dragonstone'})
    e.remove({id: 'botania:elven_trade/dragonstone_block'})

    e.remove({id: 'botania:alchemy_catalyst'})
    e.remove({id: 'botania:conjuration_catalyst'})
    e.remove({id: 'botania:gaia_ingot'})

    e.remove({id: 'botania:red_string'})
    e.remove({id: 'botania:red_string_alt'})

    e.remove({id: 'botania:manasteel_pick'})
    e.remove({id: 'botania:elementium_shovel'})
    e.remove({id: 'botania:elementium_axe'})
    e.remove({id: 'botania:elementium_hoe'})
    e.remove({id: 'botania:elementium_sword'})

    e.custom({
            "type": "botania:petal_apothecary",
            "ingredients": [
                {
                    "item": "botania:rune_water"
                },
                {
                    "item": "botania:rune_earth"
                },
                {
                    "item": "botania:rune_mana"
                },
                {
                    "item": "botania:rune_air"
                },
                {
                    "item": "botania:rune_fire"
                }
            ],
            "output": {
                "item": "kubejs:rune_essence"
            },
            "reagent": {
                "tag": "botania:seed_apothecary_reagent"
            }
    })

    e.shaped('botania:terra_plate', [
        '  T',
        'DRD',
        'LSL'
	], {
		R: 'kubejs:rune_essence',
		S: 'botania:manasteel_block',
        L: 'minecraft:lapis_block',
        D: 'botania:mana_diamond',
        T: '#ico:tool/file'
	}).damageIngredient(Item.of('#ico:tool/file')).id('ico:terra_plate')

    e.shaped('botania:incense_plate', [
        '  T',
        'SSL',
	], {
		L: '#botania:livingwood_logs',
        S: 'botania:livingwood_slab',
        T: 'ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:incense_plate')

    e.shaped('botania:natura_pylon', [
        ' T ',
        'TPT',
        ' R '
	], {
		P: 'botania:mana_pylon',
        T: 'botania:terrasteel_nugget',
        R: 'kubejs:rune_essence'
	}).id('ico:natura_pylon')

    e.shaped('botania:mana_fluxfield', [
        'LIL',
        'IMI',
        'LIL'
	], {
		M: 'botania:manasteel_ingot',
        I: 'kubejs:magnetized_iron',
        L: 'botania:livingrock'
	}).id('ico:mana_fluxfield')

    e.shaped('botania:elven_spreader', [
        'LLT',
        'GEG', 
		'LLL'
	], {
        L: '#botania:dreamwood_logs',
		E: 'kubejs:aquatrine',
        G: 'botania:elementium_ingot',
        T: '#ico:tool/saw'
	}).damageIngredient(Item.of('#ico:tool/saw')).id('ico:elven_spreader')

    e.shaped('botania:gaia_pylon', [
        ' DS',
        'EPE',
        'RD '
	], {
		P: 'botania:mana_pylon',
        E: 'botania:elementium_ingot',
        D: 'botania:pixie_dust',
        R: 'kubejs:rune_essence',
        S: 'botania:dragonstone'
	}).id('ico:gaia_pylon')

    e.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "tag": "botania:mana_diamond_gems"
            },
            {
                "tag": "botania:mana_diamond_gems"
            }
        ],
        "output": [
            {
                "item": "botania:dragonstone"
            }
        ]
    })

    e.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            {
                "item": "botania:mana_diamond_block"
            },
            {
                "item": "botania:mana_diamond_block"
            }
        ],
        "output": [
            {
                "item": "botania:dragonstone_block"
            }
        ]
    })

    e.shaped('botania:alchemy_catalyst', [
        'LPL',
        'BRB',
        'LPL'
	], {
        R: 'kubejs:rune_essence',
        L: 'botania:livingrock',
        B: 'minecraft:brewing_stand',
        P: 'botania:mana_pearl'
	}).id('ico:alchemy_catalyst')

    e.shaped('botania:conjuration_catalyst', [
        'ESE',
        'DAD',
        'ERE'
	], {
        E: 'botania:elementium_ingot',
        D: 'botania:pixie_dust',
        R: 'kubejs:rune_essence',
        S: 'botania:dragonstone',
        A: 'botania:alchemy_catalyst'
	}).id('ico:conjuration_catalyst')

    e.recipes.create.pressing('botania:gaia_ingot', ['botania:terrasteel_ingot', '4x botania:life_essence', 'betterend:amber_gem']).superheated().id('ico:gaia_ingot')

    e.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
          "type": "block",
          "block": "botania:conjuration_catalyst"
        },
        "input": {
          "item": "minecraft:end_stone"
        },
        "mana": 500,
        "output": {
          "count": 2,
          "item": "minecraft:end_stone"
        }
    }).id('ico:end_stone_dupe')

    e.shapeless('botania:red_string', ['botania:mana_string', 'minecraft:redstone_block', 'botania:pixie_dust', 'minecraft:blaze_powder']).id('ico:red_string')

})