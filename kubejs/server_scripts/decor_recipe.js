ServerEvents.recipes(e => {
    let stonedecor = (id) => {
        e.shaped('4x kubejs:polished_' + id, [
            'AA',
            'AA'
        ], {
            A: 'kubejs:' + id + '_ore'
        }).id('ico:polished_' + id)

        e.shaped('4x kubejs:polished_' + id + '_stairs', [
            'A  ',
            'AA ',
            'AAA'
        ], {
            A: 'kubejs:polished_' + id
        }).id('ico:polished_' + id + '_stairs')

        e.shaped('6x kubejs:polished_' + id + '_slab', [
            'AAA'
        ], {
            A: 'kubejs:polished_' + id
        }).id('ico:polished_' + id + '_slab')

        e.shaped('4x kubejs:polished_' + id + '_bricks', [
            'AA',
            'AA'
        ], {
            A: 'kubejs:polished_' + id
        }).id('ico:polished_' + id + '_bricks')

        e.shaped('4x kubejs:polished_' + id + '_brick_stairs', [
            'A  ',
            'AA ',
            'AAA'
        ], {
            A: 'kubejs:polished_' + id + '_bricks'
        }).id('ico:polished_' + id + '_brick_stairs')

        e.shaped('6x kubejs:polished_' + id + '_brick_slab', [
            'AAA'
        ], {
            A: 'kubejs:polished_' + id + '_bricks'
        }).id('ico:polished_' + id + '_brick_slab')

        e.stonecutting('kubejs:polished_' + id, '#ico:' + id + '_blocks')
        e.stonecutting('kubejs:polished_' + id + '_stairs', '#ico:' + id + '_blocks')
        e.stonecutting('2x kubejs:polished_' + id + '_slab', '#ico:' + id + '_blocks')
        e.stonecutting('kubejs:polished_' + id + '_bricks', '#ico:' + id + '_blocks')
        e.stonecutting('kubejs:polished_' + id + '_brick_stairs', '#ico:' + id + '_blocks')
        e.stonecutting('2x kubejs:polished_' + id + '_brick_slab', '#ico:' + id + '_blocks')
        
        /*
        e.stonecutting('kubejs:chisled_' + id, '#ico:' + id + '_blocks')
        */
    }
    stonedecor("malachite")
    stonedecor("hematite")
    stonedecor("sphalerite")
    stonedecor("pentlandite")
    stonedecor("bauxite")
    stonedecor("limonite")
    stonedecor("wolframite")

    //wood
    e.shaped('4x kubejs:treated_wood_stairs', [
        'A  ',
        'AA ',
        'AAA'
    ], {
        A: 'kubejs:treated_wood_planks'
    }).id('ico:treated_wood_stairs')

    e.shaped('6x kubejs:treated_wood_slab', [
        'AAA'
    ], {
        A: 'kubejs:treated_wood_planks'
    }).id('ico:treated_wood_slab')

    //industrial concrete
    e.recipes.create.mixing('6x kubejs:industrial_concrete', ['kubejs:soft_slag_dust', '2x minecraft:gravel', '2x minecraft:cobblestone'])
    e.recipes.create.cutting('kubejs:industrial_concrete_scuffed', 'kubejs:industrial_concrete')
    e.smelting('kubejs:industrial_concrete_cracked', 'kubejs:industrial_concrete')
    e.smelting('kubejs:industrial_concrete_cracked', 'kubejs:industrial_concrete_scuffed')
    e.recipes.create.milling('kubejs:industrial_concrete_destroyed', 'kubejs:industrial_concrete')
    e.recipes.create.milling('kubejs:industrial_concrete_destroyed', 'kubejs:industrial_concrete_scuffed')
    e.recipes.create.milling('kubejs:industrial_concrete_destroyed', 'kubejs:industrial_concrete_cracked')
    e.recipes.create.cutting('kubejs:industrial_concrete_reinforced_scuffed', 'kubejs:industrial_concrete_reinforced')

    e.shapeless('2x kubejs:industrial_concrete_reinforced', ['2x kubejs:industrial_concrete', 'create:iron_sheet'])
    e.shapeless('2x kubejs:industrial_concrete_reinforced_scuffed', ['2x kubejs:industrial_concrete_scuffed', 'create:iron_sheet'])

    //old metal
    e.shaped('2x kubejs:old_metal_plate', [
		'II',
        'II' 
	], {
		I: 'kubejs:pig_iron_ingot'
	}).id('ico:old_metal_plate')

    e.shaped('2x kubejs:old_metal_pillar', [
		'O',
        'O' 
	], {
		O: 'kubejs:old_metal_plate'
	}).id('ico:old_metal_pillar')

    e.shaped('4x kubejs:old_metal_duct', [
		' O ',
        'O O',
        ' O ' 
	], {
		O: 'kubejs:old_metal_plate'
	}).id('ico:old_metal_duct')

    e.shaped('4x kubejs:old_metal_sheet', [
		'OO',
        'OO' 
	], {
		O: 'kubejs:old_metal_plate'
	}).id('ico:old_metal_sheet')

    //steeled
    e.shaped('2x kubejs:steeled_plate', [
		'II',
        'II' 
	], {
		I: 'kubejs:wrought_iron_ingot'
	}).id('ico:steeled_plate')

    e.shaped('2x kubejs:steeled_beam', [
		'O',
        'O' 
	], {
		O: 'kubejs:steeled_plate'
	}).id('ico:steeled_beam')

    e.shaped('4x kubejs:steeled_sheet', [
		'OO',
        'OO' 
	], {
		O: 'kubejs:steeled_plate'
	}).id('ico:steeled_sheet')

    e.shaped('3x kubejs:steeled_corrugated_metal', [
		'O O',
        ' O ' 
	], {
		O: 'kubejs:steeled_plate'
	}).id('ico:steeled_corrugated_metal')

    e.shapeless('kubejs:steeled_plate_vent', ['kubejs:steeled_plate', 'create:iron_sheet', '#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:steeled_plate_vent')
})