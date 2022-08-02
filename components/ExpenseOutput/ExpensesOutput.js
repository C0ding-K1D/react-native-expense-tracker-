import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-06-19"),
  },
  {
    id: "e2",
    description: "Jeans",
    amount: 89.29,
    date: new Date("2022-07-01"),
  },
  {
    id: "e3",
    description: "Uber eats",
    amount: 30.99,
    date: new Date("2022-07-10"),
  },
  {
    id: "e4",
    description: "Gym membership",
    amount: 19.99,
    date: new Date("2022-07-29"),
  },
  {
    id: "e5",
    description: "A Book",
    amount: 25.99,
    date: new Date("2022-08-09"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
});

export default ExpensesOutput;
