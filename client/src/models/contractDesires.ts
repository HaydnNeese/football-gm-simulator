export interface ContractDesires {
    years?: number; // Desired contract length in years
    averageSalary?: number; // Desired average annual salary
    totalGuaranteed?: number; // Desired total guaranteed money
    bonuses?: {
        signingBonus?: number; // Desired signing bonus
        performanceBonuses?: Record<string, number>; // Performance bonuses based on achievements
    };
    tradeClause?: boolean; // If true, player wants a no-trade clause
    injuryGuarantee?: boolean; // If true, player wants injury guarantees in the contract
    rosterBonus?: {
        amount?: number; // Desired roster bonus amount
        perGame?: boolean; // If true, amount is per game; else lump sum
    };
    workoutBonus?: {
        amount?: number; // Desired workout bonus amount
        minWorkouts?: number; // Minimum workouts required to receive bonus
    };
    incentives?: {
        proBowl?: boolean; // Bonus for making the Pro Bowl
        proBowlAmount?: number; // Amount for making the Pro Bowl
        allPro?: boolean; // Bonus for being selected All-Pro
        allProAmount?: number; // Amount for being selected All-Pro
        mvp?: boolean; // Bonus for winning league MVP
        mvpAmount?: number; // Amount for winning league MVP
        superBowlMVP?: boolean; // Bonus for winning Super Bowl MVP
        superBowlMVPAmount?: number; // Amount for winning Super Bowl MVP
        playoffAppearance?: boolean; // Bonus for team making the playoffs
        playoffAppearanceAmount?: number; // Amount for team making the playoffs
        statMilestones?: {
            yards?: boolean; // Bonus for surpassing X yards (QB/RB/WR)
            yardsAmount?: number; // Amount for surpassing X yards
            touchdowns?: boolean; // Bonus for reaching touchdown milestones
            touchdownsAmount?: number; // Amount for reaching touchdown milestones
            sacks?: boolean; // For defensive players
            sacksAmount?: number; // Amount for reaching sack milestones
            interceptions?: boolean; // For defensive players
            interceptionsAmount?: number; // Amount for reaching interception milestones
        };
    };
    optOutYears?: number[]; // Years in which the player can opt out of the contract
    isPlayerOptOut?: boolean; // If true, player can opt out; else team
    isTeamOptOut?: boolean; // If true, team can opt out of the contract
}