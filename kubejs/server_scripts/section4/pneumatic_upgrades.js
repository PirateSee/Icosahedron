ServerEvents.recipes(e => {

    e.remove({id:'pneumaticcraft:armor_upgrade'})
    e.remove({id:'pneumaticcraft:block_tracker_upgrade'})
    e.remove({id:'pneumaticcraft:charging_upgrade'})
    e.remove({id:'pneumaticcraft:cordinate_tracker_upgrade'})
    e.remove({id:'pneumaticcraft:dispenser_upgrade'})
    e.remove({id:'pneumaticcraft:entity_tracker_upgrade'})
    e.remove({id:'pneumaticcraft:inventory_upgrade'})
    e.remove({id:'pneumaticcraft:item_life_upgrade'})
    e.remove({id:'pneumaticcraft:magnet_upgrade'})
    e.remove({id:'pneumaticcraft:minigun_upgrade'})
    e.remove({id:'pneumaticcraft:range_upgrade'})
    e.remove({id:'pneumaticcraft:security_upgrade'})
    e.remove({id:'pneumaticcraft:speed_upgrade'})
    e.remove({id:'pneumaticcraft:standby_upgrade'})
    e.remove({id:'pneumaticcraft:volume_upgrade'})

    e.remove({id:'pneumaticcraft:ender_visor_upgrade'})
    e.remove({id:'pneumaticcraft:elytra_upgrade'})
    e.remove({id:'pneumaticcraft:flippers_upgrade'})
    e.remove({id:'pneumaticcraft:jet_boots_upgrade_1'})
    e.remove({id:'pneumaticcraft:jet_boots_upgrade_2'})
    e.remove({id:'pneumaticcraft:jet_boots_upgrade_3'})
    e.remove({id:'pneumaticcraft:jet_boots_upgrade_4'})
    e.remove({id:'pneumaticcraft:jet_boots_upgrade_5'})
    e.remove({id:'pneumaticcraft:jumping_upgrade_1'})
    e.remove({id:'pneumaticcraft:jumping_upgrade_2'})
    e.remove({id:'pneumaticcraft:jumping_upgrade_3'})
    e.remove({id:'pneumaticcraft:jumping_upgrade_4'})
    e.remove({id:'pneumaticcraft:night_vision_upgrade'})
    e.remove({id:'pneumaticcraft:radiation_shielding_upgrade'})
    e.remove({id:'pneumaticcraft:stomp_upgrade'})
    e.remove({id:'pneumaticcraft:chunkloader_upgrade'})

    e.recipes.create.mechanical_crafting('pneumaticcraft:armor_upgrade', [
		'H H',
        'CNC',
        'UCU',
        ' U '
	], {
		H: 'kubejs:high_pressure_plate',
        N: 'born_in_chaos_v1:dark_metal_ingot',
        C: 'kubejs:carbon_steel_sheet',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:block_tracker_upgrade', [
		' T ',
        'CTC',
        'HSH',
        'UUU'
	], {
		H: 'kubejs:high_pressure_plate',
        C: 'kubejs:carbon_steel_sheet',
        S: 'minecraft:spyglass',
        T: 'kubejs:tempered_glass',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:charging_upgrade', [
        'HTCTH',
        ' WUW '
	], {
        H: 'kubejs:high_pressure_plate',
		C: 'pneumaticcraft:charging_module',
        T: 'pneumaticcraft:advanced_pressure_tube',
        W: 'kubejs:wrought_iron_spring',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:coordinate_tracker_upgrade', [
        '  D  ',
        'RRGRR',
        '  U  '
	], {
        G: 'pneumaticcraft:gps_tool',
        R: 'kubejs:redstone_cable',
        D: 'kubejs:oled_display',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:dispenser_upgrade', [
        ' Q Q ',
        'U D U',
        ' Q Q '
	], {
        Q: 'minecraft:quartz',
        D: 'minecraft:dispenser',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:entity_tracker_upgrade', [
        ' U ',
        'SES',
        ' U '
	], {
        E: 'minecraft:eye_of_ender',
        S: 'minecraft:fermented_spider_eye',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:inventory_upgrade', [
        'U ',
        'CC',
        ' U'
	], {
        C: '#c:wooden_chests',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:item_life_upgrade', [
        'UUG  ',
        '  U  ',
        '  GUU'
	], {
        G: 'minecraft:golden_apple',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:magnet_upgrade', [
        'PUMM',
        'UP  ',
        'PUMM'
	], {
        M: 'kubejs:magnetized_iron',
        P: 'pneumaticcraft:plastic',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:minigun_upgrade', [
        'NU  ',
        'NMUU',
        'NU  '
	], {
        N: 'createbigcannons:nitropowder',
        M: 'pneumaticcraft:minigun',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:range_upgrade', [
        '  U    ',
        'UWWWPPU',
        '  U    '
	], {
        P: 'pneumaticcraft:range_upgrade',
        W: 'kubejs:wrought_iron_spring',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:security_upgrade', [
        ' S ',
        'OUO',
        'UOU'
	], {
        S: 'pneumaticcraft:tube_safety_module',
        O: 'minecraft:obsidian',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:speed_upgrade', [
        'U   ',
        'UGU ',
        'GLSS',
        'UGU ',
        'U   '
	], {
        L: 'pneumaticcraft:lubricant_bucket',
        G: 'pneuamticcraft:glycerol',
        S: 'minecraft:sugar',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:standby_upgrade', [
        'U',
        'B',
        'U'
	], {
        B: '#minecraft:beds',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:volume_upgrade', [
        'UUU',
        ' P ',
        ' P ',
        ' A '
	], {
        A: 'pneumaticcraft:air_canister',
        P: 'pneumaticcraft:ingot_iron_compressed',
        U: 'pneumaticcraft:upgrade_matrix'
	})

    e.recipes.create.mechanical_crafting('pneumaticcraft:chunkloader_upgrade', [
        'U U',
        ' L ',
        'U U'
	], {
        L: 'create_power_loader:brass_chunk_loader',
        U: 'pneumaticcraft:upgrade_matrix'
	})

})