export class Incentives {
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