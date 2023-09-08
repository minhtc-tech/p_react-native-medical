import { Link } from "expo-router";
import { Button, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Link href="/appointment-video">Appoint</Link>
      <Link href="/doctors-directory" asChild>
        <Button title="Doctors" />
      </Link>
      <Link href="/medication-detail">Medication</Link>
    </View>
  );
}
