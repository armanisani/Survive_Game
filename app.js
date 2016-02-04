var stop = 0
var currentPlayer
  game = {
    slots: $('.slot'),
    slot1: $('#slot1'),
    slot2: $('#slot2'),
    slot3: $('#slot3'),
    context1: $('.context1'),
    context2: $('.context2'),
    context3: $('.context3'),
    // causes game to loop
    nextPath1: function(firstPath) {game.pickPath(firstPath.slot1, firstPath.slot2, firstPath.slot3)},
    nextPath2: function(secondPath) {game.pickPath(secondPath.slot1, secondPath.slot2, secondPath.slot3)},
    nextPath3: function(thirdPath) {game.pickPath(thirdPath.slot1, thirdPath.slot2, thirdPath.slot3)},
    // game engine
    pickPath: function(first, second, third) {
      unbind()
      switchPlayer()
      updatePlayer()
      axe()
      icepick()
      hammer()
      currentPlayer.total +=5
      dryfix(first,1)
      dryfix(second,2)
      dryfix(third,3)
    },
    // -----------------------------------------------------------------------------------------------------------------------
    // all the game content bellow me please minimize for easy access to js logic
    paths: {
      slot1: {
        // 1
        imagePop: 'img/Door.png',
        textPop: "After taking a closer look you notice the door is locked and it won't budge open.",
        truth: true,
        health: false,
        context: "You look to your left and notice a wooden door. Should I take a closer look?",
        image: 'img/Door.png',
        slot1: {
          // 11
          truth: false,
          health: false,
          context: "Use the axe you got from the box (if axe is in inventory)",
          image: 'img/chopping.gif',
          textPop: "It worked! After a short while you were able to cut through the door. You entered a large hallway full of cells and noticed a man in one of them. Not too long after a guard walked into the hallway but he hadn't noticed you yet. What should you do?",
          imagePop: "img/soldier1.png",
          slot1: {
            // 111
            context: "Use the axe to chop the guard who hasn't noticed you yet.",
            truth: true,
            health: false,
            image: 'img/fire axe.jpg',
            textPop: "You slowly walked towards the man and chopped him in the head killing him. You took his gun, armor and keys. After killing the soldier you freed the man in the cell and decided to work together to get out. You continued down the hallway and went out the a door that accidently let you to the middle of a dinning hall full of soldiers eating, you need to act fast.",
            imagePop:'img/chopping.gif',
            slot2: {
              // 1111
              context: "Flip a table to take cover behind",
              image: "img/covertable.gif",
              truth: true,
              health: true,
              healthDMG: Math.floor(Math.random()* -51),
              textPop: "You flipped a table and took cover behind one as they began to fire at you. You need to act fast!",
              imagePop: "img/covertable.gif",
              slot1: {
                context: "Return fire from behind cover as the man tries to get closer to attack them",
                image: "img/returningfire.gif",
                textPop: "You started returning fire, luckily most of them hadn't gotten their weapons. You guys had a firefight for awhile, and you guys took a beating but you survived. You guys continued out the exit and found yourself on an airfield. You need to come up with a plan quick before more come.",
                imagePop: "img/airport.png",
                truth: true,
                health: false,
                slot1: {
                  context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                  image: 'img/forest.gif',
                  textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                  imagePop: 'img/bloodhand.gif',
                  health: true,
                  healthDMG: Math.floor(Math.random()*41),
                  truth: true,
                  slot1: {
                    context: "Continue to run",
                    image: "img/running.gif",
                    textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                    image: "img/mine.gif",
                    truth: true,
                    health: true,
                    healthDMG: Math.floor(Math.random()*121),
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Hide in the forest till things blow over",
                    image: "img/sneaking.gif",
                    textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                    imagePop: "img/dog.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Turn around and fight",
                    image: "img/forestshoot.gif",
                    textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                    imagePop: "img/mine.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                  image: "img/sneaking.gif",
                  textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                  imagePop: "img/blastedaway.gif",
                  truth: true,
                  health: false,
                  slot1: {
                    health: true,
                    healthDMG: 100,
                  },
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                  image: "img/plane.jpg",
                  textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                  imagePop: "img/bleeding.gif",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Use the plane radio to radio out for help",
                    image: "img/radio.gif",
                    textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                    imagePop: "img/forestshoot.gif",
                    truth: true,
                    health: true,
                    healthDMG: Math.floor(Math.random()*201),
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Search the plane for any supplies",
                    image: "img/insideplane.jpg",
                    textPop: "You search inside the plane hoping to score on some supplies.",
                    imagePop: "img/insideplane.jpg",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Grab the medikit and apply it on yourself",
                      image: "img/medikit.png",
                      textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                      imagePop: "img/planecrash.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Steal one of the military humvee's",
                        image: "img/humvee.jpg",
                        textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: true,
                        health: Math.floor(Math.random()*101),
                        slot1: {
                          health: true,
                          healthDMG: 100,
                        },
                        slo2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Surprise attack their camp",
                        image: "img/forestshoot.gif",
                        textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                        image: "img/hidden.jpg",
                        textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                        imagePop: "img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "Grab the flare gun",
                      image: "img/flare.jpg",
                      textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                      imagePop: "img/planecrash.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Shoot the flare gun to start a fire near the camp",
                        image: "img/fire.gif",
                        textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                        imagePop: "img/fireout.gif",
                        truth: true,
                        health: true,
                        health: Math.floor(Math.random()*101),
                        slot1: {
                          context: "Take the car and escape",
                          image: "img/humvee.jpg",
                          textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                          imagePop:"img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Kill them all",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Run away",
                          image: "img/running.gif",
                          textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Steal their military humvee",
                        image: "img/humvee.jpg",
                        textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Pull out your gun and attack",
                        image: "img/forestshoot.gif",
                        textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot3: {
                      context: "Try to save the man",
                      image: "img/bleeding.gif",
                      textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                      imagePop: "img/planecrash.jpg",
                      truth: true,
                      health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*201),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                    }
                  },
                  slot3: {
                    context: "Start to climb down the plane",
                    image: "img/climb.gif",
                    textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                    image: "img/planecrash.jpg",
                    health: false,
                    truth: true,
                    slot1: {
                      context: "Wait until it gets dark for them to sleep",
                      image: "img/stealth.jpg",
                      textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                      imagePop: "img/night.gif",
                      health: true,
                      truth: true,
                      healthDMG: Math.floor(Math.random()*21),
                      slot1: {
                        context: "Kill all the soldiers in their sleep",
                        image: "img/stealthkill.gif",
                        textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                        imagePop: "img/tie.gif",
                        health: false,
                        truth: true,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Steal their military humvee",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1:{health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Sneak off into the night",
                        image: "img/sneaking.gif",
                        textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                        imagePop: "img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "Pull out your gun and attack",
                      image: "img/sneaking.gif",
                      textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Steal a military humvee and attack",
                      image: "img/humvee.jpg",
                      textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  }
                }
              },
              slot2: {
                context: "Make a run for the door",
                image: "img/running.gif",
                textPop: "You try to make a run for the door, but they gunned you down as soon as you left your cover",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "I should surrender myself and figure out what the hell's going on",
                image: "img/surrender.jpg",
                textPop: "You decided it was time to wave the white flag and try to figure out what is going on, but unfortuantely you made a grave error and as soon as you peeked out and started talking you got shot in the face. You dead",
                imagePop: "img/gunfightdie.gif",
                truth:true,
                health:false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              }
            },
            slot1: {
              // 1112
              context: "Make a run for the door",
              image: "img/running.gif",
              textPop: "You try to make a run for the door, but they gunned you down as soon as you started running across them",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            },
            slot3: {
              // 1113
              context:"Start firing them gun blazing!",
              image: "img/returningfire.gif",
              textPop: "You start firing at them like a maniac, but it surprisingly worked. Only a few of them were able to get their weapons and return fire leaving you with some wounds, but not enough to stop you yet. You continue through another door and find yourself on an airfield. You need to think of a plan quick before they find you",
              imagePop: "img/airport.png",
              truth: true,
              health: false,
              slot1: {
                context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                image: 'img/forest.gif',
                textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                imagePop: 'img/bloodhand.gif',
                health: true,
                healthDMG: Math.floor(Math.random()*101),
                truth: true,
                slot1: {
                  context: "Continue to run",
                  image: "img/running.gif",
                  textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                  image: "img/mine.gif",
                  truth: true,
                  health: true,
                  healthDMG: Math.floor(Math.random()*121),
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot2: {
                  context: "Hide in the forest till things blow over",
                  image: "img/sneaking.gif",
                  textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                  imagePop: "img/dog.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Turn around and fight",
                  image: "img/forestshoot.gif",
                  textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                  imagePop: "img/mine.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }
              },
              slot2: {
                context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                image: "img/sneaking.gif",
                textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                imagePop: "img/blastedaway.gif",
                truth: true,
                health: false,
                slot1: {
                  health: true,
                  healthDMG: 100,
                },
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                image: "img/plane.jpg",
                textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                imagePop: "img/bleeding.gif",
                truth: true,
                health: false,
                slot1: {
                  context: "Use the plane radio to radio out for help",
                  image: "img/radio.gif",
                  textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                  imagePop: "img/forestshoot.gif",
                  truth: true,
                  health: true,
                  healthDMG: Math.floor(Math.random()*201),
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot2: {
                  context: "Search the plane for any supplies",
                  image: "img/insideplane.jpg",
                  textPop: "You search inside the plane hoping to score on some supplies.",
                  imagePop: "img/insideplane.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Grab the medikit and apply it on yourself",
                    image: "img/medikit.png",
                    textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                    imagePop: "img/planecrash.jpg",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Steal one of the military humvee's",
                      image: "img/humvee.jpg",
                      textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: true,
                      health: Math.floor(Math.random()*101),
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slo2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Surprise attack their camp",
                      image: "img/forestshoot.gif",
                      textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                      image: "img/hidden.jpg",
                      textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                      imagePop: "img/tie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "Grab the flare gun",
                    image: "img/flare.jpg",
                    textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                    imagePop: "img/planecrash.jpg",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Shoot the flare gun to start a fire near the camp",
                      image: "img/fire.gif",
                      textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                      imagePop: "img/fireout.gif",
                      truth: true,
                      health: true,
                      health: Math.floor(Math.random()*101),
                      slot1: {
                        context: "Take the car and escape",
                        image: "img/humvee.jpg",
                        textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                        imagePop:"img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Kill them all",
                        image: "img/forestshoot.gif",
                        textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Run away",
                        image: "img/running.gif",
                        textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "Steal their military humvee",
                      image: "img/humvee.jpg",
                      textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Pull out your gun and attack",
                      image: "img/forestshoot.gif",
                      textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot3: {
                    context: "Try to save the man",
                    image: "img/bleeding.gif",
                    textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                    imagePop: "img/planecrash.jpg",
                    truth: true,
                    health: false,
                      slot1: {
                        context: "Steal one of the military humvee's",
                        image: "img/humvee.jpg",
                        textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: true,
                        health: Math.floor(Math.random()*201),
                        slot1: {
                          health: true,
                          healthDMG: 100,
                        },
                        slo2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Surprise attack their camp",
                        image: "img/forestshoot.gif",
                        textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                        image: "img/hidden.jpg",
                        textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                        imagePop: "img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                  }
                },
                slot3: {
                  context: "Start to climb down the plane",
                  image: "img/climb.gif",
                  textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                  image: "img/planecrash.jpg",
                  health: false,
                  truth: true,
                  slot1: {
                    context: "Wait until it gets dark for them to sleep",
                    image: "img/stealth.jpg",
                    textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                    imagePop: "img/night.gif",
                    health: true,
                    truth: true,
                    healthDMG: Math.floor(Math.random()*21),
                    slot1: {
                      context: "Kill all the soldiers in their sleep",
                      image: "img/stealthkill.gif",
                      textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                      imagePop: "img/tie.gif",
                      health: false,
                      truth: true,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Steal their military humvee",
                      image: "img/humvee.jpg",
                      textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1:{health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Sneak off into the night",
                      image: "img/sneaking.gif",
                      textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                      imagePop: "img/tie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "Pull out your gun and attack",
                    image: "img/sneaking.gif",
                    textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Steal a military humvee and attack",
                    image: "img/humvee.jpg",
                    textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }

                }
              },
            }
          },
          slot2: {
            // 112
            context: "Use the axe to break the cell lock to free the man locked inside",
            truth: true,
            health: false,
            image: 'img/door.gif',
            textPop: "You use the axe to break open the lock, but the guard hears your attempt to free the man and returns fire at you. You die",
            imagePop: "img/gunfightdie.gif",
            slot1: {health: true, healthDMG: 100},
            slot2: {},
            slot3: {}
          },
          slot3: {
            // this one kills the player 113
            context: "Try to sneak by the guard to reach the door",
            image: "img/sneaking.gif",
            textPop: "You tried to sneak by the man but he turned around and shot you.",
            imagePop: "img/gunfightdie.gif",
            truth: true,
            health: false,
            slot1: {health: true, healthDMG: 100},
            slot2: {},
            slot3: {}
          }
        },

        slot2: {
          // 12
          truth: false,
          health: false,
          context: "Use the icepick you got from the box (if icepick is in inventory)",
          image: "img/picking.gif",
          textPop: "You start picking away at the door with the icepick because picklocking didn't work, the door finally budged open. Once it open you entered the door into a long hallway full of cells with one of them locked with a man inside. You continued down until shortly a soldier walked into the hallway, but hadn't noticed you. What should you do?",
          imagePop: "img/picking.gif",
          slot1: {
            // 121
            context: "Kill the guard by icepicking him in the head.",
            truth: true,
            health: false,
            image: 'img/picking.gif',
            textPop: "You snuck behind the guard and stuck the pickaxe into his head killing him. You grabbed his gun, armor and keys and freed the man in the cell. Shortly after the both of you agreed that your best chance for survival was to work together. You continued down and entered a door that accidently led you into a dinning hall full of soldiers eating, they noticed you and quickly began to grab their weapons. You need to act fast!",
            imagePop: "img/soldiers.jpg",
            slot2: {
              // 1111
              context: "Flip a table to take cover behind",
              image: "img/covertable.gif",
              truth: true,
              health: true,
              healthDMG:  Math.floor(Math.random()*-51),
              textPop: "You flipped a table and took cover behind one as they began to fire at you. You need to act fast!",
              imagePop: "img/covertable.gif",
              slot1: {
                context: "Return fire from behind cover as the man tries to get closer to attack them",
                image: "img/returningfire.gif",
                textPop: "You started returning fire, luckily most of them hadn't gotten their weapons. You guys had a firefight for awhile, and you guys took a beating but you survived. You guys continued out the exit and found yourself on an airfield. You need to come up with a plan quick before more come.",
                imagePop: "img/airport.png",
                truth: true,
                health: false,
                // copy airfield w/ gun and man
                slot1: {
                  context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                  image: 'img/forest.gif',
                  textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                  imagePop: 'img/bloodhand.gif',
                  health: true,
                  healthDMG: Math.floor(Math.random()*101),
                  truth: true,
                  slot1: {
                    context: "Continue to run",
                    image: "img/running.gif",
                    textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                    image: "img/mine.gif",
                    truth: true,
                    health: true,
                    healthDMG: Math.floor(Math.random()*121),
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Hide in the forest till things blow over",
                    image: "img/sneaking.gif",
                    textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                    imagePop: "img/dog.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Turn around and fight",
                    image: "img/forestshoot.gif",
                    textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                    imagePop: "img/mine.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                  image: "img/sneaking.gif",
                  textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                  imagePop: "img/blastedaway.gif",
                  truth: true,
                  health: false,
                  slot1: {
                    health: true,
                    healthDMG: 100,
                  },
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                  image: "img/plane.jpg",
                  textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                  imagePop: "img/bleeding.gif",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Use the plane radio to radio out for help",
                    image: "img/radio.gif",
                    textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                    imagePop: "img/forestshoot.gif",
                    truth: true,
                    health: true,
                    healthDMG: Math.floor(Math.random()*201),
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Search the plane for any supplies",
                    image: "img/insideplane.jpg",
                    textPop: "You search inside the plane hoping to score on some supplies.",
                    imagePop: "img/insideplane.jpg",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Grab the medikit and apply it on yourself",
                      image: "img/medikit.png",
                      textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                      imagePop: "img/planecrash.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Steal one of the military humvee's",
                        image: "img/humvee.jpg",
                        textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: true,
                        health: Math.floor(Math.random()*101),
                        slot1: {
                          health: true,
                          healthDMG: 100,
                        },
                        slo2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Surprise attack their camp",
                        image: "img/forestshoot.gif",
                        textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                        image: "img/hidden.jpg",
                        textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                        imagePop: "img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "Grab the flare gun",
                      image: "img/flare.jpg",
                      textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                      imagePop: "img/planecrash.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Shoot the flare gun to start a fire near the camp",
                        image: "img/fire.gif",
                        textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                        imagePop: "img/fireout.gif",
                        truth: true,
                        health: true,
                        health: Math.floor(Math.random()*101),
                        slot1: {
                          context: "Take the car and escape",
                          image: "img/humvee.jpg",
                          textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                          imagePop:"img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Kill them all",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Run away",
                          image: "img/running.gif",
                          textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Steal their military humvee",
                        image: "img/humvee.jpg",
                        textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Pull out your gun and attack",
                        image: "img/forestshoot.gif",
                        textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot3: {
                      context: "Try to save the man",
                      image: "img/bleeding.gif",
                      textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                      imagePop: "img/planecrash.jpg",
                      truth: true,
                      health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*201),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                    }
                  },
                  slot3: {
                    context: "Start to climb down the plane",
                    image: "img/climb.gif",
                    textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                    image: "img/planecrash.jpg",
                    health: false,
                    truth: true,
                    slot1: {
                      context: "Wait until it gets dark for them to sleep",
                      image: "img/stealth.jpg",
                      textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                      imagePop: "img/night.gif",
                      health: true,
                      truth: true,
                      healthDMG: Math.floor(Math.random()*21),
                      slot1: {
                        context: "Kill all the soldiers in their sleep",
                        image: "img/stealthkill.gif",
                        textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                        imagePop: "img/tie.gif",
                        health: false,
                        truth: true,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Steal their military humvee",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1:{health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Sneak off into the night",
                        image: "img/sneaking.gif",
                        textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                        imagePop: "img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "Pull out your gun and attack",
                      image: "img/sneaking.gif",
                      textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Steal a military humvee and attack",
                      image: "img/humvee.jpg",
                      textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  }
                }
                // end of copy
              },
              slot2: {
                context: "Make a run for the door",
                image: "img/running.gif",
                textPop: "You try to make a run for the door, but they gunned you down as soon as you left your cover",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "I should surrender myself and figure out what the hell's going on",
                image: "img/surrender.jpg",
                textPop: "You decided it was time to wave the white flag and try to figure out what is going on, but unfortuantely you made a grave error and as soon as you peeked out and started talking you got shot in the face. You dead",
                imagePop: "img/gunfightdie.gif",
                truth:true,
                health:false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              }
            },
            slot1: {
              // 1112
              context: "Make a run for the door",
              image: "img/running.gif",
              textPop: "You try to make a run for the door, but they gunned you down as soon as you started running across them",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            },
            slot3: {
              // 1113
              context:"Start firing them gun blazing!",
              image: "img/returningfire.gif",
              textPop: "You start firing at them like a maniac, but it surprisingly worked. Only a few of them were able to get their weapons and return fire leaving you with some wounds, but not enough to stop you yet. You continue through another door and find yourself on an airfield. You need to think of a plan quick before they find you",
              imagePop: "img/airport.png",
              truth: true,
              health: false,
              slot1: {
                context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                image: 'img/forest.gif',
                textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                imagePop: 'img/bloodhand.gif',
                health: true,
                healthDMG: Math.floor(Math.random()*101),
                truth: true,
                slot1: {
                  context: "Continue to run",
                  image: "img/running.gif",
                  textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                  image: "img/mine.gif",
                  truth: true,
                  health: true,
                  healthDMG: Math.floor(Math.random()*121),
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot2: {
                  context: "Hide in the forest till things blow over",
                  image: "img/sneaking.gif",
                  textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                  imagePop: "img/dog.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Turn around and fight",
                  image: "img/forestshoot.gif",
                  textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                  imagePop: "img/mine.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }
              },
              slot2: {
                context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                image: "img/sneaking.gif",
                textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                imagePop: "img/blastedaway.gif",
                truth: true,
                health: false,
                slot1: {
                  health: true,
                  healthDMG: 100,
                },
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                image: "img/plane.jpg",
                textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                imagePop: "img/bleeding.gif",
                truth: true,
                health: false,
                slot1: {
                  context: "Use the plane radio to radio out for help",
                  image: "img/radio.gif",
                  textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                  imagePop: "img/forestshoot.gif",
                  truth: true,
                  health: true,
                  healthDMG: Math.floor(Math.random()*201),
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot2: {
                  context: "Search the plane for any supplies",
                  image: "img/insideplane.jpg",
                  textPop: "You search inside the plane hoping to score on some supplies.",
                  imagePop: "img/insideplane.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Grab the medikit and apply it on yourself",
                    image: "img/medikit.png",
                    textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                    imagePop: "img/planecrash.jpg",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Steal one of the military humvee's",
                      image: "img/humvee.jpg",
                      textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: true,
                      health: Math.floor(Math.random()*101),
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slo2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Surprise attack their camp",
                      image: "img/forestshoot.gif",
                      textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                      image: "img/hidden.jpg",
                      textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                      imagePop: "img/tie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "Grab the flare gun",
                    image: "img/flare.jpg",
                    textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                    imagePop: "img/planecrash.jpg",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Shoot the flare gun to start a fire near the camp",
                      image: "img/fire.gif",
                      textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                      imagePop: "img/fireout.gif",
                      truth: true,
                      health: true,
                      health: Math.floor(Math.random()*101),
                      slot1: {
                        context: "Take the car and escape",
                        image: "img/humvee.jpg",
                        textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                        imagePop:"img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Kill them all",
                        image: "img/forestshoot.gif",
                        textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Run away",
                        image: "img/running.gif",
                        textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "Steal their military humvee",
                      image: "img/humvee.jpg",
                      textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Pull out your gun and attack",
                      image: "img/forestshoot.gif",
                      textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot3: {
                    context: "Try to save the man",
                    image: "img/bleeding.gif",
                    textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                    imagePop: "img/planecrash.jpg",
                    truth: true,
                    health: false,
                      slot1: {
                        context: "Steal one of the military humvee's",
                        image: "img/humvee.jpg",
                        textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: true,
                        health: Math.floor(Math.random()*201),
                        slot1: {
                          health: true,
                          healthDMG: 100,
                        },
                        slo2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Surprise attack their camp",
                        image: "img/forestshoot.gif",
                        textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                        image: "img/hidden.jpg",
                        textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                        imagePop: "img/tie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                  }
                },
                slot3: {
                  context: "Start to climb down the plane",
                  image: "img/climb.gif",
                  textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                  image: "img/planecrash.jpg",
                  health: false,
                  truth: true,
                  slot1: {
                    context: "Wait until it gets dark for them to sleep",
                    image: "img/stealth.jpg",
                    textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                    imagePop: "img/night.gif",
                    health: true,
                    truth: true,
                    healthDMG: Math.floor(Math.random()*21),
                    slot1: {
                      context: "Kill all the soldiers in their sleep",
                      image: "img/stealthkill.gif",
                      textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                      imagePop: "img/tie.gif",
                      health: false,
                      truth: true,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Steal their military humvee",
                      image: "img/humvee.jpg",
                      textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1:{health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Sneak off into the night",
                      image: "img/sneaking.gif",
                      textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                      imagePop: "img/tie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "Pull out your gun and attack",
                    image: "img/sneaking.gif",
                    textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Steal a military humvee and attack",
                    image: "img/humvee.jpg",
                    textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                }
              }
            }

          },
          slot2: {
            // opens when user has hammer and icepick 122
            context: "Use the icepick to pick the cell open to free the man",
            truth: false,
            health: false,
            image: 'img/door.gif',
            textPop: "That turned out to be a really bad idea since the icepick can't really be used to open locks so you tried to smash it open. Unfortuantely the guard heard the noise and killed you.",
            imagePop: "img/gunfightdie.gif",
            slot1: {health: true, healthDMG: 100},
            slot2: {},
            slot3: {}
          },
          slot3: {
            context: "Try to sneak by the guard to reach the door",
            image: "img/sneaking.gif",
            textPop: "You tried to sneak by the man but he turned around and shot you.",
            imagePop: "img/gunfightdie.gif",
            truth: true,
            health: false,
            slot1: {health: true, healthDMG: 100},
            slot2: {},
            slot3: {}
          }
        },
        slot3: {
          // 13
          truth: true,
          health: false,
          context: "Knock on the door and see if someone opens it up",
          image: "img/knock.jpg",
          textPop: "After you knocked on the door no one answered for awhile then a large soldier walked into the room and pushed you back without saying a word.",
          imagePop: "img/soldier1.png",
          slot1: {
            // 331 DEAD
            imagePop: "img/gunfightdie.gif",
            textPop: "You went for the kudo chop to his neck, but he moved out of the way and shot you dead. GAME OVER",
            context: "I should kudo chop him in the neck before he does something",
            image: 'img/karatechop.jpg',
            truth: true,
            health: false,
            slot1: {
              health: true,
              healthDMG: 100,
            },
            slot2: {},
            slot3: {}
            // DEAD
          },
          slot2: {
            // 332
            imagePop: "img/nutshot.gif",
            health: false,
            truth: true,
            textPop: "That worked! He's temporary stunned, i need to act fast!",
            context: "Charge kick him in the nuts before he can react",
            image: "img/kick.jpeg",
            slot1: {
              // 3321
              context: "Take the gun away from him",
              image: "img/gun.png",
              textPop: "You dive for his weapon, but he doesn't give it up without a fight. After a short brawl you were able to snag the weapon off him and killed the soldier. Once you caught your breath you exited through the door entering a long hallway full of empty cells and noticed another door at the end. As you walked towards the door you noticed one of the cells actually had a man in it. He's about twice your size, and hasn't said a word since you both noticed eachother. What should i do?",
              imagePop: "img/gun.png",
              health: false,
              truth: true,
              slot1:{
                health: true,
                healthDMG: Math.floor(Math.random()*60),
                truth: true,
                context: "Find a way to break the man out",
                image: "img/man.png",
                textPop: "I decided that my best luck to get him out was to search the soldier I killed earlier and with my luck I had found just the one. After opening his cell the both of us decided that our best luck for survival was to help eachother escape. We agreed and exited out of door at the end of the hallway right from the frying pan into the fire. As I opened the door we had just stepped into dinning hall full of 6 soldiers eating food off their trays. They all simultaneously looked up confused. I need to act fast, what should i do? ",
                imagePop: "img/soldiers.jpg",
                // dinning hall
                slot1: {
                  // 3321
                  context: "Flip one of the dinning tables over and take cover behind it",
                  image: "img/covertable.gif",
                  textPop: "You flip the table over before they have any chance to react and take cover behind it with the man. After we both got behind cover they all started to fire their bullets towards out table. That was a good move. I've got to act fast.",
                  imagePop: "img/covertable.gif",
                  health: false,
                  truth: true,
                  slot1: {
                    // add kill man function
                    context: "Make a run for the door",
                    image: "img/running.gif",
                    textPop: "I ran towards the door leaving the man behind to fight for himself. As I ran away I was hit with a couple bullets, but was able to escape only with some scratches. Once I stepped outside the door I realized that this was some kind of military airport that they were holding us at. I need to think of a plan before those soldiers catch up to me.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    // copy for airfield w/o man w/ gun
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }
                      // end copy
                  },
                  slot2: {
                    context: "Pull out your gun and start shooting at the soldiers while you have the element of surprise.",
                    image: "img/returningfire.gif",
                    textPop: "I still had the element of surprise on them i was able to pick off 3 easily. The other 3 were more difficult, we took a beating, but with the man's help we were able to persevere. After it all ended we bandaged our wounds and continued out the exit. Once we were outside i realized that we were at an airfield. We need to act fast before we are spotted.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*101),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "Try to save the man",
                          image: "img/bleeding.gif",
                          textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                            slot1: {
                              context: "Steal one of the military humvee's",
                              image: "img/humvee.jpg",
                              textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: true,
                              health: Math.floor(Math.random()*201),
                              slot1: {
                                health: true,
                                healthDMG: 100,
                              },
                              slo2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Surprise attack their camp",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                              image: "img/hidden.jpg",
                              textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                              imagePop: "img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Pull out your gun and attack",
                          image: "img/sneaking.gif",
                          textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    }
                  },
                  slot3: {
                    context: "Convince the man to take the charge while you run away.",
                    image: 'img/talk.png',
                    textPop: "After a lot of persuasion under gun fire, i successfully convinced the man to lead the charge. I felt guilty, but it was all about survival now. As the man charged i used that as my opportunity to escape. I was able to escape without taking gunfire, the man didn't make it. Out the exit i noticed that i was on an airfield. I need to come up with a plan before they catch up to me.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }
                  }
                },
                slot2: {
                  // add kill man function
                  context: "Make a straight run for the door",
                  image: "img/running.gif",
                  textPop: "You decided to make a run for it before they could react, but unfortuantely you were blown away by gun fire and died. ",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Pull out your gun and attack before they get a chance to react.",
                  image: 'img/returningfire.gif',
                  health: false,
                  truth: true,
                  textPop: "You pull out your gun and start firing away. You were able to pick off most of them, but a few were able to grab their gun and fire back. Luckily the man charged them as well, but he got badly hurt. After we cleared the soldiers, we walked outside to realize that we were at an airport. I had to come up with a plan quick before others realized what had happened.",
                  imagePop: "img/airport.png",
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                      imagePop: "img/mine.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Pull out your gun and attack",
                          image: "img/forestshoot.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "Try to save the man",
                        image: "img/bleeding.gif",
                        textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Pull out your gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    }
                  }
                }
              },
              slot2:{
                context: "Continue along the hallway and try to find an exit leaving the man behind",
                image: "img/running.gif",
                textPop: "You ran down the hallway leaving the man behind and exited out the a door that led you to a large dinning hall filled with soldiers. You need to act quick",
                imagePop: "img/soldiers.jpg",
                truth: true,
                health: false,
                slot1: {
                  context: "Flip a dinning table to take cover behind it before they start firing at me?",
                  image: "img/covertable.gif",
                  textPop: "I flipped the table and dove behind it just in time, a couple of them started unloading bullets at me, luckily for me the table is made of thick metal that is taking most of the damage. I need to do something quick before they surround me.",
                  imagePop: "img/covertable.gif",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Make a run for the door",
                    image: "img/running.gif",
                    textPop: "You decided to run towards the door, but unfortuantely you slipped on a banana and fell onto your head killing you.",
                    imagePop: "img/gunfightdie.gif",
                    health: false,
                    truth: true,
                    slot1: {health: true,healthDMG: 100},
                    slot2: {},
                    slot3: {},
                  },
                  slot2: {
                    context: "Fireback from behind the table",
                    image: "img/returningfire.gif",
                    textPop: "You firedback from behind the table and held them off for quite awhile. Since you had the element of surprise you had picked off a lot of them before they were able to get their weapons. You took some damage, but were okay you continued out the exit and found yourself on an airport. You need to think of a plan.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }
                  },
                  slot3: {
                    context: "I should surrender myself and figure out what the hell's going on",
                    image: "img/surrender.jpg",
                    textPop: "You decided it was time to wave the white flag and try to figure out what is going on, but unfortuantely you made a grave error and as soon as you peeked out and started talking you got shot in the face. You dead",
                    imagePop: "img/gunfightdie.gif",
                    truth:true,
                    health:false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "I should fire them gun blazing before they get any chance to react",
                  image: "img/charge.jpg",
                  textPop: "You decided to go gun blazing, taking multiple bullet wounds, but nothing lethal enough to kill you yet. After bandaging yourself, you continued out the exit and found yourself on an airfield. I need to think of something quick before others spot me.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: Math.floor(Math.random()*51)},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Run out the exit",
                  image: "img/running.gif",
                  textPop: "You decided to run towards the exit but were blasted away from all the soldiers and ended up dying.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
              },
              slot3:{
                context: "Shoot the man in the in the prison cell",
                image:"img/bleeding.gif",
                textPop: "You decided to shoot the man in the cell, but he didn't go out easily and screamed for quite awhile. Shortly after some guards from another room entered and opened fire on you as soon as they saw you.",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              }
            },
            slot2: {
              context: "Make a run for it down the door.",
              image: "img/running.gif",
              textPop: "I ran right past the soldier down into the other room, i kept running as fast as i could down the hallway and ended up opening a door to a dinning hall with 6 soldiers eating their food, they all were puzzled to see me. They slowly reached down for their weapons. I need to act fast before i get killed.",
              imagePop: "img/soldiers.jpg",
              truth: true,
              health: false,
              slot1: {
                context: "Flip a dinning table to take cover behind it before they start firing at me?",
                image: "img/covertable.gif",
                textPop: "I flipped the table and dove behind it just in time, a couple of them started unloading bullets at me, luckily for me the table is made of thick metal that is taking most of the damage. I need to do something quick before they surround me.",
                imagePop: "img/covertable.gif",
                truth: true,
                health: false,
                slot1: {
                  context: "Make a run for the door",
                  image: "img/running.gif",
                  textPop: "I've already had my luck with running before, so i'm going to just make another run for it. As soon as a couple of them started to reload i ran for my life out the door. Unfortuantely i got hit a couple times, but not enough to stop me from getting the hell out of here. As i ran out the exit i realized i was at an airport. I need to think of a plan to get out of here.",
                  imagePop: "img/airport.png",
                  health: false,
                  truth: true,
                  // COPY!
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "You turn around and decide to fight them. With no weapon at hand you literally charged back at the sniper and got blown away like an idiot.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Try to steal a gun and kill them while they are busy",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun, but they heard caught you in the act and killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()* -101),
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Grab a gun and kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You grabbed a gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Try to steal weapons and attack them with it",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "You noticed a locked box in the back of the plane",
                        image: "img/lockedbox.jpg",
                        textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*201),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Steal a gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }

                    }
                  },
                  // end copy
                },
                slot2: {
                  context: "I should just charge them head on maybe i can take out one and grab his gun",
                  image: "img/punch.gif",
                  textPop: "You dove out of your cover and charged straight at them like an idiot and got shot in the face. You died.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "I should surrender myself and figure out what the hell's going on",
                  image: "img/surrender.jpg",
                  textPop: "You decided it was time to wave the white flag and try to figure out what is going on, but unfortuantely you made a grave error and as soon as you peeked out and started talking you got shot in the face. You dead",
                  imagePop: "img/gunfightdie.gif",
                  truth:true,
                  health:false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }
              },
              slot2: {
                context: "I should charge at them like a maniac and attack before they can make any moves. They won't see it coming",
                image: "img/charge.jpg",
                textPop: "You decided to charge right into them like and idiot, taking multiple bullet wounds to the face and dying. You dead",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "Run out the exit",
                image: "img/running.gif",
                textPop: "You made a run for the door, but in your clumseyness you ended up slipping on a tray and cracking your head open. You dead",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG:100},
                slot2: {},
                slot3: {}
              },
            },
            slot3: {
              context: "Choke him to death",
              image: "img/choke.jpg",
              textPop: "You attemped to choke him to death, but he was able to stab you with his pocket knife cutting your arm badly. After he broke free he shot you dead. ",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            }
          },
          slot3: {
            // 333
            context: "I should try to get some info from him and figure out what's going on.",
            image: "img/talk.png",
            textPop: "I tried to figure out what was going on from the soldier, but he instantly started to beat me to the floor, i could feel the life leaving me and all of the sudden a man walked in the room and threw the soldier across the room. He then grabbed his gun and started to bash him to death. He saved my life. After a short conversation i had found out that he has no idea what has happened either. Maybe i should team up with him.",
            imagePop:"img/beating.gif",
            truth: true,
            health:false,
            slot1: {
              health: true,
              healthDMG: Math.floor(Math.random()*81),
              context: "Convince him to escape together",
              imagePop: "img/soldiers.jpg",
              textPop: "I convinced him that the smart thing to do was to leave this place together, he agreed. We continued down the door into an area full of empty cells until we found a door. We continued through the door and accidently stumbbled upon 6 soldiers eating in a dinning hall. What should we do?",
              image: "img/talk.png",
              truth: true,
              slot1: {
                // 3321
                context: "Flip one of the dinning tables over and take cover behind it",
                image: "img/covertable.gif",
                textPop: "You flip the table over before they have any chance to react and take cover behind it with the man. After we both got behind cover they all started to fire their bullets towards out table. That was a good move. I've got to act fast.",
                imagePop: "img/covertable.gif",
                health: false,
                truth: true,
                slot1: {
                  // add kill man function
                  context: "Make a run for the door",
                  image: "img/running.gif",
                  textPop: "I ran towards the door leaving the man behind to fight for himself. As I ran away I was hit with a couple bullets, but was able to escape only with some scratches. Once I stepped outside the door I realized that this was some kind of military airport that they were holding us at. I need to think of a plan before those soldiers catch up to me.",
                  imagePop: "img/airport.png",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*51),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "You turn around and decide to fight them. With no weapon at hand you literally charged back at the sniper and got blown away like an idiot.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Try to steal a gun and kill them while they are busy",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun, but they heard caught you in the act and killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()* -101),
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Grab a gun and kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You grabbed a gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Try to steal weapons and attack them with it",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "You noticed a locked box in the back of the plane",
                        image: "img/lockedbox.jpg",
                        textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*201),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Steal a gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }

                    }
                  }
                },
                slot2: {
                  context: "Have the man shoot them as you guys have the element of surprise",
                  image: "img/returningfire.gif",
                  textPop: "We still had the element of surprise on them the man was able to pick off 3 easily. The other 3 were more difficult, we took a beating, but with the my help we were able to persevere. After it all ended we bandaged our wounds and continued out the exit. Once we were outside i realized that we were at an airfield. We need to act fast before we are spotted.",
                  imagePop: "img/airport.png",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                      imagePop: "img/mine.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Pull out your gun and attack",
                          image: "img/forestshoot.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "Try to save the man",
                        image: "img/bleeding.gif",
                        textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Pull out your gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    }
                  }
                },
                slot3: {
                  context: "Charge them as the man gave you cover fire",
                  image: 'img/charge.jpg',
                  textPop: "You charged them to give the man some chance to pick them off, unfortuantely you were shot a lot and ended up bleeding out. You dead ",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }
              },
              slot2: {
                // add kill man function
                health: true,
                healthDMG: Math.floor(Math.random()*81),
                context: "Make a straight run for the door",
                image: "img/running.gif",
                textPop: "I decided to make a straight run for the door before they could react in any way. It only kinda worked one of the soldiers was able to get a shoot on me in the knee, i tried to crawl out but the soldiers got to me and killed me. You dead",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                slot1: {
                  health: true,
                  healthDMG: Math.floor(Math.random()*31)
                },
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "Attack them before they get a chance to attack",
                image: 'img/returningfire.gif',
                health: false,
                truth: true,
                textPop: "You and the man decided to attack them before they had a chance to react. The man was able to pick off most of them, but unfortuantely you decided to charge them with your fists since you had no weapon and ended up getting shot to death.",
                imagePop: "img/gunfightdie.gif",
                slot1: {health: true, healthDMG: 100,},
                slot2: {},
                slot3: {}
              }
            },
            slot2: {
              health: true,
              healthDMG: Math.floor(Math.random()*81),
              context: "Attack him and steal his gun",
              image: "img/charge.jpg",
              textPop: "That was a dumb move, as you ran for his gun he knocked you down and shot you. You dead",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            },
            slot3: {
              health: true,
              healthDMG: Math.floor(Math.random()*81),
              context: "Part ways",
              image: "img/wave.gif",
              textPop: "After you parted ways you decided to find a way out of this place. You continued to search the area for a way out and found a door that led you to a dinning hall filled with soldiers. You noticed that the man that saved you earlier was dead on the floor shortly after walking in the soldiers fired at you and killed you. You dead",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            }
          }
          }
        },
      slot2: {
        // 2
        textPop: "As you walk towards the box. You notice a man peeking out of the box. 'STOP!' he yelled... You got any chocolate? I'll trade you. You reach in your pocket and find one chocolate bar. My lucky day",
        imagePop: "img/box.png",
        context: "You notice a box in the corner of the room. Walk close to examine the box",
        truth: true,
        image: 'img/closedbox.jpg',
        slot1: {
          // 21
          textPop: "You traded a chocolate bar for an axe",
          imagePop: "img/fire axe.jpg",
          context: "Trade a choclate bar for an fire axe. I might be able to axe something later",
          truth: true,
          image: "img/fire axe.jpg",
          slot1: {axe: true, restart: true},
          slot2: {axe: true, restart: true},
          slot3: {axe: true, restart: true}
        },
        slot2: {
          // 22
          textPop: "You traded a chocolate bar for an icepick",
          imagePop: "img/icepick.jpg",
          context: "Trade your chocolate bar for an icepick. Not sure what i'll use this for, but it might come in handy",
          truth: true,
          image: "img/icepick.jpg",
          slot1:{icepick: true, restart: true},
          slot2:{icepick: true, restart: true},
          slot3:{icepick: true, restart: true}
        },
        slot3: {
          // 23
          textPop: "You traded a chocolate bar for an hammer",
          imagePop: "img/hammer.jpg",
          context: "Trade your chocolate bar for a hammer. I can't think of a time that i'll need this besides hammertime.",
          truth: true,
          slot1:{hammer: true, restart: true},
          slot2:{hammer: true, restart: true},
          slot3:{hammer: true, restart: true},
          image: "img/hammer.jpg"
        }
      },
      slot3: {
        // 3
        imagePop: "img/vent.jpg",
        textPop: "You walk towards the vent and try to open it, but it won't budge. You start to hear noise coming from the door",
        context: "You look in the upper right corner and noticed a closed vent. Should i take a closer look?",
        truth: true,
        health: false,
        image: 'img/vent.jpg',
        slot1: {
          // 31
          textPop: "You use the hammer to pry open the vent and it works! You crawl into the vent and continue down until you come across a fan, you look around and notice a passage that takes you towards the right. What should i do?",
          imagePop: "img/vent.jpg",
          context: "I can try to use my hammer to yank it open",
          truth: false,
          health: false,
          image: 'img/hammer.jpg',
          slot1: {
            // 311
            image: "img/ventfan.jpg",
            textPop: "It WORKED! The fan was jammed long enough for me to be able to get through and pull out the hammer from the other side. Blinded by the bright light i realized that i was outside the building and now in the middle of an airfield. I need to figure out a plan",
            context: "I can try to jam the fan with the hammer i bought from the crazy man (if you unlocked hammer)",
            imagePop: "img/airport.png",
            truth: false,
            health: false,
            slot1: {
              context: "Try to run out of the airfield into the forest not to far by and make a run for it",
              image: 'img/forest.gif',
              textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
              imagePop: 'img/bloodhand.gif',
              bonus: true,
              bonuspts: 50,
              health: false,
              truth: true,
              slot1: {
                context: "Continue to run",
                image: "img/running.gif",
                textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                image: "img/mine.gif",
                truth: true,
                health: true,
                healthDMG: Math.floor(Math.random()*121),
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot2: {
                context: "Hide in the forest till things blow over",
                image: "img/sneaking.gif",
                textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                imagePop: "img/dog.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "Turn around and fight",
                image: "img/forestshoot.gif",
                textPop: "You turn around and decide to fight them. With no weapon at hand you literally charged back at the sniper and got blown away like an idiot.",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              }
            },
            slot2: {
              context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
              image: "img/sneaking.gif",
              textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
              imagePop: "img/blastedaway.gif",
              truth: true,
              health: false,
              slot1: {
                health: true,
                healthDMG: 100,
              },
              slot2: {},
              slot3: {}
            },
            slot3: {
              context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
              image: "img/plane.jpg",
              textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
              imagePop: "img/bleeding.gif",
              truth: true,
              health: false,
              slot1: {
                context: "Use the plane radio to radio out for help",
                image: "img/radio.gif",
                textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                imagePop: "img/forestshoot.gif",
                truth: true,
                health: true,
                healthDMG: Math.floor(Math.random()*201),
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot2: {
                context: "Search the plane for any supplies",
                image: "img/insideplane.jpg",
                textPop: "You search inside the plane hoping to score on some supplies.",
                imagePop: "img/insideplane.jpg",
                truth: true,
                health: false,
                slot1: {
                  context: "Grab the medikit and apply it on yourself",
                  image: "img/medikit.png",
                  textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                  imagePop: "img/planecrash.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Steal one of the military humvee's",
                    image: "img/humvee.jpg",
                    textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()*101),
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slo2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Try to steal a gun and kill them while they are busy",
                    image: "img/sneaking.gif",
                    textPop: "You stole a gun, but they heard caught you in the act and killed you.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()* -101),
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                    image: "img/hidden.jpg",
                    textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                    imagePop: "img/tie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "Grab the flare gun",
                  image: "img/flare.jpg",
                  textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                  imagePop: "img/planecrash.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Shoot the flare gun to start a fire near the camp",
                    image: "img/fire.gif",
                    textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                    imagePop: "img/fireout.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()*101),
                    slot1: {
                      context: "Take the car and escape",
                      image: "img/humvee.jpg",
                      textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                      imagePop:"img/tie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Grab a gun and kill them all",
                      image: "img/forestshoot.gif",
                      textPop: "You grabbed a gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Run away",
                      image: "img/running.gif",
                      textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "Steal their military humvee",
                    image: "img/humvee.jpg",
                    textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Try to steal weapons and attack them with it",
                    image: "img/sneaking.gif",
                    textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                    imagePop: "img/forestshoot.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot3: {
                  context: "You noticed a locked box in the back of the plane",
                  image: "img/lockedbox.jpg",
                  textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                  imagePop: "img/planecrash.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Steal one of the military humvee's",
                    image: "img/humvee.jpg",
                    textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()*201),
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slo2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Surprise attack their camp",
                    image: "img/forestshoot.gif",
                    textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                    image: "img/hidden.jpg",
                    textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                    imagePop: "img/tie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                }
              },
              slot3: {
                context: "Start to climb down the plane",
                image: "img/climb.gif",
                textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                image: "img/planecrash.jpg",
                health: false,
                truth: true,
                slot1: {
                  context: "Wait until it gets dark for them to sleep",
                  image: "img/stealth.jpg",
                  textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                  imagePop: "img/night.gif",
                  health: true,
                  truth: true,
                  healthDMG: Math.floor(Math.random()*21),
                  slot1: {
                    context: "Kill all the soldiers in their sleep",
                    image: "img/stealthkill.gif",
                    textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                    imagePop: "img/tie.gif",
                    health: false,
                    truth: true,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Steal their military humvee",
                    image: "img/humvee.jpg",
                    textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1:{health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Sneak off into the night",
                    image: "img/sneaking.gif",
                    textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                    imagePop: "img/tie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "Steal a gun and attack",
                  image: "img/sneaking.gif",
                  textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Steal a military humvee and attack",
                  image: "img/humvee.jpg",
                  textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }

              }
            }
          },
          slot2: {
            image: "img/punch.gif",
            textPop: "I started punching relentlessly and ended up cutting my hands really badly. That was a terrible idea. I bled out and died",
            context: "Maybe i can punch the fan out with my muscles!!!",
            imagePop: "img/gunfightdie.gif",
            truth: true,
            health: false,
            slot1: {
              health: true,
              healthDMG: 100,
            },
            slot2: {},
            slot3: {}
          },
          slot3: {
            context: "Take a right to continue down the vent",
            image: "img/ventright.png",
            textPop: "You decided to take a right down the vent and got pretty far. Out of no where the whole vent started to shake and it collapsed into a dinning hall filled with soldiers. They killed you on sight. You dead",
            imagePop: "img/gunfightdie.gif",
            truth: true,
            health: false,
            slot1: {health: true, healthDMG: 100},
            slot2: {},
            slot3: {}
        },
        },
        slot2: {
          // 32
          imagePop: "img/punch.gif",
          textPop: "I start reckless punching the vent like a maniac, and end up hurting myself. That hurt a lot. Fortuantely it worked. I crawled inside the vent and made my way through and am stopped by a large fan, and notice another passage to the right. What should i do?",
          context: "Maybe i can smash it open with my bare fists!!!!!",
          health: false,
          truth: true,
          image: 'img/punch.gif',
          slot1: {
            // 321
            image: "img/ventfan.jpg",
            textPop: "It WORKED! The fan was jammed long enough for me to be able to get through and pull out the hammer from the other side. Blinded by the bright light i realized that i was outside the building and now in the middle of an airfield. I need to figure out a plan",
            context: "I can try to jam the fan with the hammer i bought from the crazy man (if you unlocked hammer)",
            imagePop: "img/airport.png",
            healthDMG: Math.floor(Math.random()*21),
            truth: false,
            health: true,
            slot1: {
              context: "Try to run out of the airfield into the forest not to far by and make a run for it",
              image: 'img/forest.gif',
              textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
              imagePop: 'img/bloodhand.gif',
              bonus: true,
              bonuspts: 50,
              health: true,
              truth: true,
              slot1: {
                context: "Continue to run",
                image: "img/running.gif",
                textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                image: "img/mine.gif",
                truth: true,
                health: true,
                healthDMG: Math.floor(Math.random()*121),
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot2: {
                context: "Hide in the forest till things blow over",
                image: "img/sneaking.gif",
                textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                imagePop: "img/dog.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "Turn around and fight",
                image: "img/forestshoot.gif",
                textPop: "You turn around and decide to fight them. With no weapon at hand you literally charged back at the sniper and got blown away like an idiot.",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              }
            },
            slot2: {
              context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
              image: "img/sneaking.gif",
              textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
              imagePop: "img/blastedaway.gif",
              truth: true,
              health: false,
              slot1: {
                health: true,
                healthDMG: 100,
              },
              slot2: {},
              slot3: {}
            },
            slot3: {
              context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
              image: "img/plane.jpg",
              textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
              imagePop: "img/bleeding.gif",
              truth: true,
              health: false,
              slot1: {
                context: "Use the plane radio to radio out for help",
                image: "img/radio.gif",
                textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                imagePop: "img/forestshoot.gif",
                truth: true,
                health: true,
                healthDMG: Math.floor(Math.random()*201),
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot2: {
                context: "Search the plane for any supplies",
                image: "img/insideplane.jpg",
                textPop: "You search inside the plane hoping to score on some supplies.",
                imagePop: "img/insideplane.jpg",
                truth: true,
                health: false,
                slot1: {
                  context: "Grab the medikit and apply it on yourself",
                  image: "img/medikit.png",
                  textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                  imagePop: "img/planecrash.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Steal one of the military humvee's",
                    image: "img/humvee.jpg",
                    textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()*101),
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slo2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Try to steal a gun and kill them while they are busy",
                    image: "img/sneaking.gif",
                    textPop: "You stole a gun, but they heard caught you in the act and killed you.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()* -101),
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                    image: "img/hidden.jpg",
                    textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                    imagePop: "img/tie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "Grab the flare gun",
                  image: "img/flare.jpg",
                  textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                  imagePop: "img/planecrash.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Shoot the flare gun to start a fire near the camp",
                    image: "img/fire.gif",
                    textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                    imagePop: "img/fireout.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()*101),
                    slot1: {
                      context: "Take the car and escape",
                      image: "img/humvee.jpg",
                      textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                      imagePop:"img/tie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Grab a gun and kill them all",
                      image: "img/forestshoot.gif",
                      textPop: "You grabbed a gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Run away",
                      image: "img/running.gif",
                      textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "Steal their military humvee",
                    image: "img/humvee.jpg",
                    textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Try to steal weapons and attack them with it",
                    image: "img/sneaking.gif",
                    textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                    imagePop: "img/forestshoot.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot3: {
                  context: "You noticed a locked box in the back of the plane",
                  image: "img/lockedbox.jpg",
                  textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                  imagePop: "img/planecrash.jpg",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Steal one of the military humvee's",
                    image: "img/humvee.jpg",
                    textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: true,
                    health: Math.floor(Math.random()*201),
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slo2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Surprise attack their camp",
                    image: "img/forestshoot.gif",
                    textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                    image: "img/hidden.jpg",
                    textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                    imagePop: "img/tie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                }
              },
              slot3: {
                context: "Start to climb down the plane",
                image: "img/climb.gif",
                textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                image: "img/planecrash.jpg",
                health: false,
                truth: true,
                slot1: {
                  context: "Wait until it gets dark for them to sleep",
                  image: "img/stealth.jpg",
                  textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                  imagePop: "img/night.gif",
                  health: true,
                  truth: true,
                  healthDMG: Math.floor(Math.random()*21),
                  slot1: {
                    context: "Kill all the soldiers in their sleep",
                    image: "img/stealthkill.gif",
                    textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                    imagePop: "img/tie.gif",
                    health: false,
                    truth: true,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot2: {
                    context: "Steal their military humvee",
                    image: "img/humvee.jpg",
                    textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                    imagePop: "img/gunfightdie.gif",
                    truth: true,
                    health: false,
                    slot1:{health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "Sneak off into the night",
                    image: "img/sneaking.gif",
                    textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                    imagePop: "img/tie.gif",
                    truth: true,
                    health: false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "Steal a gun and attack",
                  image: "img/sneaking.gif",
                  textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Steal a military humvee and attack",
                  image: "img/humvee.jpg",
                  textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }

              }
            }
          },
          slot2: {
            // 322
            image: "img/punch.gif",
            textPop: "I started punching relentlessly and ended up cutting my hands really badly. That was a terrible idea. I bled out and died",
            context: "Maybe i can punch the fan out with my muscles!!!",
            imagePop: "img/gunfightdie.gif",
            truth: true,
            health: false,
            slot1: {
              health: true,
              healthDMG: 100,
              restart: true,
            },
            slot2: {},
            slot3: {}
          },
          slot3: {
          // 323
            context: "Take a right to continue down the vent",
            image: "img/ventright.png",
            textPop: "You decided to take a right down the vent and got pretty far. Out of no where the whole vent started to shake and it collapsed into a dinning hall filled with soldiers. They killed you on sight. You dead",
            imagePop: "img/gunfightdie.gif",
            truth: true,
            health: false,
            slot1: {health: true, healthDMG: 100},
            slot2: {},
            slot3: {}
        },
      },
        slot3: {
          // 33
          imagePop: "img/soldier1.png",
          textPop: "A large soldier walks into a room wielding a gun. 'Hey you!' He yelled. 'What are you doing?'",
          context: "I should call out to see what that noise was",
          truth: true,
          health: false,
          image: 'img/scream.jpg',
          slot1: {
            // 331 DEAD
            imagePop: "img/gunfightdie.gif",
            textPop: "You went for the kudo chop to his neck, but he moved out of the way and shot you dead. GAME OVER",
            context: "I should kudo chop him in the neck before he does something",
            image: 'img/karatechop.jpg',
            truth: true,
            health: false,
            slot1: {
              health: true,
              healthDMG: 100,
            },
            slot2: {},
            slot3: {}
            // DEAD
          },
          slot2: {
            // 332
            imagePop: "img/nutshot.gif",
            health: false,
            truth: true,
            textPop: "That worked! He's temporary stunned, i need to act fast!",
            context: "Charge kick him in the nuts before he can react",
            image: "img/kick.jpeg",
            slot1: {
              // 3321
              context: "Take the gun away from him",
              image: "img/gun.png",
              textPop: "You dive for his weapon, but he doesn't give it up without a fight. After a short brawl you were able to snag the weapon off him and killed the soldier. Once you caught your breath you exited through the door entering a long hallway full of empty cells and noticed another door at the end. As you walked towards the door you noticed one of the cells actually had a man in it. He's about twice your size, and hasn't said a word since you both noticed eachother. What should i do?",
              imagePop: "img/gun.png",
              health: false,
              truth: true,
              slot1:{
                health: true,
                healthDMG: Math.floor(Math.random()*60),
                truth: true,
                context: "Find a way to break the man out",
                image: "img/man.png",
                textPop: "I decided that my best luck to get him out was to search the soldier I killed earlier and with my luck I had found just the one. After opening his cell the both of us decided that our best luck for survival was to help eachother escape. We agreed and exited out of door at the end of the hallway right from the frying pan into the fire. As I opened the door we had just stepped into dinning hall full of 6 soldiers eating food off their trays. They all simultaneously looked up confused. I need to act fast, what should i do? ",
                imagePop: "img/soldiers.jpg",
                // dinning hall
                slot1: {
                  // 3321
                  context: "Flip one of the dinning tables over and take cover behind it",
                  image: "img/covertable.gif",
                  textPop: "You flip the table over before they have any chance to react and take cover behind it with the man. After we both got behind cover they all started to fire their bullets towards out table. That was a good move. I've got to act fast.",
                  imagePop: "img/covertable.gif",
                  health: false,
                  truth: true,
                  slot1: {
                    // add kill man function
                    context: "Make a run for the door",
                    image: "img/running.gif",
                    textPop: "I ran towards the door leaving the man behind to fight for himself. As I ran away I was hit with a couple bullets, but was able to escape only with some scratches. Once I stepped outside the door I realized that this was some kind of military airport that they were holding us at. I need to think of a plan before those soldiers catch up to me.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "Try to save the man",
                          image: "img/bleeding.gif",
                          textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                            slot1: {
                              context: "Steal one of the military humvee's",
                              image: "img/humvee.jpg",
                              textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: true,
                              health: Math.floor(Math.random()*201),
                              slot1: {
                                health: true,
                                healthDMG: 100,
                              },
                              slo2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Surprise attack their camp",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                              image: "img/hidden.jpg",
                              textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                              imagePop: "img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Pull out your gun and attack",
                          image: "img/sneaking.gif",
                          textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    }
                  },
                  slot2: {
                    context: "Pull out your gun and start shooting at the soldiers while you have the element of surprise.",
                    image: "img/returningfire.gif",
                    textPop: "I still had the element of surprise on them i was able to pick off 3 easily. The other 3 were more difficult, we took a beating, but with the man's help we were able to persevere. After it all ended we bandaged our wounds and continued out the exit. Once we were outside i realized that we were at an airfield. We need to act fast before we are spotted.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*31),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "Try to save the man",
                          image: "img/bleeding.gif",
                          textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                            slot1: {
                              context: "Steal one of the military humvee's",
                              image: "img/humvee.jpg",
                              textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: true,
                              health: Math.floor(Math.random()*201),
                              slot1: {
                                health: true,
                                healthDMG: 100,
                              },
                              slo2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Surprise attack their camp",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                              image: "img/hidden.jpg",
                              textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                              imagePop: "img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Pull out your gun and attack",
                          image: "img/sneaking.gif",
                          textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    }
                  },
                  slot3: {
                    context: "Convince the man to take the charge while you run away.",
                    image: 'img/talk.png',
                    textPop: "After a lot of persuasion under gun fire, i successfully convinced the man to lead the charge. I felt guilty, but it was all about survival now. As the man charged i used that as my opportunity to escape. I was able to escape without taking gunfire, the man didn't make it. Out the exit i noticed that i was on an airfield. I need to come up with a plan before they catch up to me.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }
                      // end copy
                  },
                  slot2: {
                    context: "Pull out your gun and start shooting at the soldiers while you have the element of surprise.",
                    image: "img/returningfire.gif",
                    textPop: "I still had the element of surprise on them i was able to pick off 3 easily. The other 3 were more difficult, we took a beating, but with the man's help we were able to persevere. After it all ended we bandaged our wounds and continued out the exit. Once we were outside i realized that we were at an airfield. We need to act fast before we are spotted.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*101),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "Try to save the man",
                          image: "img/bleeding.gif",
                          textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                            slot1: {
                              context: "Steal one of the military humvee's",
                              image: "img/humvee.jpg",
                              textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: true,
                              health: Math.floor(Math.random()*201),
                              slot1: {
                                health: true,
                                healthDMG: 100,
                              },
                              slo2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Surprise attack their camp",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                              image: "img/hidden.jpg",
                              textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                              imagePop: "img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Pull out your gun and attack",
                          image: "img/sneaking.gif",
                          textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    }
                  },
                  slot3: {
                    context: "Convince the man to take the charge while you run away.",
                    image: 'img/talk.png',
                    textPop: "After a lot of persuasion under gun fire, i successfully convinced the man to lead the charge. I felt guilty, but it was all about survival now. As the man charged i used that as my opportunity to escape. I was able to escape without taking gunfire, the man didn't make it. Out the exit i noticed that i was on an airfield. I need to come up with a plan before they catch up to me.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }

                  }
                },
                slot2: {
                  // add kill man function
                  context: "Make a straight run for the door",
                  image: "img/running.gif",
                  textPop: "You decided to make a run for it before they could react, but unfortuantely you were blown away by gun fire and died. ",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Pull out your gun and attack before they get a chance to react.",
                  image: 'img/returningfire.gif',
                  health: false,
                  truth: true,
                  textPop: "You pull out your gun and start firing away. You were able to pick off most of them, but a few were able to grab their gun and fire back. Luckily the man charged them as well, but he got badly hurt. After we cleared the soldiers, we walked outside to realize that we were at an airport. I had to come up with a plan quick before others realized what had happened.",
                  imagePop: "img/airport.png",
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                      imagePop: "img/mine.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Pull out your gun and attack",
                          image: "img/forestshoot.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "Try to save the man",
                        image: "img/bleeding.gif",
                        textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Pull out your gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    }
                  }
                }
              },
              slot2:{
                context: "Continue along the hallway and try to find an exit leaving the man behind",
                image: "img/running.gif",
                textPop: "You ran down the hallway leaving the man behind and exited out the a door that led you to a large dinning hall filled with soldiers. You need to act quick",
                imagePop: "img/soldiers.jpg",
                truth: true,
                health: false,
                slot1: {
                  context: "Flip a dinning table to take cover behind it before they start firing at me?",
                  image: "img/covertable.gif",
                  textPop: "I flipped the table and dove behind it just in time, a couple of them started unloading bullets at me, luckily for me the table is made of thick metal that is taking most of the damage. I need to do something quick before they surround me.",
                  imagePop: "img/covertable.gif",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Make a run for the door",
                    image: "img/running.gif",
                    textPop: "You decided to run towards the door, but unfortuantely you slipped on a banana and fell onto your head killing you.",
                    imagePop: "img/gunfightdie.gif",
                    health: false,
                    truth: true,
                    slot1: {health: true,healthDMG: 100},
                    slot2: {},
                    slot3: {},
                  },
                  slot2: {
                    context: "Fireback from behind the table",
                    image: "img/returningfire.gif",
                    textPop: "You firedback from behind the table and held them off for quite awhile. Since you had the element of surprise you had picked off a lot of them before they were able to get their weapons. You took some damage, but were okay you continued out the exit and found yourself on an airport. You need to think of a plan.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }
                      // end copy
                  },
                  slot2: {
                    context: "Pull out your gun and start shooting at the soldiers while you have the element of surprise.",
                    image: "img/returningfire.gif",
                    textPop: "I still had the element of surprise on them i was able to pick off 3 easily. The other 3 were more difficult, we took a beating, but with the man's help we were able to persevere. After it all ended we bandaged our wounds and continued out the exit. Once we were outside i realized that we were at an airfield. We need to act fast before we are spotted.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*101),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "Try to save the man",
                          image: "img/bleeding.gif",
                          textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                            slot1: {
                              context: "Steal one of the military humvee's",
                              image: "img/humvee.jpg",
                              textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: true,
                              health: Math.floor(Math.random()*201),
                              slot1: {
                                health: true,
                                healthDMG: 100,
                              },
                              slo2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Surprise attack their camp",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                              image: "img/hidden.jpg",
                              textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                              imagePop: "img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Pull out your gun and attack",
                          image: "img/sneaking.gif",
                          textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    }
                  },
                  slot3: {
                    context: "Convince the man to take the charge while you run away.",
                    image: 'img/talk.png',
                    textPop: "After a lot of persuasion under gun fire, i successfully convinced the man to lead the charge. I felt guilty, but it was all about survival now. As the man charged i used that as my opportunity to escape. I was able to escape without taking gunfire, the man didn't make it. Out the exit i noticed that i was on an airfield. I need to come up with a plan before they catch up to me.",
                    imagePop: "img/airport.png",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                      image: 'img/forest.gif',
                      textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                      imagePop: 'img/bloodhand.gif',
                      health: true,
                      healthDMG: Math.floor(Math.random()*41),
                      truth: true,
                      slot1: {
                        context: "Continue to run",
                        image: "img/running.gif",
                        textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                        image: "img/mine.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*121),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Hide in the forest till things blow over",
                        image: "img/sneaking.gif",
                        textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                        imagePop: "img/dog.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Turn around and fight",
                        image: "img/forestshoot.gif",
                        textPop: "You turn around and decide to fight them. You use the terrain as a mean's of defense and are able to hold them off for a long time. They got tired of sending men in to die so they decided to artilery strike you. You died.",
                        imagePop: "img/mine.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    },
                    slot2: {
                      context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                      image: "img/sneaking.gif",
                      textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                      imagePop: "img/blastedaway.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        health: true,
                        healthDMG: 100,
                      },
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                      image: "img/plane.jpg",
                      textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                      imagePop: "img/bleeding.gif",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Use the plane radio to radio out for help",
                        image: "img/radio.gif",
                        textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                        imagePop: "img/forestshoot.gif",
                        truth: true,
                        health: true,
                        healthDMG: Math.floor(Math.random()*201),
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot2: {
                        context: "Search the plane for any supplies",
                        image: "img/insideplane.jpg",
                        textPop: "You search inside the plane hoping to score on some supplies.",
                        imagePop: "img/insideplane.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Grab the medikit and apply it on yourself",
                          image: "img/medikit.png",
                          textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Pull out your gun and attack",
                            image: "img/forestshoot.gif",
                            textPop: "You gave them quite a scare and killed a lot with that surprise move, but there was too many of them for you. You died",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()* -101),
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Grab the flare gun",
                          image: "img/flare.jpg",
                          textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Shoot the flare gun to start a fire near the camp",
                            image: "img/fire.gif",
                            textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                            imagePop: "img/fireout.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*101),
                            slot1: {
                              context: "Take the car and escape",
                              image: "img/humvee.jpg",
                              textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                              imagePop:"img/tie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot2: {
                              context: "Pull out your gun and kill them all",
                              image: "img/forestshoot.gif",
                              textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            },
                            slot3: {
                              context: "Run away",
                              image: "img/running.gif",
                              textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                              imagePop: "img/gunfightdie.gif",
                              truth: true,
                              health: false,
                              slot1: {health: true, healthDMG: 100},
                              slot2: {},
                              slot3: {}
                            }
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Attack them",
                            image: "img/sneaking.gif",
                            textPop: "You pulled out your and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                            imagePop: "img/forestshoot.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot3: {
                          context: "You noticed a locked box in the back of the plane",
                          image: "img/lockedbox.jpg",
                          textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                          imagePop: "img/planecrash.jpg",
                          truth: true,
                          health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        }
                      },
                      slot3: {
                        context: "Start to climb down the plane",
                        image: "img/climb.gif",
                        textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                        image: "img/planecrash.jpg",
                        health: false,
                        truth: true,
                        slot1: {
                          context: "Wait until it gets dark for them to sleep",
                          image: "img/stealth.jpg",
                          textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                          imagePop: "img/night.gif",
                          health: true,
                          truth: true,
                          healthDMG: Math.floor(Math.random()*21),
                          slot1: {
                            context: "Kill all the soldiers in their sleep",
                            image: "img/stealthkill.gif",
                            textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                            imagePop: "img/tie.gif",
                            health: false,
                            truth: true,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Steal their military humvee",
                            image: "img/humvee.jpg",
                            textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1:{health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Sneak off into the night",
                            image: "img/sneaking.gif",
                            textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Attack them",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started attack. You put up a good fight but they outnumbered you. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Steal a military humvee and attack",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }

                      }
                    }
                  },
                  slot3: {
                    context: "I should surrender myself and figure out what the hell's going on",
                    image: "img/surrender.jpg",
                    textPop: "You decided it was time to wave the white flag and try to figure out what is going on, but unfortuantely you made a grave error and as soon as you peeked out and started talking you got shot in the face. You dead",
                    imagePop: "img/gunfightdie.gif",
                    truth:true,
                    health:false,
                    slot1: {health: true, healthDMG: 100},
                    slot2: {},
                    slot3: {}
                  }
                },
                slot2: {
                  context: "I should fire them gun blazing before they get any chance to react",
                  image: "img/charge.jpg",
                  textPop: "You decided to go gun blazing, taking multiple bullet wounds, but nothing lethal enough to kill you yet. After bandaging yourself, you continued out the exit and found yourself on an airfield. I need to think of something quick before others spot me.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: Math.floor(Math.random()*51)},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "Run out the exit",
                  image: "img/running.gif",
                  textPop: "You decided to run towards the exit but were blasted away from all the soldiers and ended up dying.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
              },
              slot3:{
                context: "Shoot the man in the in the prison cell",
                image:"img/bleeding.gif",
                textPop: "You decided to shoot the man in the cell, but he didn't go out easily and screamed for quite awhile. Shortly after some guards from another room entered and opened fire on you as soon as they saw you.",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              }
            },
            slot2: {
              context: "Make a run for it down the door.",
              image: "img/running.gif",
              textPop: "I ran right past the soldier down into the other room, i kept running as fast as i could down the hallway and ended up opening a door to a dinning hall with 6 soldiers eating their food, they all were puzzled to see me. They slowly reached down for their weapons. I need to act fast before i get killed.",
              imagePop: "img/soldiers.jpg",
              truth: true,
              health: false,
              slot1: {
                context: "Flip a dinning table to take cover behind it before they start firing at me?",
                image: "img/covertable.gif",
                textPop: "I flipped the table and dove behind it just in time, a couple of them started unloading bullets at me, luckily for me the table is made of thick metal that is taking most of the damage. I need to do something quick before they surround me.",
                imagePop: "img/covertable.gif",
                truth: true,
                health: false,
                slot1: {
                  context: "Make a run for the door",
                  image: "img/running.gif",
                  textPop: "I've already had my luck with running before, so i'm going to just make another run for it. As soon as a couple of them started to reload i ran for my life out the door. Unfortuantely i got hit a couple times, but not enough to stop me from getting the hell out of here. As i ran out the exit i realized i was at an airport. I need to think of a plan to get out of here.",
                  imagePop: "img/airport.png",
                  health: false,
                  truth: true,
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "You turn around and decide to fight them. With no weapon at hand you literally charged back at the sniper and got blown away like an idiot.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Try to steal a gun and kill them while they are busy",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun, but they heard caught you in the act and killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()* -101),
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Grab a gun and kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You grabbed a gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Try to steal weapons and attack them with it",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "You noticed a locked box in the back of the plane",
                        image: "img/lockedbox.jpg",
                        textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*201),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Steal a gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }

                    }
                  },
                },
                slot2: {
                  context: "I should just charge them head on maybe i can take out one and grab his gun",
                  image: "img/punch.gif",
                  textPop: "You dove out of your cover and charged straight at them like an idiot and got shot in the face. You died.",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                },
                slot3: {
                  context: "I should surrender myself and figure out what the hell's going on",
                  image: "img/surrender.jpg",
                  textPop: "You decided it was time to wave the white flag and try to figure out what is going on, but unfortuantely you made a grave error and as soon as you peeked out and started talking you got shot in the face. You dead",
                  imagePop: "img/gunfightdie.gif",
                  truth:true,
                  health:false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }
              },
              slot2: {
                context: "I should charge at them like a maniac and attack before they can make any moves. They won't see it coming",
                image: "img/charge.jpg",
                textPop: "You decided to charge right into them like and idiot, taking multiple bullet wounds to the face and dying. You dead",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG: 100},
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "Run out the exit",
                image: "img/running.gif",
                textPop: "You made a run for the door, but in your clumseyness you ended up slipping on a tray and cracking your head open. You dead",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                health: false,
                slot1: {health: true, healthDMG:100},
                slot2: {},
                slot3: {}
              },
            },
            slot3: {
              context: "Choke him to death",
              image: "img/choke.jpg",
              textPop: "You attemped to choke him to death, but he was able to stab you with his pocket knife cutting your arm badly. After he broke free he shot you dead. ",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            }
          },
          slot3: {
            // 333
            context: "I should try to get some info from him and figure out what's going on.",
            image: "img/talk.png",
            textPop: "I tried to figure out what was going on from the soldier, but he instantly started to beat me to the floor, i could feel the life leaving me and all of the sudden a man walked in the room and threw the soldier across the room. He then grabbed his gun and started to bash him to death. He saved my life. After a short conversation i had found out that he has no idea what has happened either. Maybe i should team up with him.",
            imagePop:"img/beating.gif",
            truth: true,
            health:false,
            slot1: {
              health: true,
              healthDMG: Math.floor(Math.random()*81),
              context: "Convince him to escape together",
              imagePop: "img/soldiers.jpg",
              textPop: "I convinced him that the smart thing to do was to leave this place together, he agreed. We continued down the door into an area full of empty cells until we found a door. We continued through the door and accidently stumbbled upon 6 soldiers eating in a dinning hall. What should we do?",
              image: "img/talk.png",
              truth: true,
              slot1: {
                // 3321
                context: "Flip one of the dinning tables over and take cover behind it",
                image: "img/covertable.gif",
                textPop: "You flip the table over before they have any chance to react and take cover behind it with the man. After we both got behind cover they all started to fire their bullets towards out table. That was a good move. I've got to act fast.",
                imagePop: "img/covertable.gif",
                health: false,
                truth: true,
                slot1: {
                  // add kill man function
                  context: "Make a run for the door",
                  image: "img/running.gif",
                  textPop: "I ran towards the door leaving the man behind to fight for himself. As I ran away I was hit with a couple bullets, but was able to escape only with some scratches. Once I stepped outside the door I realized that this was some kind of military airport that they were holding us at. I need to think of a plan before those soldiers catch up to me.",
                  imagePop: "img/airport.png",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you were spotted and were under heavy sniper fire, and are bleeding, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You kept running for awhile, but unfortuantely stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "You turn around and decide to fight them. With no weapon at hand you literally charged back at the sniper and got blown away like an idiot.",
                      imagePop: "img/gunfightdie.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it may be your best bet",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane you floored it and took heavy fire from the soldiers in the airfield, but somehow were able to get it off the ground. After a short flight due to you having no idea how to fly a plane, you crashed into the surrounding forest and went unconscious. Shortly after you woke up badly hurt in the plane which got ledged on top of a tree after the crash. The plane is wobly, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Try to steal a gun and kill them while they are busy",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun, but they heard caught you in the act and killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()* -101),
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Grab a gun and kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You grabbed a gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Try to steal weapons and attack them with it",
                          image: "img/sneaking.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "You noticed a locked box in the back of the plane",
                        image: "img/lockedbox.jpg",
                        textPop: "You crawl towards the back of the plane to take a closer look at the box. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*201),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Steal a gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }

                    }
                  }
                },
                slot2: {
                  context: "Have the man shoot them as you guys have the element of surprise",
                  image: "img/returningfire.gif",
                  textPop: "We still had the element of surprise on them the man was able to pick off 3 easily. The other 3 were more difficult, we took a beating, but with the my help we were able to persevere. After it all ended we bandaged our wounds and continued out the exit. Once we were outside i realized that we were at an airfield. We need to act fast before we are spotted.",
                  imagePop: "img/airport.png",
                  truth: true,
                  health: false,
                  slot1: {
                    context: "Try to run out of the airfield into the forest not to far by and make a run for it",
                    image: 'img/forest.gif',
                    textPop: "You decided to make a run for the forest. Unfortuantely you and the man were spotted and were under heavy sniper fire. Both of you are bleeding badly, but made it to the forest.",
                    imagePop: 'img/bloodhand.gif',
                    health: true,
                    healthDMG: Math.floor(Math.random()*41),
                    truth: true,
                    slot1: {
                      context: "Continue to run",
                      image: "img/running.gif",
                      textPop: "You guys kept running for awhile, but unfortuantely you stepped onto a mine and blew up",
                      image: "img/mine.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*121),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Hide in the forest till things blow over",
                      image: "img/sneaking.gif",
                      textPop: "You guys hid in the forest for a couple hours, but their dogs were able to find you and eat you alive",
                      imagePop: "img/dog.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot3: {
                      context: "Turn around and fight",
                      image: "img/forestshoot.gif",
                      textPop: "The both of you turn around and decide to fight them with the advantage of your terrain you held them off for a very long time until they got tired of sending men in and used artiliary to blow you guys up. You died ",
                      imagePop: "img/mine.gif",
                      truth: true,
                      health: false,
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    }
                  },
                  slot2: {
                    context: "You see soldiers loading weapons into an armory, maybe try to sneak into it?",
                    image: "img/sneaking.gif",
                    textPop: "You attempted to sneak into the armory, but was spotted by soldiers and was blasted away. The man got away, but You died",
                    imagePop: "img/blastedaway.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      health: true,
                      healthDMG: 100,
                    },
                    slot2: {},
                    slot3: {}
                  },
                  slot3: {
                    context: "You see a plane not too far away, you have no idea how to drive one, but it turns out that the man is actually a pilot. Just your luck",
                    image: "img/plane.jpg",
                    textPop: "You attempted to sneak to the plane, but was spotted by the sniper tower. You took heavy sniper fire and are bleeding, but you were able to get to the plane. After getting to the plane the man floored it and the plane took heavy damage from the soldiers at the airfield, but somehow he was able to get it off the ground. Unfortuantely the men at the airfield shot a hole into the gas container, the plane was running out of gas quick. The man steered the plane to crash land into the forest the best he could, but it was a rough landing. The landing crashed you guys onto a large tree, knocking you unconscious, but unfortuantely for the man a branch had pierced his chest killing him. Shortly after you woke up badly hurt in the plane which is woblying on the tree, you need to think of something fast.",
                    imagePop: "img/bleeding.gif",
                    truth: true,
                    health: false,
                    slot1: {
                      context: "Use the plane radio to radio out for help",
                      image: "img/radio.gif",
                      textPop: "You decided to use the radio to try to call out for help, you got in contact with a man who said he was from a local town that wasn't too far. Seeing you have no other choice you decided to give him your coords for him to come save you with other people. While you were waiting for them to arive a military humvee showed up to your location revealing that the man on the radio was not who he said he was. They began to shoot you in the plane killing you",
                      imagePop: "img/forestshoot.gif",
                      truth: true,
                      health: true,
                      healthDMG: Math.floor(Math.random()*201),
                      slot1: {health: true, healthDMG: 100},
                      slot2: {},
                      slot3: {}
                    },
                    slot2: {
                      context: "Search the plane for any supplies",
                      image: "img/insideplane.jpg",
                      textPop: "You search inside the plane hoping to score on some supplies.",
                      imagePop: "img/insideplane.jpg",
                      truth: true,
                      health: false,
                      slot1: {
                        context: "Grab the medikit and apply it on yourself",
                        image: "img/medikit.png",
                        textPop: "You grabbed the medikit and started to bandage up some of your open wounds. After you bandaged your wounds you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Steal one of the military humvee's",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            health: true,
                            healthDMG: 100,
                          },
                          slo2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Surprise attack their camp",
                          image: "img/forestshoot.gif",
                          textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                          image: "img/hidden.jpg",
                          textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Grab the flare gun",
                        image: "img/flare.jpg",
                        textPop: "You grabbed the flare gun and you started to notice the plane wobbling you grabbed onto something and braced for impact as the plane fell. After a moment to catch your breath you head out and run into a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                        slot1: {
                          context: "Shoot the flare gun to start a fire near the camp",
                          image: "img/fire.gif",
                          textPop: "You snuck to a safe distance and shot the flare into a bush near the camp that instantly got caught in flames. The paniced soldiers all ran towards it trying to put it out, giving you some time to act.",
                          imagePop: "img/fireout.gif",
                          truth: true,
                          health: true,
                          health: Math.floor(Math.random()*101),
                          slot1: {
                            context: "Take the car and escape",
                            image: "img/humvee.jpg",
                            textPop: "As they were busy putting out the fire you ran and stole their vehicle. When you turned the engine on and floored it, the soldiers heard the car turn on and started to take fire at you, but you were long gone. You win",
                            imagePop:"img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Kill them all",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but you were soon greatly out numbered and died.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Run away",
                            image: "img/running.gif",
                            textPop: "As you were running away you ran into a patrol who was coming into the camp to help put out hte fire. They didn't recongize you and shot you on the spot.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You attempt to steal their humvee, but you were spotted. They shot you dead",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Pull out your gun and attack",
                          image: "img/forestshoot.gif",
                          textPop: "You stole a gun and started firing at the soldiers, but there was too many of them for you to fight against. You died",
                          imagePop: "img/forestshoot.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot3: {
                        context: "Try to save the man",
                        image: "img/bleeding.gif",
                        textPop: "You crawl towards the back of the plane where the man was knocked back to. As you moved towards the back the entire plane began to wobble and fell out of the tree. You were thrown across and got really badly hurt. After a short while you gained the strength to move on leaving the man behind. You walked awhile until you came across a military camp.",
                        imagePop: "img/planecrash.jpg",
                        truth: true,
                        health: false,
                          slot1: {
                            context: "Steal one of the military humvee's",
                            image: "img/humvee.jpg",
                            textPop: "You attempt to steal one of the military humvee's from the camp, but are spotted and killed.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: true,
                            health: Math.floor(Math.random()*201),
                            slot1: {
                              health: true,
                              healthDMG: 100,
                            },
                            slo2: {},
                            slot3: {}
                          },
                          slot2: {
                            context: "Surprise attack their camp",
                            image: "img/forestshoot.gif",
                            textPop: "You pulled out your gun and started firing at the soldiers, but their was to many to hold back and they killed you.",
                            imagePop: "img/gunfightdie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          },
                          slot3: {
                            context: "Avoid the camp and follow the path that is alongside the camp as quietly as possible.",
                            image: "img/hidden.jpg",
                            textPop: "You quietly followed the path until it took you to a busy street where you were able to find help. YOU WIN",
                            imagePop: "img/tie.gif",
                            truth: true,
                            health: false,
                            slot1: {health: true, healthDMG: 100},
                            slot2: {},
                            slot3: {}
                          }
                      }
                    },
                    slot3: {
                      context: "Start to climb down the plane",
                      image: "img/climb.gif",
                      textPop: "You exit the plane onto the tree and slowly make your way down. Not too long later the plane falls off the tree and collapses bellow. You work your way down slowly and towards the bottom of the tree you slip. You only take some bruises from falling. You started to head out and after awhile of walking you ran into a military camp.",
                      image: "img/planecrash.jpg",
                      health: false,
                      truth: true,
                      slot1: {
                        context: "Wait until it gets dark for them to sleep",
                        image: "img/stealth.jpg",
                        textPop: "You decide the best thing to do is to wait until it gets dark to make a move.",
                        imagePop: "img/night.gif",
                        health: true,
                        truth: true,
                        healthDMG: Math.floor(Math.random()*21),
                        slot1: {
                          context: "Kill all the soldiers in their sleep",
                          image: "img/stealthkill.gif",
                          textPop: "You found a pocket knife in the camp and silently took out all the guards and took out all the soldiers. You were lucky that most of the guards were knocked out, once they were all dead, you continued to their humvee and road off into the distance.You win ",
                          imagePop: "img/tie.gif",
                          health: false,
                          truth: true,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot2: {
                          context: "Steal their military humvee",
                          image: "img/humvee.jpg",
                          textPop: "You got into the vehicle, but as soon as you started the car, a couple of the lookout soldiers who stayed away spotted you and shot you dead.",
                          imagePop: "img/gunfightdie.gif",
                          truth: true,
                          health: false,
                          slot1:{health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        },
                        slot3: {
                          context: "Sneak off into the night",
                          image: "img/sneaking.gif",
                          textPop: "You decide to leave them alone and sneak off into the distance. You continued for quite awhile and only a couple times almost accidently ran into a lookout, after awhile you came upon a busy street and were able to escape. You Win",
                          imagePop: "img/tie.gif",
                          truth: true,
                          health: false,
                          slot1: {health: true, healthDMG: 100},
                          slot2: {},
                          slot3: {}
                        }
                      },
                      slot2: {
                        context: "Pull out your gun and attack",
                        image: "img/sneaking.gif",
                        textPop: "You were able to steal a gun from the camp, but were spotted. You put up a good fight but they outnumbered you. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      },
                      slot3: {
                        context: "Steal a military humvee and attack",
                        image: "img/humvee.jpg",
                        textPop: "You got into the vehicle of the car, and started the engine to escape. Unfortuantely the noise of the car alerted the soldiers who ended up shooting you in the car. You died.",
                        imagePop: "img/gunfightdie.gif",
                        truth: true,
                        health: false,
                        slot1: {health: true, healthDMG: 100},
                        slot2: {},
                        slot3: {}
                      }
                    }
                  }
                },
                slot3: {
                  context: "Charge them as the man gave you cover fire",
                  image: 'img/charge.jpg',
                  textPop: "You charged them to give the man some chance to pick them off, unfortuantely you were shot a lot and ended up bleeding out. You dead ",
                  imagePop: "img/gunfightdie.gif",
                  truth: true,
                  health: false,
                  slot1: {health: true, healthDMG: 100},
                  slot2: {},
                  slot3: {}
                }
              },
              slot2: {
                // add kill man function
                health: true,
                healthDMG: Math.floor(Math.random()*81),
                context: "Make a straight run for the door",
                image: "img/running.gif",
                textPop: "I decided to make a straight run for the door before they could react in any way. It only kinda worked one of the soldiers was able to get a shoot on me in the knee, i tried to crawl out but the soldiers got to me and killed me. You dead",
                imagePop: "img/gunfightdie.gif",
                truth: true,
                slot1: {
                  health: true,
                  healthDMG: Math.floor(Math.random()*31)
                },
                slot2: {},
                slot3: {}
              },
              slot3: {
                context: "Attack them before they get a chance to attack",
                image: 'img/returningfire.gif',
                health: false,
                truth: true,
                textPop: "You and the man decided to attack them before they had a chance to react. The man was able to pick off most of them, but unfortuantely you decided to charge them with your fists since you had no weapon and ended up getting shot to death.",
                imagePop: "img/gunfightdie.gif",
                slot1: {health: true, healthDMG: 100,},
                slot2: {},
                slot3: {}
              }
            },
            slot2: {
              health: true,
              healthDMG: Math.floor(Math.random()*81),
              context: "Attack him and steal his gun",
              image: "img/charge.jpg",
              textPop: "That was a dumb move, as you ran for his gun he knocked you down and shot you. You dead",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            },
            slot3: {
              health: true,
              healthDMG: Math.floor(Math.random()*81),
              context: "Part ways",
              image: "img/wave.gif",
              textPop: "After you parted ways you decided to find a way out of this place. You continued to search the area for a way out and found a door that led you to a dinning hall filled with soldiers. You noticed that the man that saved you earlier was dead on the floor shortly after walking in the soldiers fired at you and killed you. You dead",
              imagePop: "img/gunfightdie.gif",
              truth: true,
              health: false,
              slot1: {health: true, healthDMG: 100},
              slot2: {},
              slot3: {}
            }
          }
        }
      },
    },
    players: {
      player1: {
        name: "Player1",
        total: 0,
        health: 100,
        axe: false,
        icepick: false,
        radio: false,
        rope: false,
        chocolate: 1
      },
      player2: {
        name: "Player2",
        total: 0,
        health: 100,
        axe: false,
        icepick: false,
        radio: false,
        rope: false,
        chocolate: 1
      },
    }
  }
  var player2points = $('.rightPoints')
  var player1points = $('.leftPoints')
  var player2health = $('.rightHealth')
  var player1health = $('.leftHealth')
  var player1inv = $('.leftInventory')
  var player2inv = $('.rightInventory')
  var player1 = game.players.player1
  var player2 = game.players.player2
  var player1box = $('.left')
  var player2box = $('.right')
  var restartbutton = $('.restartg')
  var axe = function() {
    if (currentPlayer.axe == true) {
      game.paths.slot1.slot1.truth = true
    }
    else {return false}}
  var icepick = function() {
    if (currentPlayer.icepick === true) {
      game.paths.slot1.slot2.truth = true
      game.paths.slot1.slot1.slot2.truth = true
      game.paths.slot1.slot2.slot1.truth = true
      game.paths.slot1.slot2.slot2.truth = true
      return true
    }
    else {return false;}
  }
  var hammer = function() {
    if (currentPlayer.hammer === true) {
      game.paths.slot3.slot1.truth = true
      game.paths.slot3.slot2.slot1.truth = true
      game.paths.slot3.slot1.slot1.truth = true
      return true
    }
    else {return false}
  }
  var box = function() {
  if(currentPlayer.chocolate > 0) {
    currentPlayer.chocolate -= 1
    return true
  }
  else {
    game.paths.slot2.truth = false
    return false
  }}
  var axeTrue = function () {currentPlayer.axe = true}
  var icepickTrue = function () {currentPlayer.icepick = true}
  var hammerTrue = function () {currentPlayer.hammer = true}
  var healthKill = function(which) {
    var dmgNow = Number(which.healthDMG)
    currentPlayer.health -= dmgNow
    console.log(dmgNow)
  }
  function switchPlayer() {
    if (game.players.player1.health > 0) {
      currentPlayer = game.players.player1
      console.log(currentPlayer)
    }
    if (currentPlayer == game.players.player2) {
      return true
    }
    if (game.players.player1.health <= 0) {
      currentPlayer = game.players.player2
      game.pickPath(game.paths.slot1, game.paths.slot2, game.paths.slot3)
      game.paths.slot2.truth = true
      boxFix()
      console.log(currentPlayer)
    }
  }
  function updatePlayer(){
    player2points.text("Total " + player2.total)
    player1health.text("Health " + player1.health)
    player1points.text("Total " + player1.total)
    player2health.text("Health " + player2.health)
    player1box.css("background-color", "yellow")
    if (player1.axe) {player1inv.text("Axe")}
    if (player1.icepick) {player1inv.text("Icepick")}
    if (player1.hammer) {player1inv.text("Hammer")}
    if (player2.hammer) {player2inv.text("Hammer")}
    if (player2.icepick) {player2inv.text("Icepick")}
    if (player2.axe) {player2inv.text("Axe")}
    if (currentPlayer == player2) {
      player2box.css("background-color", "yellow")
      player1box.css("background-color", "transparent")
    }
  }
  function getWinner() {
    console.log("home")
    if ((player2.health <= 0) && (player1.health <= 0)) {
      if(player2.total > player1.total) {
        $('#myModal').modal()
        $('.ptwo').text("Game over. Player 2 is the winner with " + player2.total + " and player 1 had " + player1.total + " points!")
        $('.pone').html('<img src =img/winner.gif>')
        unbind()
        endGame()
      }
      else if (player2.total < player1.total) {
        $('#myModal').modal()
        $('.ptwo').text("Game over. Player 1 is the winner with " + player1.total + " and player 2 had " + player2.total + " points!")
        $('.pone').html('<img src =img/winner.gif>')
        unbind()
        endGame()
      }
      else {
        $('#myModal').modal()
        $('.ptwo').text("Game over. Both players tied with " + player2.total + " points")
        $('.pone').html('<img src=img/tie.gif>')
        console.log("inside")
        unbind()
        endGame()
      }
     }
  }
  function endGame(){
    restartbutton.animate({
      'top': "0",
      'right': "0",
      'width': "100%",
      'height': "100%",
      'font-size': "200px",
      'opacity': "0.9",
    })
  }
  function boxFix() {
    game.slot2.on('click',function(){
            box()
            $('#myModal').modal()
            game.nextPath2(game.paths.slot2)
            $('.ptwo').text(game.paths.slot2.textPop)
            $('.pone').html('<img src ="' + game.paths.slot2.imagePop + '">')
            switchPlayer()
            getWinner()
          })
  }
  function unbind() {
    console.log(game.slot2)
    game.slot2.unbind('click')
    game.slot3.unbind('click')
    game.slot1.unbind('click')
  }
  function dryfix(slot, number) {
    bonus(slot)
    if (slot.axe == true) {axeTrue()}
    if (slot.icepick == true) {icepickTrue()}
    if (slot.hammer == true) {hammerTrue()}
    if (slot.restart == true) {
      game.pickPath(game.paths.slot1, game.paths.slot2, game.paths.slot3)
    }
    if (slot.health == true) {
    healthKill(slot)
  console.log("im running")}
    if (slot.truth == true) {
      game["slot" + number].on('click', function(){
        box()
        $('#myModal').modal()
        game["nextPath" + number](slot)
        $('.ptwo').text(slot.textPop)
        $('.pone').html('<img src ="' + slot.imagePop + '">')
        switchPlayer()
        getWinner()
        console.log("first")
        })
    }
    game["slot" + number].attr('src', slot.image)
    game["context" + number].text(slot.context)
  }
  function bonus(number){
    if (number.bonus){
      currentPlayer.total += number.bonuspts
    }
  }
restartbutton.on('click', function(){window.location.reload()})

// make all the above into a function and change player inventory to functions instead of true and false after game is complete on another branch


game.pickPath(game.paths.slot1, game.paths.slot2, game.paths.slot3)
