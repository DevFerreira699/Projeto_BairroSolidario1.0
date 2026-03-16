import { ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

export default function MapScreen() {
  const colors = useColors();

  const handleAddOccurrence = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // TODO: Open modal to add occurrence
  };

  return (
    <ScreenContainer className="p-6">
      <View className="flex-1 gap-4">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-2xl font-bold text-foreground">Mapa do Bairro</Text>
          <Pressable
            onPress={handleAddOccurrence}
            style={({ pressed }) => [
              {
                backgroundColor: colors.primary,
                borderRadius: 8,
                padding: 8,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <IconSymbol name="exclamationmark.circle.fill" size={24} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Map Placeholder */}
        <View className="flex-1 bg-surface rounded-2xl border border-border items-center justify-center">
          <View className="items-center gap-2">
            <IconSymbol name="map.fill" size={48} color={colors.muted} />
            <Text className="text-foreground font-semibold">Mapa em desenvolvimento</Text>
            <Text className="text-xs text-muted text-center max-w-xs">
              Aqui será exibido o mapa interativo com marcadores de ocorrências
            </Text>
          </View>
        </View>

        {/* Filters */}
        <View className="gap-2">
          <Text className="text-xs font-semibold text-muted uppercase">Filtros</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-2">
            {["Suspeita", "Furto", "Acidente", "Câmera", "Veículo"].map((filter) => (
              <Pressable
                key={filter}
                style={({ pressed }) => [
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text className="text-sm font-medium text-foreground">{filter}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
}
