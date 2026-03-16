import { ScrollView, Text, View, TextInput, Pressable, FlatList } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";
import { useState } from "react";

interface Message {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
}

const mockMessages: Message[] = [
  {
    id: "1",
    author: "João Silva",
    text: "Pessoal, tem dois caras olhando casas aqui na esquina",
    timestamp: "5 min",
    isOwn: false,
  },
  {
    id: "2",
    author: "Maria Santos",
    text: "Já avistei eles também! Estou monitorando",
    timestamp: "4 min",
    isOwn: false,
  },
  {
    id: "3",
    author: "Você",
    text: "Vou chamar a polícia se continuarem",
    timestamp: "2 min",
    isOwn: true,
  },
];

export default function ChatScreen() {
  const colors = useColors();
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"rua" | "bairro" | "emergencia">("rua");

  const handleSendMessage = async () => {
    if (message.trim()) {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setMessage("");
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View className={`flex-row mb-3 ${item.isOwn ? "justify-end" : "justify-start"}`}>
      <View
        className={`max-w-xs rounded-2xl px-4 py-2 ${
          item.isOwn ? "bg-primary" : "bg-surface border border-border"
        }`}
      >
        {!item.isOwn && <Text className="text-xs font-semibold text-muted mb-1">{item.author}</Text>}
        <Text className={`text-sm ${item.isOwn ? "text-white" : "text-foreground"}`}>{item.text}</Text>
        <Text className={`text-xs mt-1 ${item.isOwn ? "text-white opacity-70" : "text-muted"}`}>
          {item.timestamp}
        </Text>
      </View>
    </View>
  );

  return (
    <ScreenContainer className="p-6">
      <View className="flex-1 gap-4">
        {/* Header */}
        <Text className="text-2xl font-bold text-foreground">Chat</Text>

        {/* Tabs */}
        <View className="flex-row gap-2 border-b border-border pb-3">
          {["rua", "bairro", "emergencia"].map((tab) => (
            <Pressable
              key={tab}
              onPress={() => {
                setActiveTab(tab as any);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
              style={({ pressed }) => [
                {
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderBottomWidth: activeTab === tab ? 2 : 0,
                  borderBottomColor: colors.primary,
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text
                className={`text-sm font-semibold ${
                  activeTab === tab ? "text-primary" : "text-muted"
                }`}
              >
                {tab === "rua" ? "Rua" : tab === "bairro" ? "Bairro" : "Emergência"}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Messages */}
        <FlatList
          data={mockMessages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />

        {/* Input */}
        <View className="flex-row items-center gap-2 bg-surface rounded-full border border-border px-4 py-2">
          <TextInput
            placeholder="Escreva uma mensagem..."
            placeholderTextColor={colors.muted}
            value={message}
            onChangeText={setMessage}
            className="flex-1 text-foreground text-sm"
            multiline
          />
          <Pressable
            onPress={handleSendMessage}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <IconSymbol name="paperplane.fill" size={20} color={colors.primary} />
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
