
import { print, promptNumber, promptString } from "introcs";

export let main = async () => {   
    let alive = true;
    let thirstLevel = 50;
    let bearLikeliness = 50;
    let isHarvestTime = false;
    let day = 0;
    let beetsCount = 10;
    while (!isHarvestTime && alive){
        print("Day: " + day);
        let waterSprayOrHarvest = await promptString("Do you want to water, spray, or harvest your " + beetsCount + " beets? Type 'water', 'spray', or 'harvest'.");
        if (waterSprayOrHarvest === "water") {
            print(beetsCount + " beets have been watered!");
            thirstLevel = thirstLevel - 10;
            bearLikeliness = bearLikeliness + 10;
            beetsCount = beetsCount + 2;
        } else if (waterSprayOrHarvest === "spray") {
            print(beetsCount + " beets have been sprayed!");
            thirstLevel = thirstLevel + 10;
            bearLikeliness = bearLikeliness - 5;
        } else if (waterSprayOrHarvest === "harvest") {
            print(beetsCount + " beets have been harvested!");
            isHarvestTime = true;
        } else {
            print(beetsCount + " beets were not watered, sprayed, or harvested.");
            thirstLevel = thirstLevel + 10;
            bearLikeliness = bearLikeliness + 10;
        }
        if (thirstLevel <= 0) {
            alive = false;
            print("Your " + beetsCount + " beets have been overwatered.");
        }
        if (thirstLevel > 100) {
            alive = false;
            print("Your " + beetsCount + " beets have been dehydrated.");
        }
        if (bearLikeliness >= 100) {
            alive = false;
            print("Your " + beetsCount + " beets were eaten by bears.");
        }
        if (isHarvestTime === false && alive === true) {
            print("Your " + beetsCount + " beets are alive!");
            print("Thirst level of " + beetsCount + " beets: " + thirstLevel);
            print("Likeliness of Bear Attack of " + beetsCount + " beets: " + bearLikeliness);
        }
        day = day + 1
    }
    if (isHarvestTime === true && alive === true){
        print("Your " + beetsCount + " beets were harvested after " + day + " days :)");
    }
    print("This means that " + beetsCount + " beets have died after " + day + " days :(");
    };
main();