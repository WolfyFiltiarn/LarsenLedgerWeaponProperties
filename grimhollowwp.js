// Adds new Weapon types of Larsens Ledger
Hooks.once("init", () => {

  // Adding weapon proficiencies
  CONFIG.DND5E.weaponIds.Blunderbuss = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.QrRQWXWL1ECa7kA1";
  CONFIG.DND5E.weaponIds.BralersWraps = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.Vqn6S8b10xynkvUO";
  CONFIG.DND5E.weaponIds.Chakram = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.LuViR0IWJMw9kE4W";
  CONFIG.DND5E.weaponIds.Claw = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.dOC8ws8dphuguFFK";
  CONFIG.DND5E.weaponIds.KnuckleDuster = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.2zL3ptVhoMJe4NCy";
  CONFIG.DND5E.weaponIds.Musket = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.53e8kn4vr9HFDmEK";
  CONFIG.DND5E.weaponIds.Nunchaku = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.wQCfCTchZrnyzkOX";
  CONFIG.DND5E.weaponIds.Pistol = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.Dfw8BEsTfFBy6SK3";
  CONFIG.DND5E.weaponIds.Revolver = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.XRi5aQlJOGsP8dip";
  CONFIG.DND5E.weaponIds.Rifle = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.TwStP8h1n4ZvXilL";
  CONFIG.DND5E.weaponIds.Slingshot = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.EgaXZtRXruWtPlUo";
  CONFIG.DND5E.weaponIds.SpikedCestus = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.5B1VkMBXBlLcPMgA";
  CONFIG.DND5E.weaponIds.SpikedKnuckleDuster = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.CRFBRnkoOBpJC4vA";
  CONFIG.DND5E.weaponIds.Starknife = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.Ls7lmlcOocDvWYgA";
  CONFIG.DND5E.weaponIds.Tetherhook = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.8FhDtPP6pPDvilRn";
  CONFIG.DND5E.weaponIds.Twinblades = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.CdeF2Eg0hTCH1ePH";
  CONFIG.DND5E.weaponIds.WarCrescent = "Compendium.larsene-ledger-treasures-and-trinkets.weapons-item.Item.t3FHaqRqftmHCPvR";
  

  // Adding weapon properties of Loot Tavern
  CONFIG.DND5E.itemProperties.adaptable = {
    label: "Adaptable",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("adaptable");

  CONFIG.DND5E.itemProperties.attached = {
    label: "Attached",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("attached");

  CONFIG.DND5E.itemProperties.loudx = {
    label: "Loud (X)",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("loudx");

  CONFIG.DND5E.itemProperties.pugilist = {
    label: "Pugilist",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("pugilist");

  CONFIG.DND5E.itemProperties.reloadx = {
    label: "Reload (X)",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("reloadx");

  CONFIG.DND5E.itemProperties.thrownversatility = {
    label: "Thrown Versatility",
    isPhysical: "true"
  };
  CONFIG.DND5E.validProperties.weapon.add("thrownversatility");
});