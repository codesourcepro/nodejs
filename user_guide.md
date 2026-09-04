# Upper Marsyangdi Hydropower Project - User Guide

Welcome to the **HydroTrack** platform for managing the Upper Marsyangdi Hydropower Project.

This guide provides a brief overview of the project dashboard and instructions on how to create Daily Planning records.

---

## 1. Project Dashboard

The Dashboard provides a high-level overview of the project's financial metrics and alerts.

![Project Dashboard](/Users/pramod/.gemini/antigravity-ide/brain/93c7d2aa-099b-49d1-891f-e568873211a3/dashboard_1788444535459.png)

**Key Metrics Displayed:**
- **Contract Value**: Total budgeted value of the project.
- **Total Billed**: Amount billed to date.
- **Total Expense**: Expenses incurred to date.
- **Net Cost Variance**: Difference between billed and expense amounts.

---

## 2. Daily Planning Overview

The Daily Planning module allows Project Managers and Site Engineers to log planned work activities.

![Daily Planning Table](/Users/pramod/.gemini/antigravity-ide/brain/93c7d2aa-099b-49d1-891f-e568873211a3/daily_planning_1788444543019.png)

The table displays all plans along with their **Plan ID (UUID)**, Date, Category, Quantity, and current Approval Status.

---

## 3. Creating a New Daily Plan

To create a new plan, click the **New Plan** button in the top right corner of the Daily Planning page.

![New Daily Plan Modal](/Users/pramod/.gemini/antigravity-ide/brain/93c7d2aa-099b-49d1-891f-e568873211a3/new_plan_modal_1788444555618.png)

### Required Fields

When creating a new daily plan, you must fill out the following fields:

1. **Planning Date** *(Required)*
   - The date for which the work is being planned.
2. **Planned Quantity** *(Required)*
   - The numerical amount of work to be completed (e.g., `50`).
3. **Unit** *(Required)*
   - The unit of measurement for the quantity (e.g., `RM`, `M3`, `Nos`).
4. **Work Category** *(Required)*
   - The specific category of work. Select from options such as *Tunnel Excavation, Concrete Lining, Steel Work, Grouting*, etc.
5. **Description** *(Optional)*
   - Any additional notes or context regarding the planned work.

Once all required fields are filled, click the **Create** button to submit the plan. It will initially be placed in a `PENDING` approval status until reviewed by a supervisor.
