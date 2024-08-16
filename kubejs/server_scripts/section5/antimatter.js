ServerEvents.recipes(e => {
    //anti-tech

    //meka-suit
    e.remove({id: 'mekanism:mekasuit_helmet'})
    e.remove({id: 'mekanism:mekasuit_bodyarmor'})
    e.remove({id: 'mekanism:mekasuit_pants'})
    e.remove({id: 'mekanism:mekasuit_boots'})
    e.remove({id: 'mekanism:meka_tool'})

    //thumb drive
    e.remove({id: 'ae2:tools/portable_item_cell_1k'})
    e.remove({id: 'ae2:tools/portable_item_cell_4k'})
    e.remove({id: 'ae2:tools/portable_item_cell_16k'})
    e.remove({id: 'ae2:tools/portable_item_cell_64k'})
    e.remove({id: 'ae2:tools/portable_item_cell_256k'})
    e.remove({id: 'ae2:tools/portable_fluid_cell_1k'})
    e.remove({id: 'ae2:tools/portable_fluid_cell_4k'})
    e.remove({id: 'ae2:tools/portable_fluid_cell_16k'})
    e.remove({id: 'ae2:tools/portable_fluid_cell_64k'})
    e.remove({id: 'ae2:tools/portable_fluid_cell_256k'})
    e.remove({id: 'appbot:portable_mana_storage_cell_1k'})
    e.remove({id: 'appbot:portable_mana_storage_cell_4k'})
    e.remove({id: 'appbot:portable_mana_storage_cell_16k'})
    e.remove({id: 'appbot:portable_mana_storage_cell_64k'})
    e.remove({id: 'appbot:portable_mana_storage_cell_256k'})
    e.remove({id: 'appmek:portable_chemical_storage_cell_1k'})
    e.remove({id: 'appmek:portable_chemical_storage_cell_4k'})
    e.remove({id: 'appmek:portable_chemical_storage_cell_16k'})
    e.remove({id: 'appmek:portable_chemical_storage_cell_64k'})
    e.remove({id: 'appmek:portable_chemical_storage_cell_256k'})

    //quantum bridging
    e.remove({id: 'ae2:transform/entangled_singularity'})
    e.remove({id: 'ae2:transform/entangled_singularity_from_pearl'})
    //e.remove({id: 'ae2:network/blocks/quantum_ring'})
    //e.remove({id: 'ae2:network/blocks/quantum_link'})

    e.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {
                "item": "ae2:singularity"
            },
            {
                "item": "mekanism:pellet_antimatter"
            }
        ],
        "result": {
            "count": 2,
            "item": "ae2:quantum_entangled_singularity"
        }
    })
    
    //teleporting
    e.remove({id: 'mekanism:teleportation_core'})

    e.recipes.create.mechanical_crafting('mekanism:teleportation_core', [
        ' UCU ',
        'UaDaU',
        'AGRGA',
        'UaDaU',
        ' UCU '
    ], {
        U: 'kubejs:tungsten_ingot',
        a: 'mekanism:alloy_atomic',
        D: 'born_in_chaos_v1:dark_metal_ingot',
        A: 'mekanism:pellet_antimatter',
        G: 'botania:gaia_ingot',
        R: 'mna:eldrin_rift',
        C: 'mekanism:ultimate_control_circuit'
    }).id('ico:teleportation_core')

    //nucleosnythsising

    //artifice cladding
    //cesium this is your job
    /*e.remove({id: 'mna:eldrin_altar/armor/bone_skullcap'})
    e.remove({id: 'mna:eldrin_altar/armor/bone_cuirass'})
    e.remove({id: 'mna:eldrin_altar/armor/bone_greaves'})
    e.remove({id: 'mna:eldrin_altar/armor/bone_boots'})
    e.remove({id: 'mna:eldrin_altar/armor/druidic_antlers'})
    e.remove({id: 'mna:eldrin_altar/armor/druidic_buckskin'})
    e.remove({id: 'mna:eldrin_altar/armor/druidic_leggings'})
    e.remove({id: 'mna:eldrin_altar/armor/druidic_slippers'})
    e.remove({id: 'mna:eldrin_altar/armor/infernal_helm'})
    e.remove({id: 'mna:eldrin_altar/armor/infernal_chestplate'})
    e.remove({id: 'mna:eldrin_altar/armor/infernal_greaves'})
    e.remove({id: 'mna:eldrin_altar/armor/infernal_boots'})
    e.remove({id: 'mna:eldrin_altar/armor/spellweaver_runes'})
    e.remove({id: 'mna:eldrin_altar/armor/spellweaver_robes'})
    e.remove({id: 'mna:eldrin_altar/armor/spellweaver_leggings'})
    e.remove({id: 'mna:eldrin_altar/armor/spellweaver_boots'})*/

    //mining byte

})