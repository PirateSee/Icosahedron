execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:none"}}}] run attribute @s cold_sweat:cold_resistance base set 0
execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:none"}}}] run attribute @s cold_sweat:heat_resistance base set 0

execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:council"}}}] run attribute @s cold_sweat:cold_resistance base set 0
execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:council"}}}] run attribute @s cold_sweat:heat_resistance base set 0

execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:undead"}}}] run attribute @s cold_sweat:cold_resistance base set 1
execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:undead"}}}] run attribute @s cold_sweat:heat_resistance base set 0

execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:demons"}}}] run attribute @s cold_sweat:cold_resistance base set 0
execute as @a[nbt={ForgeCaps:{"mna:progression":{faction:"mna:demons"}}}] run attribute @s cold_sweat:heat_resistance base set 1


execute as @a[nbt={ForgeCaps:{"mna:magic":{casting_resource_id:"mna:winter_ice"}}}] run attribute @s cold_sweat:cold_resistance base set 0.25
execute as @a[nbt={ForgeCaps:{"mna:magic":{casting_resource_id:"mna:winter_ice"}}}] run attribute @s cold_sweat:heat_resistance base set 0

execute as @a[nbt={ForgeCaps:{"mna:magic":{casting_resource_id:"mna:summer_fire"}}}] run attribute @s cold_sweat:cold_resistance base set 0
execute as @a[nbt={ForgeCaps:{"mna:magic":{casting_resource_id:"mna:summer_fire"}}}] run attribute @s cold_sweat:heat_resistance base set 0.25