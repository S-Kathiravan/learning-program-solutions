package Week_1.Data_Structures_and_Algorithms.Ex_2_E_Commerce_platform;
import java.util.*;
class Product {
    int id;
    String name;

    String category;

    public Product(int id, String name, String category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }

    public String toString() {
        return "[" + id + "] " + name + " - " + category;
    }
}

public class ECommerceSearch {
    public static int linearSearch(Product[] products, String target) {
        int index = -1;
        for (int i = 0; i < products.length; i++) {
            if (products[i].name.equalsIgnoreCase(target)) {
                index = i;
                break;
            }
        }
        return index;
    }

    public static int binarySearch(Product[] products, String target) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int result = products[mid].name.compareToIgnoreCase(target);
            if (result == 0)
                return mid;
            else if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Tablet", "Electronics"),
                new Product(2, "Camera", "Photography"),
                new Product(3, "Shoes", "Fashion"),
                new Product(4, "Watch", "Accessories"),
                new Product(5, "Speaker", "Audio")
        };

        String searchFor = "Watch";

        int linearResult = linearSearch(products, searchFor);
        System.out.println("Linear Search Result:");
        if (linearResult != -1)
            System.out.println("Found: " + products[linearResult]);
        else
            System.out.println("Product not found");

        Arrays.sort(products, Comparator.comparing(p -> p.name));

        int binaryResult = binarySearch(products, searchFor);
        System.out.println("\nBinary Search Result:");
        if (binaryResult != -1)
            System.out.println("Found: " + products[binaryResult]);
        else
            System.out.println("Product not found");
    }
}
