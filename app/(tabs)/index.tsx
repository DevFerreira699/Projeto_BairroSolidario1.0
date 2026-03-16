import { ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

export default function HomeScreen() {
  const router = useRouter();
  const colors = useColors();

  const handleEmergency = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    router.push("/(tabs)/emergency" as any);
  };

  const handleNavigate = async (route: "map" | "chat" | "profile") => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push(`/(tabs)/${route}` as any);
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6">
          {/* Header */}
          <View className="gap-2">
            <Text className="text-3xl font-bold text-foreground">Bairro Solidário</Text>
            <Text className="text-sm text-muted">Segurança e solidariedade comunitária</Text>
          </View>

          {/* Alert Summary Card */}
          <View className="bg-surface rounded-2xl p-4 border border-border">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg font-semibold text-foreground">Alertas Recentes</Text>
              <View className="bg-warning px-3 py-1 rounded-full">
                <Text className="text-xs font-semibold text-white">3 ativos</Text>
              </View>
            </View>
            <View className="gap-2">
              <View className="flex-row items-center gap-3">
                <View className="w-2 h-2 rounded-full bg-error" />
                <Text className="text-sm text-foreground flex-1">Pessoa suspeita na Rua A</Text>
                <Text className="text-xs text-muted">5 min</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="w-2 h-2 rounded-full bg-warning" />
                <Text className="text-sm text-foreground flex-1">Iluminação quebrada</Text>
                <Text className="text-xs text-muted">15 min</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="w-2 h-2 rounded-full bg-success" />
                <Text className="text-sm text-foreground flex-1">Câmera registrada</Text>
                <Text className="text-xs text-muted">1h</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="gap-3">
            <Text className="text-sm font-semibold text-muted uppercase">Ações Rápidas</Text>
            <View className="flex-row gap-3">
              <Pressable
                onPress={() => handleNavigate("map")}
                style={({ pressed }) => [
                  {
                    flex: 1,
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 16,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View className="items-center gap-2">
                  <IconSymbol name="map.fill" size={24} color={colors.primary} />
                  <Text className="text-xs font-semibold text-foreground">Ver Mapa</Text>
                </View>
              </Pressable>

              <Pressable
                onPress={() => handleNavigate("chat")}
                style={({ pressed }) => [
                  {
                    flex: 1,
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 16,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View className="items-center gap-2">
                  <IconSymbol name="message.fill" size={24} color={colors.primary} />
                  <Text className="text-xs font-semibold text-foreground">Chat</Text>
                </View>
              </Pressable>

              <Pressable
                onPress={() => handleNavigate("profile")}
                style={({ pressed }) => [
                  {
                    flex: 1,
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 16,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View className="items-center gap-2">
                  <IconSymbol name="person.fill" size={24} color={colors.primary} />
                  <Text className="text-xs font-semibold text-foreground">Perfil</Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* Community Stats */}
          <View className="bg-surface rounded-2xl p-4 border border-border">
            <Text className="text-sm font-semibold text-foreground mb-3">Comunidade</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-primary">47</Text>
                <Text className="text-xs text-muted mt-1">Moradores</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-primary">12</Text>
                <Text className="text-xs text-muted mt-1">Câmeras</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-primary">8</Text>
                <Text className="text-xs text-muted mt-1">Alertas Hoje</Text>
              </View>
            </View>
          </View>

          {/* Info Card */}
          <View className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
            <View className="flex-row gap-3">
              <IconSymbol name="bell.fill" size={20} color="#2563EB" />
              <View className="flex-1">
                <Text className="text-sm font-semibold text-blue-900 mb-1">Dica de Segurança</Text>
                <Text className="text-xs text-blue-800 leading-relaxed">
                  Ative notificações para receber alertas de emergência em tempo real dos seus vizinhos.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Emergency Button (FAB) */}
      <Pressable
        onPress={handleEmergency}
        style={({ pressed }) => [
          {
            position: "absolute",
            bottom: 80,
            right: 24,
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
      >
        <IconSymbol name="phone.fill" size={28} color="#FFFFFF" />
      </Pressable>
    </ScreenContainer>
  );
}
