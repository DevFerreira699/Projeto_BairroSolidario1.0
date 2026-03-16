import { ScrollView, Text, View, Pressable, Switch } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";
import { useState } from "react";

export default function ProfileScreen() {
  const colors = useColors();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const handleToggle = (value: boolean, setter: (v: boolean) => void) => {
    setter(value);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6">
          {/* Header */}
          <Text className="text-2xl font-bold text-foreground">Perfil</Text>

          {/* User Card */}
          <View className="bg-surface rounded-2xl p-6 border border-border items-center gap-4">
            <View className="w-16 h-16 rounded-full bg-primary items-center justify-center">
              <IconSymbol name="person.fill" size={32} color="#FFFFFF" />
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-foreground">João Silva</Text>
              <Text className="text-sm text-muted mt-1">Rua Principal, 123</Text>
            </View>
            <View className="flex-row gap-4 mt-2">
              <View className="items-center">
                <Text className="text-lg font-bold text-primary">12</Text>
                <Text className="text-xs text-muted">Alertas</Text>
              </View>
              <View className="items-center">
                <Text className="text-lg font-bold text-primary">5</Text>
                <Text className="text-xs text-muted">Câmeras</Text>
              </View>
              <View className="items-center">
                <Text className="text-lg font-bold text-primary">8</Text>
                <Text className="text-xs text-muted">Ajudas</Text>
              </View>
            </View>
          </View>

          {/* Settings */}
          <View className="gap-3">
            <Text className="text-sm font-semibold text-muted uppercase">Configurações</Text>

            <View className="bg-surface rounded-2xl border border-border overflow-hidden">
              <View className="flex-row items-center justify-between px-4 py-3 border-b border-border">
                <View className="flex-row items-center gap-3">
                  <IconSymbol name="bell.fill" size={20} color={colors.primary} />
                  <View>
                    <Text className="text-sm font-semibold text-foreground">Notificações</Text>
                    <Text className="text-xs text-muted">Receba alertas em tempo real</Text>
                  </View>
                </View>
                <Switch
                  value={notificationsEnabled}
                  onValueChange={(v) => handleToggle(v, setNotificationsEnabled)}
                  trackColor={{ false: colors.border, true: colors.primary }}
                />
              </View>

              <View className="flex-row items-center justify-between px-4 py-3">
                <View className="flex-row items-center gap-3">
                  <IconSymbol name="map.fill" size={20} color={colors.primary} />
                  <View>
                    <Text className="text-sm font-semibold text-foreground">Localização</Text>
                    <Text className="text-xs text-muted">Compartilhe sua localização</Text>
                  </View>
                </View>
                <Switch
                  value={locationEnabled}
                  onValueChange={(v) => handleToggle(v, setLocationEnabled)}
                  trackColor={{ false: colors.border, true: colors.primary }}
                />
              </View>
            </View>
          </View>

          {/* Account */}
          <View className="gap-3">
            <Text className="text-sm font-semibold text-muted uppercase">Conta</Text>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View className="flex-row items-center gap-3">
                <IconSymbol name="person.fill" size={20} color={colors.primary} />
                <Text className="text-sm font-semibold text-foreground">Editar Perfil</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.muted} />
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View className="flex-row items-center gap-3">
                <IconSymbol name="checkmark.circle.fill" size={20} color={colors.primary} />
                <Text className="text-sm font-semibold text-foreground">Privacidade</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.muted} />
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <View className="flex-row items-center gap-3">
                <IconSymbol name="exclamationmark.circle.fill" size={20} color={colors.error} />
                <Text className="text-sm font-semibold text-error">Sair</Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.muted} />
            </Pressable>
          </View>

          {/* About */}
          <View className="gap-2 mt-4">
            <Text className="text-xs text-muted text-center">Bairro Solidário v1.0.0</Text>
            <Text className="text-xs text-muted text-center">Segurança e solidariedade comunitária</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
