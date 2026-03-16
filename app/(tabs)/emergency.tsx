import { ScrollView, Text, View, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

export default function EmergencyScreen() {
  const colors = useColors();

  const handleCallPolice = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const handleCallSamu = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const handleHelpNeighbors = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6">
          <View className="gap-2">
            <Text className="text-2xl font-bold text-foreground">Pedir Ajuda</Text>
            <Text className="text-sm text-muted">Conecte-se com vizinhos próximos instantaneamente</Text>
          </View>

          <Pressable
            onPress={handleHelpNeighbors}
            style={({ pressed }) => [
              {
                backgroundColor: colors.primary,
                borderRadius: 20,
                padding: 32,
                alignItems: "center",
                justifyContent: "center",
                opacity: pressed ? 0.9 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
          >
            <IconSymbol name="phone.fill" size={64} color="#FFFFFF" />
            <Text className="text-white text-2xl font-bold mt-4">Pedir Ajuda</Text>
            <Text className="text-white text-sm mt-2 text-center">Vizinhos próximos serão notificados</Text>
          </Pressable>

          <View className="gap-3">
            <Text className="text-sm font-semibold text-muted uppercase">Serviços de Emergência</Text>

            <Pressable
              onPress={handleCallPolice}
              style={({ pressed }) => [
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.error,
                  borderWidth: 2,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View className="bg-error rounded-full p-3">
                <IconSymbol name="phone.fill" size={24} color="#FFFFFF" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-foreground">Polícia Militar</Text>
                <Text className="text-sm text-muted">190</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.muted} />
            </Pressable>

            <Pressable
              onPress={handleCallSamu}
              style={({ pressed }) => [
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.warning,
                  borderWidth: 2,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View className="bg-warning rounded-full p-3">
                <IconSymbol name="phone.fill" size={24} color="#FFFFFF" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-foreground">SAMU</Text>
                <Text className="text-sm text-muted">192</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.muted} />
            </Pressable>
          </View>

          <View className="gap-3">
            <Text className="text-sm font-semibold text-muted uppercase">Emergências Recentes</Text>

            <View className="bg-surface rounded-2xl p-4 border border-border">
              <View className="flex-row items-start gap-3 mb-2">
                <View className="w-3 h-3 rounded-full bg-error mt-1" />
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">Tentativa de invasão</Text>
                  <Text className="text-xs text-muted mt-1">Rua Principal, 123</Text>
                </View>
                <Text className="text-xs text-muted">5 min</Text>
              </View>
              <View className="flex-row gap-2">
                <View className="bg-primary rounded-full px-2 py-1">
                  <Text className="text-xs font-semibold text-white">8 ajudando</Text>
                </View>
              </View>
            </View>

            <View className="bg-surface rounded-2xl p-4 border border-border">
              <View className="flex-row items-start gap-3 mb-2">
                <View className="w-3 h-3 rounded-full bg-warning mt-1" />
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">Acidente de carro</Text>
                  <Text className="text-xs text-muted mt-1">Avenida Central, 456</Text>
                </View>
                <Text className="text-xs text-muted">12 min</Text>
              </View>
              <View className="flex-row gap-2">
                <View className="bg-primary rounded-full px-2 py-1">
                  <Text className="text-xs font-semibold text-white">3 ajudando</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
